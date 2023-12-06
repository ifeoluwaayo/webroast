import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Refund Policy || Web Roast",
  description:
    "Welcome to Web Roast. Roast your website and receive instant, tailored suggestions to enhance its performance. Our expert analysis ensures your site is at its best, driving optimal results. Transform your online presence with Web Roast - where insightful suggestions meet swift solutions.",
};

const RefundPolicy = () => {
  return (
    <div className="flex flex-col p-5 md:p-8">
      <Link
        href="/"
        className="relative group before:absolute before:bg-black before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.30] hover:before:scale-y-100 px-4 pt-2 pb-3 before:transition-transform before:ease-in-out before:duration-500 hover:text-white text-black w-fit">
        <span className="font-inconsolata relative flex gap-2 items-center justify-center">
          <IoArrowBackCircleOutline className="rotate-45 group-hover:-rotate-45 transition-all duration-500 ease-in-out text-2xl" />
          Go Back
        </span>
      </Link>

      <div className="w-full flex items-center flex-col justify-center">
        <div className="flex flex-col md:w-[80%] lg:w-[60%] px-5 py-10 gap-5">
          <h3 className="font-inconsolata font-semibold text-2xl">
            Refund Policy
          </h3>
          <p>
            We want you to be satisfied with your purchase. If you are not
            completely happy with your purchase, please contact our customer
            support team within 30 days of your roast and we&apos;ll work on it.
          </p>
          <p>Refunds will be issued in the original form of payment.</p>
          <p>
            For any questions or concerns regarding refunds, please email us at{" "}
            <Link
              href="mailto:adeayomide112@gmail.com"
              className="font-semibold"
              prefetch={false}>
              Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
