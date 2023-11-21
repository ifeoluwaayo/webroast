import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

const Payment = () => {
  return (
    <section
      id="payment"
      className="px-5 mt-28 md:mt-0 md:px-8 py-12 md:py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center capitalize font-bold tracking-wider leading-tight">
        Spend less, convert More?
      </h1>
      <h3 className="font-inconsolata text-xl mt-3 mb-8 md:max-w-[70%] text-center ">
        Our AI-powered landing page roasts are designed to help you optimize
        your page for maximum conversions. We offer different pricing tiers to
        fit your budget and anyone is suitable for landing pages, products, Saas
        and e-commerce websites
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="border-2 h-fit border-black gap-5 flex flex-col custom-shadow px-4 py-6 rounded-lg">
          <p className="font-inconsolata text-sm ">Single Roast</p>
          <div className="flex items-center gap-3">
            <p className="text-4xl font-bold">
              <span className="font-medium">$</span>12
            </p>
            <p className="text-lg font-semibold text-gray-600 line-through">
              $24
            </p>
          </div>
          <ul className="w-[300px] gap-1">
            <li className="flex items-start gap-3">
              <FaCircleCheck className="mt-1 text-lg" />
              <span>Roast in less than 3 min</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircleCheck className="w-9 mt-1 text-lg" />
              <span>
                Comprehensive analysis of your landing page&apos;s performance
                and usability
              </span>
            </li>
          </ul>

          <div className="w-fit relative mt-3 mb-2">
            <Link
              href="/roast"
              className="relative group before:absolute before:bg-black before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom hover:before:scale-y-[0.35] before:scale-y-100 px-4 pt-2 pb-3 before:transition-transform before:ease-in-out before:duration-500 hover:text-black text-white">
              <span className="font-inconsolata relative text-lg">
                Get Roasted{" "}
                <span className="group-hover:text-black text-gray-500 font-nunito">
                  $12
                </span>
              </span>
            </Link>
            <Image
              src="/after.svg"
              alt="after button"
              width={30}
              height={30}
              className="absolute -right-[20px] -bottom-[28px]"
            />
          </div>
        </div>

        {/* Second Price */}
        <div className="border-2 bg-gray-200 h-fit border-black gap-5 flex flex-col custom-shadow px-4 py-6 rounded-lg">
          <p className="font-inconsolata text-sm ">Single Roast</p>
          <div className="flex items-center gap-3">
            <p className="text-4xl font-bold">
              <span className="font-medium">$</span>89
            </p>
            <p className="text-lg font-semibold text-gray-600 line-through">
              $129
            </p>
          </div>
          <ul className="w-[300px] gap-1">
            <li className="flex items-start gap-3">
              <FaCircleCheck className="mt-1 text-lg" />
              <span>Roast in less than 3 min</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircleCheck className="mt-1 text-lg" />
              <span>Get a video roast in less than 12 hours</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircleCheck className="min-w-10 w-10 mt-1 text-lg" />
              <span>
                Comprehensive analysis of your landing page&apos;s performance
                and usability
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCircleCheck className="min-w-10 w-10 mt-1 text-lg" />
              <span>
                Get feedback from our AI and more than 10 people that have
                reviewed and roasted your page
              </span>
            </li>
          </ul>

          <div className="w-fit relative mt-3 mb-2">
            <Link
              href="/roast"
              className="relative group before:absolute before:bg-black before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom hover:before:scale-y-[0.35] before:scale-y-100 px-4 pt-2 pb-3 before:transition-transform before:ease-in-out before:duration-500 hover:text-black text-white">
              <span className="font-inconsolata relative text-lg">
                Get Roasted{" "}
                <span className="group-hover:text-black text-gray-500 font-nunito">
                  $89
                </span>
              </span>
            </Link>
            <Image
              src="/after.svg"
              alt="after button"
              width={30}
              height={30}
              className="absolute -right-[20px] -bottom-[28px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
