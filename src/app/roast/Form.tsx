"use client";
import { useState } from "react";
import LemonSqueezy from "@lemonsqueezy/lemonsqueezy.js";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { handleCheckout } from "./lemon";

const Form = () => {
  const [data, setData] = useState({
    url: "",
    email: "",
    variantId: "157582",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    handleCheckout(data);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 w-full max-w-[320px] md:max-w-[23rem]">
      <h3 className="font-inconsolata font-semibold text-2xl">Submit URL</h3>

      <form className="mt-5 flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <input
          className="shadow-sm rounded-full w-full flex-1 bg-gray-100 outline-none ring-0 text-base px-4 py-2"
          type="url"
          placeholder="Page URL"
          value={data.url}
          required
          onChange={(e: any) => setData({ ...data, url: e.target.value })}
        />
        <input
          className="shadow-sm rounded-full w-full flex-1 bg-gray-100 outline-none ring-0 text-base px-4 py-2"
          type="email"
          placeholder="Email Address"
          value={data.email}
          required
          onChange={(e: any) => setData({ ...data, email: e.target.value })}
        />

        <div className="rounded-lg p-5 w-full mt-5 gap-4 flex flex-col border border-gray-200">
          Price
          <button
            type="button"
            onClick={() => setData({ ...data, variantId: "157576" })}
            className={`rounded-lg px-4 py-2 gap-4 w-full flex border ${
              data.variantId === "157576" ? "border-black" : "border-gray-200"
            } items-center justify-between transition-all duration-500 ease-in-out`}>
            <div className="flex-col items-start flex gap-1">
              <p className="text-lg font-semibold">$4 / Roast</p>
              <p className="text-sm text-gray-500 font-inconsolata">
                * New Launch Offer
              </p>
            </div>

            {data.variantId === "157576" ? (
              <FaCheckCircle className="text-xl transition-all duration-500 ease-in-out" />
            ) : (
              <MdOutlineRadioButtonUnchecked className="text-xl transition-all duration-500 ease-in-out" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setData({ ...data, variantId: "157582" })}
            className={`rounded-lg px-4 py-2 gap-4 w-full flex border ${
              data.variantId === "157582" ? "border-black" : "border-gray-200"
            } items-center justify-between transition-all duration-500 ease-in-out`}>
            <div className="flex-col items-start flex gap-1">
              <p className="text-lg font-semibold">$12 / Roast</p>
              <p className="text-sm text-gray-500 font-inconsolata">
                * Single Page Roast
              </p>
            </div>

            {data.variantId === "157582" ? (
              <FaCheckCircle className="text-xl transition-all duration-500 ease-in-out" />
            ) : (
              <MdOutlineRadioButtonUnchecked className="text-xl transition-all duration-500 ease-in-out" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setData({ ...data, variantId: "157579" })}
            className={`rounded-lg px-4 py-2 gap-4 w-full flex border ${
              data.variantId === "157579" ? "border-black" : "border-gray-200"
            } items-center justify-between transition-all duration-500 ease-in-out`}>
            <div className="flex-col flex items-start gap-1">
              <p className="text-lg font-semibold">$89 / Roast</p>
              <p className="text-sm text-gray-500 font-inconsolata">
                * Single Page Roast
              </p>
            </div>

            {data.variantId === "157579" ? (
              <FaCheckCircle className="text-xl transition-all duration-500 ease-in-out" />
            ) : (
              <MdOutlineRadioButtonUnchecked className="text-xl transition-all duration-500 ease-in-out" />
            )}
          </button>
        </div>

        <button
          type="submit"
          disabled={!data.url || !data.email || !data.variantId}
          className="flex gap-2 mt-2 items-center group bg-black text-white font-medium px-4 py-2 disabled:opacity-50 rounded-full shadow w-full justify-center">
          Proceed
          <IoArrowBackCircleOutline className="rotate-180 group-hover:rotate-[125deg] transition-all duration-500 ease-in-out text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default Form;
