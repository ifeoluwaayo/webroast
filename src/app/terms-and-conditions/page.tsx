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
            Terms & Conditions
          </h3>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Acceptance of Terms</h4>
            <p>By using WebRoast, you agree to the following terms:</p>
            <ul className="pl-3">
              <li className="">
                <strong>Use of Content</strong>: You may access and use the
                content on our website for personal, non-commercial purposes.
              </li>
              <li className="">
                <strong>Intellectual Property</strong>: All content, trademarks,
                and logos are the property of WebRoast.
              </li>
              <li className="">
                <strong>User Conduct</strong>: You agree not to engage in any
                unlawful or harmful activities on our site.
              </li>
              <li className="">
                <strong>Disclaimer</strong>:We provide information on an “as-is”
                basis. We do not guarantee accuracy or completeness.
              </li>
              <li className="">
                <strong>Use of Content</strong>: You may access and use the
                content on our website for personal, non-commercial purposes.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Limitation of Liability</h4>
            <p>
              WebRoast is not liable for any damages arising from your use of
              our website.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">Changes to Terms</h4>
            <p>We reserve the right to modify these terms at any time.</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-xl">
              Need further Clarifications?
            </h4>
            <p>
              Send a message to{" "}
              <a
                href="mailto:adeayomide112@gmail.com"
                className="font-semibold font-inconsolata">
                Support
              </a>{" "}
              and we&apos;ll answer you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
