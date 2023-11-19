"use client";
import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const What = () => {
  const container = useRef(null);
  const wrapper = useRef(null);

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window && typeof window.innerWidth !== null) {
      const getScrollDistance = () => {
        let containerWidth = (container as any).current.offsetWidth;
        let scrollDistance = containerWidth - window.innerWidth;
        setHeight(scrollDistance);
        return -scrollDistance;
      };

      const isMobile = window.innerWidth <= 770;

      console.log(getScrollDistance());

      const tween = gsap.to(container.current, {
        x: getScrollDistance(),
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: wrapper.current,
        start: isMobile ? "top-=400px" : "top top",
        end: () => `+=${getScrollDistance() * -1.2}`,
        pin: true,
        animation: tween,
        scrub: 1,
        // markers: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    }
  }, []);

  return (
    <section
      data-color="#000"
      id="what"
      ref={wrapper}
      className="section px-5 md:px-8 py-14 md:py-20 flex flex-col items-center">
      <h1 className="text-4xl text-center capitalize font-bold tracking-wider leading-tight">
        What is a Roast?
      </h1>
      <h3 className="font-inconsolata text-2xl mt-3 mb-5 md:max-w-[70%] text-center ">
        Step into the Optimization Arena: Unleash the Power of AI-Powered
        Roasting
      </h3>
      <p className="text-center text-lg md:max-w-[80%]">
        Imagine your landing page as a gladiator entering the arena of digital
        competition. It&apos;s ready to battle for conversions, but is it fully
        equipped to conquer the challenge? That&apos;s where our AI-powered
        roasting comes in, serving as your landing page&apos;s personal trainer
        and strategist.
        <br />
        <br />A roast isn&apos;t just an evaluation; it&apos;s a metamorphosis,
        a transformation that turns your landing page into a conversion
        champion. Our team of experts, armed with cutting-edge AI tools, will
        scrutinize every aspect of your page, from its design and copywriting to
        its user experience.
      </p>

      <div className="max-w-full overflow-hidden">
        <div
          ref={container}
          className="overflow-x-scroll flex no-scrollbar gap-5 px-3 my-7 md:my-10 w-fit"
          data-scroll-in-section>
          <div className="bg-white shadow-xl shadow-gray-700 text-black py-3 px-4 rounded-md w-[80vw] md:min-w-[30vw] md:w-[30vw] flex flex-col gap-3">
            <Image
              src="/rad.jpg"
              alt="Radiation roast"
              width={50}
              height={40}
            />
            <h4 className="font-inconsolata text-lg">
              Uncover Hidden Conversion Kryptonite
            </h4>
            <p className="text-xs">
              Like kryptonite to Superman, conversion barriers can weaken your
              landing page&apos;s effectiveness. Our AI algorithms will scan
              your page like a radiation detector, identifying these hidden
              kryptonite elements that are hindering your conversions.
            </p>
          </div>
          <div className="bg-white shadow-xl shadow-gray-700 text-black py-3 px-4 rounded-md w-[80vw] md:min-w-[30vw] md:w-[30vw] flex flex-col gap-3">
            <Image
              src="/compass.png"
              alt="Radiation roast"
              width={50}
              height={40}
            />
            <h4 className="font-inconsolata text-lg">
              Data-Driven Insights: Your Roadmap to Conversion Victory
            </h4>
            <p className="text-xs">
              Our roast isn&apos;t just about pointing out flaws; it&apos;s
              about providing actionable insights that empower you to make
              data-driven decisions. We&apos;ll equip you with a roadmap to
              conversion victory, guiding you through the steps to optimize your
              landing page for maximum impact.
            </p>
          </div>
          <div className="bg-white shadow-xl shadow-gray-700 text-black py-3 px-4 rounded-md w-[80vw] md:min-w-[30vw] md:w-[30vw] flex flex-col gap-3">
            <Image
              src="/ninja.jpg"
              alt="Radiation roast"
              width={50}
              height={40}
            />
            <h4 className="font-inconsolata text-lg">
              Personalized Optimization: The Secret Weapon for Conversion
              Mastery
            </h4>
            <p className="text-xs">
              Every landing page is unique, just like every gladiator has their
              own fighting style. Our AI algorithms recognize this uniqueness,
              tailoring their recommendations to your specific landing page
              goals and target audience.
            </p>
          </div>
          <div className="bg-white shadow-xl shadow-gray-700 text-black py-3 px-4 rounded-md w-[80vw] md:min-w-[30vw] md:w-[30vw] flex flex-col gap-3">
            <Image
              src="/trophy.jpg"
              alt="Radiation roast"
              width={50}
              height={40}
            />
            <h4 className="font-inconsolata text-lg">
              Maximize Your ROI: The Ultimate Conversion Trophy
            </h4>
            <p className="text-xs">
              At the end of the day, conversions are the ultimate trophies in
              the digital arena. Our AI-powered roasting is designed to help you
              achieve your conversion goals, maximizing your ROI and propelling
              your business to new heights of success
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:max-w-[60%] items-center justify-center">
        <h3 className="text-2xl font-semibold tracking-wider text-center font-inconsolata">
          Ready to Unleash Your Landing Page&apos;s True Potential?
        </h3>
        <p className="text-center">
          Embark on your journey to conversion mastery with our AI-powered roast
          today. Our experts will analyze your landing page, provide
          personalized insights, and help you transform your page into a
          conversion champion.
        </p>
        <button className="relative w-fit group before:absolute before:bg-white before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom hover:before:scale-y-[0.35] before:scale-y-100 px-4 pt-2 pb-3 before:transition-transform before:ease-in-out before:duration-500 hover:text-white text-black">
          <span className="font-inconsolata relative text-lg">Get Roasted</span>
        </button>
      </div>
    </section>
  );
};

export default What;
