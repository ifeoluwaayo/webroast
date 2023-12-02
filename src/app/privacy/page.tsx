import Link from "next/link";
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const page = () => {
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
            Privacy Policy
          </h3>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Introduction</h4>
            <p>
              Welcome to WebRoast! This Privacy Policy outlines how we collect,
              use, share, and protect your personal information. By using our
              website, you agree to the terms described below.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Information We Collect</h4>
            <ul className="pl-3">
              <li className="">
                <strong>Personal Information</strong>: We may collect personal
                data such as your name, email address, and other contact details
                when you interact with our site.
              </li>
              <li className="">
                <strong>Usage Data</strong>: We automatically collect
                information about your interactions with our website, including
                IP addresses, browser type, and pages visited.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">
              How We Use Your Information
            </h4>
            <p>We use your data for the following purposes:</p>
            <ul className="pl-3">
              <li className="">To provide and maintain our services.</li>
              <li className="">To improve our website and user experience.</li>
              <li className="">
                To communicate with you regarding updates, promotions, and
                relevant content.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Data Sharing</h4>
            <p>
              We do not sell or rent your personal information to third parties.
              However, we may share data with service providers who assist us in
              operating our website.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Your Rights</h4>
            <p>You have the right to:</p>
            <ul className="pl-3">
              <li className="">Access and update your personal information.</li>
              <li className="">Request deletion of your data.</li>
              <li className="">Opt-out of marketing communications.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Cookies</h4>
            <p>
              We use cookies to enhance your browsing experience. You can manage
              cookie preferences through your browser settings.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Security</h4>
            <p>
              We take reasonable measures to protect your data. However, no
              method of transmission over the internet is entirely secure.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Changes to this Policy</h4>
            <p>
              We may update this Privacy Policy periodically. Please check back
              for any changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
