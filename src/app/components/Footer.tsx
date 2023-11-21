import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full flex items-center flex-col py-14 justify-center bg-black"
      id="footer">
      <div className="border-gray-500 border mt-5 bg-white rounded-lg shadow-inner py-10 w-[80%] flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center capitalize font-bold tracking-wider leading-tight">
          Stop your Excuses and get <br />
          Customers
        </h1>
        <h3 className="font-inconsolata text-xl mt-3 mb-5 max-w-[85%] md:max-w-[70%] text-center ">
          Save hundred of useful hours and cash trying to create the perfect
          landing page and converting your customers and get roasted now.
        </h3>
        <div className="w-fit relative md:mt-0">
          <Link
            href="/roast"
            className="relative group before:absolute before:bg-black before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom hover:before:scale-y-[0.35] before:scale-y-100 px-4 pt-2 pb-3 before:transition-transform before:ease-in-out before:duration-500 hover:text-black text-white">
            <span className="font-inconsolata relative text-lg">
              Get Roasted
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

      <div className="flex mt-5 text-white gap-6 flex-col-reverse w-full md:flex-row items-start md:items-center justify-between p-5 md:p-8">
        <div className="flex flex-col gap-3">
          <Link
            href="https://www.adeayomide.me"
            className="font-bold font-inconsolata">
            Adelaja Ayomide
          </Link>
          <div className=" flex gap-3 font-semibold">
            <Link href="https://www.linkedin.com/in/adeayomide112/">LN</Link>
            <Link href="https://www.x.com/_hiflex">X</Link>
            <Link href="">IG</Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="" className="">
            Get started
          </Link>
          <Link href="" className="">
            Terms & Conditions
          </Link>
          <Link href="" className="">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
