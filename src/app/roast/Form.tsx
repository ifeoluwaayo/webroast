"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

const Form = () => {
  const [data, setData] = useState({
    url: "",
    email: "",
    variantId: "157582",
  });
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState<any>(null);
  const [isRoasting, setIsRoasting] = useState(false);
  const [roast, setRoast] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const isMobile = window && window.innerWidth > 440 ? false : true;

    const roast = async (path: string) => {
      setIsRoasting(true);
      await axios
        .post("/api/screenshot/roast", {
          path: path,
        })
        .then((res) => {
          setRoast(res.data);
          console.log(res);
        })
        .finally(() => {
          setIsRoasting(false), setLoading(false);
        });
    };

    roast(
      "https://cache.screenshotone.com/7ab5364ffbda320e42469a5631fafc81b5a87d1d646f6efc1809a262060f3170"
    );

    // const res = await axios
    //   .post("/api/screenshot", { data, isMobile })
    //   .then((res) => {
    //     console.log(res);
    //     setPath(res.data.body.url || null);
    //     roast(res.data.body.url);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    // const res = await axios
    //   .post("/api/screenshot", { data })
    //   .then((res) => {
    //     setPaths(res.data.body);
    //     console.log(paths);
    //   })
    //   .catch((err) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  return (
    <>
      {path !== null ? (
        <div className="mt-8 flex flex-col items-center justify-center w-full max-w-[320px] md:max-w-[23rem] h-fit">
          <div className="scale-50 w-fit">
            <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl ">
              <div className="rounded-lg overflow-hidden w-[285px] md:w-[486px] h-[156px] md:h-[278px] bg-white dark:bg-gray-800 relative">
                <Image
                  src={path || ""}
                  className="w-[272px] h-[572px] object-cover object-top"
                  alt=""
                  fill
                />
              </div>
            </div>
            <div className="relative bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
          </div>

          <div className="flex px-5 md:px-8 flex-col items-center justify-center">
            {roast}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10 w-full max-w-[320px] md:max-w-[23rem]">
          <h3 className="font-inconsolata font-semibold text-2xl">
            Submit URL
          </h3>

          <form
            className="mt-5 flex flex-col gap-4 w-full"
            onSubmit={handleSubmit}>
            <input
              className="shadow-sm rounded-xl w-full flex-1 bg-gray-100 outline-none ring-0 text-base px-4 py-2"
              type="url"
              placeholder="Page URL"
              value={data.url}
              required
              onChange={(e: any) => setData({ ...data, url: e.target.value })}
            />
            <input
              className="shadow-sm rounded-xl w-full flex-1 bg-gray-100 outline-none ring-0 text-base px-4 py-2"
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
                  data.variantId === "157576"
                    ? "border-black"
                    : "border-gray-200"
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
                  data.variantId === "157582"
                    ? "border-black"
                    : "border-gray-200"
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
                  data.variantId === "157579"
                    ? "border-black"
                    : "border-gray-200"
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
              disabled={!data.url || !data.email || !data.variantId || loading}
              className="relative group before:absolute before:bg-black before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom hover:before:scale-y-[0.30] before:scale-y-100 px-4 pt-2 pb-3 before:transition-transform before:ease-in-out before:duration-500 hover:text-black text-white w-full disabled:text-white disabled:before:scale-y-100 disabled:cursor-not-allowed mt-3">
              {loading ? (
                <span className="relative flex items-center justify-center">
                  Proceeding...
                </span>
              ) : (
                <span className="font-inconsolata relative flex gap-2 items-center justify-center">
                  Proceed
                  <IoArrowBackCircleOutline className="rotate-180 group-hover:rotate-[125deg] transition-all duration-500 ease-in-out text-2xl" />
                </span>
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
