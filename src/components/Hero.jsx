import React from 'react';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          DOPAMINE ANALYTICS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Are you hooked on dopamine?
        </h1>
        
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Here's 10 quick questions to rate your dopamine dependence.
You'll understand your behavior and instincts––and learn about key ways to retrain your brain.  </p>
<button onClick={() => window.open("https://d0u4o2sltdu.typeform.com/to/Rq07JRdu", "_blank")} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start The Survey</button>
      </div>
    </div>
  );
};

export default Hero;
