import React from "react";
import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Form from "./Form";

const RoastPage = () => {
  return (
    <div className="flex flex-col p-5 md:p-8">
      <Link
        href="/"
        className="flex gap-2 items-center group bg-black text-white font-medium px-4 py-2 rounded-full shadow w-fit">
        <IoArrowBackCircleOutline className="rotate-45 group-hover:-rotate-45 transition-all duration-500 ease-in-out text-2xl" />
        Go Back
      </Link>

      <div className="w-full flex items-center justify-center">
        <Form />
      </div>
    </div>
  );
};

export default RoastPage;
