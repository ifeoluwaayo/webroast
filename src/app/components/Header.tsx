"use client";
import Link from "next/link";
import { useContext } from "react";
import { CiMenuFries } from "react-icons/ci";
import { SmoothScrollContext } from "../context/scrollContext";

const Header = () => {
  const { scroll } = useContext(SmoothScrollContext);

  const smoothScroll = (id?: string) => {
    scroll && (scroll as any).scrollTo(id || 0);
  };

  return (
    <nav
      data-scroll-section
      className="flex items-center justify-between px-5 md:px-8 py-4 md:py-6">
      <h2 data-scroll className="text-2xl md:text-4xl font-inconsolata">
        Web Roast<span className="text-xl md:text-3xl">🔥</span>
      </h2>

      <div className="gap-5 hidden md:flex">
        <Link
          href="#what"
          onClick={(e: any) => smoothScroll("#what")}
          className="underline underline-offset-[5px] hover:no-underline hover:bg-[url('/squiggle.svg')]">
          What is a Roast?
        </Link>
        <Link
          href="#"
          onClick={(e: any) => smoothScroll()}
          className="underline underline-offset-[5px] hover:no-underline hover:bg-[url('/squiggle.svg')]">
          Why?
        </Link>
        <Link
          href="#"
          onClick={(e: any) => smoothScroll()}
          className="underline underline-offset-[5px] hover:no-underline hover:bg-[url('/squiggle.svg')]">
          Payment?
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative group before:absolute before:bg-black before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 px-2 pt-[2px] pb-1 md:pt-1 md:pb-2 before:transition-transform before:ease-in-out before:duration-500 text-sm md:text-base hover:text-white">
          <span className="font-inconsolata relative">
            Get Roasted{" "}
            <span className="group-hover:text-gray-500 font-nunito">$12</span>
          </span>
        </button>

        <CiMenuFries className="block md:hidden" />
      </div>
    </nav>
  );
};

export default Header;
