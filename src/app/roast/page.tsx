import React from "react";
import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Form from "./Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roast || Web Roast",
  description:
    "Welcome to Web Roast. Roast your website and receive instant, tailored suggestions to enhance its performance. Our expert analysis ensures your site is at its best, driving optimal results. Transform your online presence with Web Roast - where insightful suggestions meet swift solutions.",
};

const RoastPage = () => {
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

      <div className="w-full flex items-center justify-center">
        <Form />
      </div>
    </div>
  );
};

export default RoastPage;
