"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export const SmoothScrollContext = createContext({
  scroll: null,
});

export const SmoothScrollProvider = ({
  children,
  options,
}: {
  children: React.ReactComponentElement<any>[];
  options: any;
}) => {
  const [scroll, setScroll] = useState<any | null>(null);

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;

          setScroll(
            new LocomotiveScroll({
              el:
                document.querySelector("[data-scroll-container]") ?? undefined,
              ...options,
            })
          );
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".section").forEach((section: any, i: number) => {
      if (section.getAttribute("data-color") !== null) {
        var colorAttr = section.getAttribute("data-color");
        console.log(colorAttr);

        gsap.to(document.documentElement, {
          backgroundColor: colorAttr,
          color: "#fff",
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            scrub: true,
            start: "top bottom",
            end: "+=100%",
            // markers: true,
          },
        });
      }
    });
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
