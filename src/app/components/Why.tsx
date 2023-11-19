import React from "react";

const Why = () => {
  return (
    <section
      id="why"
      data-color="#fff"
      className="section px-5 md:px-8 h-screen py-16 md:py-20 flex flex-col items-center">
      <h1 className="text-4xl text-center capitalize font-bold tracking-wider leading-tight">
        Why a Roast?
      </h1>
      <h3 className="font-inconsolata text-xl mt-3 mb-8 md:max-w-[70%] text-center ">
        Getting a roast for your landing page can be a great way to improve its
        performance and boost conversions. Here are some of the reasons why you
        might want to consider getting a roast:
      </h3>
      <ul className="flex flex-col gap-5 md:gap-8">
        <li className="md:max-w-[60%]">
          <span className="font-semibold font-inconsolata">
            🕵️‍♀️ Identify conversion killers:
          </span>
          A roast can help you identify the hidden factors that are preventing
          visitors from converting into customers. This could include things
          like outdated design, confusing copywriting, or a lack of clear calls
          to action.
        </li>
        <li className="md:max-w-[60%] md:ml-auto">
          <span className="font-semibold font-inconsolata">
            🧭 Gain data-driven insights:
          </span>
          A roast will provide you with actionable insights based on real data,
          not just guesswork. This data can help you make informed decisions
          about how to improve your landing page.
        </li>
        <li className="md:max-w-[60%]">
          <span className="font-semibold font-inconsolata">
            🥷 Personalize your optimization:
          </span>
          A roast will take into account your specific landing page goals and
          target audience to provide personalized recommendations. This ensures
          that your optimization efforts are focused on the most effective
          strategies.
        </li>
        <li className="md:max-w-[60%] md:ml-auto">
          <span className="font-semibold font-inconsolata">
            🏆 Maximize your ROI:
          </span>
          A roast can help you significantly improve your conversion rates and
          achieve your business objectives. This can lead to a significant
          increase in your return on investment (ROI).
        </li>
      </ul>
    </section>
  );
};

export default Why;
