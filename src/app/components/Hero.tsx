import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center px-5 md:px-8 py-10">
      <h1 className="text-4xl md:text-5xl text-center mb-8 md:mb-12 font-bold md:tracking-wider -tracking-wider leading-tight w-[80%]">
        Turn your landing page into a conversion machine with our AI-powered
        roast! 💯
      </h1>
      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <div className="flex flex-col md:w-[50%] mt-5 md:mt-0 gap-5">
          <div
            className="border w-fit border-gray-600 rounded-full px-3 py-1 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 
            background-animate text-white">
            We help startups convert better ⭐️🚀
          </div>

          <p className="text-base">
            Our <span className="font-semibold italic">AI</span> landing page
            experts will <span className="font-semibold italic">analyze</span>{" "}
            every aspect of your page and provide you with actionable insights
            to help you{" "}
            <span className="font-semibold italic">
              boost your conversion rates
            </span>
            . We&apos;ll help you{" "}
            <span className="font-semibold italic">identify and fix</span> any
            usability issues,{" "}
            <span className="font-semibold italic">improve </span>
            your copywriting, and make sure your page is{" "}
            <span className="font-semibold italic">optimized</span> for{" "}
            <span className="font-semibold italic">maximum conversions</span>.
            With our AI roast you can expect:
          </p>

          <div className="">
            <p className="font-semibold">📈 Increased conversion rates</p>
            <p className="font-semibold">😊 Improved user experience</p>
            <p className="font-semibold">
              ✍️ Clearer and more persuasive copywriting
            </p>
          </div>

          <div className="w-fit relative md:mt-0">
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
        <div className="md:w-[40%] my-5">
          <div className="relative w-[300px] md:w-[400px] border-2 border-black">
            <div className="w-[300px] md:w-[400px] z-0 bg-black h-[150px] md:h-[200px]"></div>
            <video
              muted
              loop
              autoPlay
              poster="https://ruttl.com/assets/img/index-hero.jpg"
              className="z-[10] -top-5 -left-5 absolute drop-shadow shadow-lg">
              <source
                src="https://ruttl.com/assets/video/index-hero.webm"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
