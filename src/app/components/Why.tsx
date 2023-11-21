"use client";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Why = () => {
  useLayoutEffect(() => {
    const cards = gsap.utils.toArray(".card");
    const spacer = 20;
    const minScale = 0.8;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card: any, index) => {
      const scaleVal = distributor(index, cards[index], cards);

      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
          markers: false,
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: scaleVal,
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top`,
        endTrigger: ".cards",
        end: `bottom top+=${200 + cards.length * spacer}`,
        pin: true,
        pinSpacing: false,
        markers: false,
        id: "pin",
        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <section
      id="why"
      data-color="#fff"
      className="section px-5 md:px-8 mt-28 md:mt-0 h-fit py-16 md:py-20 flex flex-col items-center">
      <h1 className="text-4xl text-center capitalize font-bold tracking-wider leading-tight">
        Why a Roast?
      </h1>
      <h3 className="font-inconsolata text-xl mt-3 mb-8 md:max-w-[70%] text-center ">
        Getting a roast for your landing page can be a great way to improve its
        performance and boost conversions. Here are some of the reasons why you
        might want to consider getting a roast:
      </h3>
      <ul className="flex flex-col items-center justify-center gap-5 pb-16 md:pb-10 md:gap-8 first:inner cards">
        <li className="md:max-w-[60%] px-3 py-4 w-[85%] card h-[400px] md:h-[300px] rounded-lg flex flex-col items-center justify-center text-lg gap-3 text-center bg-white">
          <span className="font-semibold font-inconsolata text-2xl">
            🕵️‍♀️ Identify conversion killers:
          </span>
          <p className="max-w-[90%]">
            A roast can help you identify the hidden factors that are preventing
            visitors from converting into customers. This could include things
            like outdated design, confusing copywriting, or a lack of clear
            calls to action.
          </p>
        </li>
        <li className="md:max-w-[60%] px-3 py-4 w-[85%] card h-[400px] md:h-[300px] rounded-lg flex flex-col items-center justify-center text-lg gap-3 text-center bg-gray-50">
          <span className="font-semibold font-inconsolata text-2xl">
            🧭 Gain data-driven insights:
          </span>
          <p className="max-w-[90%]">
            A roast will provide you with actionable insights based on real
            data, not just guesswork. This data can help you make informed
            decisions about how to improve your landing page.
          </p>
        </li>
        <li className="md:max-w-[60%] px-3 py-4 w-[85%] card h-[400px] md:h-[300px] rounded-lg flex flex-col items-center justify-center text-lg gap-3 text-center bg-white">
          <span className="font-semibold font-inconsolata text-2xl">
            🥷 Personalize your optimization:
          </span>
          <p className="max-w-[90%]">
            A roast will take into account your specific landing page goals and
            target audience to provide personalized recommendations. This
            ensures that your optimization efforts are focused on the most
            effective strategies.
          </p>
        </li>
        <li className="md:max-w-[60%] px-3 py-4 w-[85%] card h-[400px] md:h-[300px] rounded-lg flex flex-col items-center justify-center text-lg gap-3 text-center bg-gray-50">
          <span className="font-semibold font-inconsolata text-2xl">
            🏆 Maximize your ROI:
          </span>
          <p className="max-w-[90%]">
            A roast can help you significantly improve your conversion rates and
            achieve your business objectives. This can lead to a significant
            increase in your return on investment (ROI).
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Why;
