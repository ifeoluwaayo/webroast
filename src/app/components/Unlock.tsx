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
      <h3 className="my-5 text-xl font-medium text-gray-600 text-center w-[50%]">
        Don&apos;t let your landing page be a conversion killer. Get our AI
        roast today and start converting more visitors into customers!
      </h3>

      <h2 className="text-xl font-semibold text-center capitalize">
        How Does it work?
      </h2>
    </div>
  );
};

export default Unlock;
