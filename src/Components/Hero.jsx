import React from "react";

const Hero = () => {
  return (
    <div className="text-[#252525] w-full py-[50px] text-3xl bg-[#D9D9D9] mt-[30px]">
      <div className="max-w-[1240px] mx-auto font-semibold md:grid grid-cols-2 items-center">
        {/* Left Side - Text Content */}
        <div className="text-left p-4">
          <div className="text-xl md:text-5xl md:p-[24px] font-bold">
            A Place you
            <br /> eat healthy
          </div>
          <div className="text-[#252525] text-2xl m-[5px] w-full md:w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget.
            Lorem ipsum dolor.
          </div>
          <button className="bg-[#252525] p-3 rounded-4xl font-semibold text-[#ffffff] m-2">
            Explore the menu
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="text-center p-4">
          <img
            src="/hero-img.png"
            alt="hero-img"
            className="inline w-full max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
