import Image from "next/image";
import React from "react";

const Unlock = () => {
  return (
    <div className="flex items-center justify-center flex-col my-10 px-5 md:px-8">
      <h1 className="text-4xl text-center capitalize font-bold tracking-wider leading-tight">
        Unlock your potential for growth
      </h1>
      <h1 className="text-4xl text-center capitalize flex gap-2 items-center font-bold tracking-wider leading-tight">
        with a{" "}
        <span className="flex items-center">
          {" "}
          Roast{" "}
          <Image src="/roast.svg" alt="after button" width={30} height={30} />
        </span>
      </h1>
      <h3 className="my-5 text-xl font-medium text-gray-600 text-center w-full md:w-[50%]">
        Don&apos;t let your landing page be a conversion killer. Get our AI
        roast today and start converting more visitors into customers!
      </h3>

      <h2 className="text-xl font-semibold text-center capitalize">
        How Does it work?
      </h2>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="flex flex-col gap-1 items-center justify-center">
          <iframe src="https://lottie.host/?file=6aaf5990-7528-4ded-b6de-d9f2c4cd3f8e/eTAtv0oDSh.json"></iframe>
          <h3 className="font-inconsolata font-semibold text-xl tracking-wider">
            Make Payment
          </h3>
          <p className="text-center">
            Pay a one time fee of $12 and roast one of your landing pages
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <iframe src="https://lottie.host/?file=6aaf5990-7528-4ded-b6de-d9f2c4cd3f8e/eTAtv0oDSh.json"></iframe>
          <h3 className="font-inconsolata font-semibold text-xl tracking-wider">
            Make Payment
          </h3>
          <p className="text-center">
            Pay a one time fee of $12 and roast one of your landing pages
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <iframe src="https://lottie.host/?file=6aaf5990-7528-4ded-b6de-d9f2c4cd3f8e/eTAtv0oDSh.json"></iframe>
          <h3 className="font-inconsolata font-semibold text-xl tracking-wider">
            Make Payment
          </h3>
          <p className="text-center">
            Pay a one time fee of $12 and roast one of your landing pages
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
