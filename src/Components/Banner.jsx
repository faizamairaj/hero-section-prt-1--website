import React from 'react';

const Banner = () => {
  return (
    <div className='w-full py-[50px] px-4'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-5">
        
        {/* Image Section */}
        <div className='flex flex-wrap justify-center gap-5 w-full h-auto'>
          <img src="/img1.png" className='w-[100px] md:w-[150px] h-auto' alt="Image 1" />
          <img src="/img2.png" className='w-[100px] md:w-[150px] h-auto' alt="Image 2" />
          <img src="/img3.png" className='w-[100px] md:w-[150px] h-auto' alt="Image 3" />
        </div>

        {/* Text and Food Section */}
        <div className='flex flex-col gap-2 text-center md:text-left'>
          <div className='bg-[#252525] w-[50px] h-1 mx-auto md:mx-0'></div>

          <div className='flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2'>
            <span className='text-lg font-medium'>Chef</span>
            <span className='text-lg font-medium'>ABC</span>
          </div>

          <p className='text-[#877171] text-sm sm:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper.
          </p>

          <div className='flex flex-wrap justify-center md:justify-start gap-4'>
            <img src="/food1.png" className='w-[50px] md:w-[60px] h-auto' alt="Food 1" />
            <img src="/food2.png" className='w-[50px] md:w-[60px] h-auto' alt="Food 2" />
            <img src="/food3.png" className='w-[50px] md:w-[60px] h-auto' alt="Food 3" />
            <img src="/food4.png" className='w-[50px] md:w-[60px] h-auto' alt="Food 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
