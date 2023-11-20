import Image from "next/image";
import React from "react";
import Link from "next/link";

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

      <h2 className="text-xl font-semibold text-center mb-5 capitalize">
        How Does it work?
      </h2>
      <div className="flex flex-col md:flex-row gap-5 items-start justify-between">
        <div className="flex flex-col gap-1 max-w-[300px] items-center justify-center">
          <iframe src="https://lottie.host/?file=6aaf5990-7528-4ded-b6de-d9f2c4cd3f8e/eTAtv0oDSh.json"></iframe>
          <h3 className="font-inconsolata font-semibold text-xl tracking-wider">
            Form/Payment
          </h3>
          <p className="text-center">
            Fill the form with the landing page URL and pay a one time fee of
            $12 for the roast
          </p>
        </div>
        <div className="flex flex-col gap-1 max-w-[300px] items-center justify-center">
          <iframe src="https://lottie.host/?file=2ee5b623-307d-4b9f-8ede-6c539a5c4c9b/rsj19IJ4Xs.json"></iframe>
          <h3 className="font-inconsolata font-semibold text-xl tracking-wider">
            Roast/Feedback
          </h3>
          <p className="text-center">
            Receive feedback from your AI roast session in seconds
          </p>
        </div>
        <div className="flex flex-col gap-1 max-w-[300px] items-center justify-center">
          <iframe src="https://lottie.host/?file=9c968431-794d-419d-90ad-e583f828a40e/zHaIecNmrd.json"></iframe>
          <h3 className="font-inconsolata font-semibold text-xl tracking-wider">
            Make Changes
          </h3>
          <p className="text-center">
            Make changes or don&apos;t. Hopefully you do and then your landing
            page is a conversion machine.
          </p>
        </div>
      </div>
      <div className="text-center flex flex-col md:flex-row items-center justify-center mt-5 gap-2">
        <p className="animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#202935,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%]">
          Having issues converting your visitors?
        </p>
        <Link
          href="/roast"
          className="relative group before:absolute before:bg-black before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 px-2 pt-[2px] pb-1 md:pt-1 md:pb-2 before:transition-transform before:ease-in-out before:duration-500 text-sm md:text-base hover:text-white">
          <span className="font-inconsolata relative">Get Roasted</span>
        </Link>
      </div>
    </div>
  );
};

export default Unlock;
