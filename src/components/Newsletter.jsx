import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
       
        <div className='flex flex-col justify-center'>
          {/* <p className='text-[#00df9a] font-bold '>What Even is Dopamine?</p> */}
          <h1 className='md:text-4xl sm:text-3xl text-2xl text-[#00df9a] font-bold py-2'>Why should I care about it?</h1>
          <p className='text-white'>
          Today we’re in this weird spot where this “pleasure” chemical is actually causing us a ton of grief. In lost productivity, watered down attention, shallow relationships, irritability, anxiety, sleeplessness and distraction. What started out as ways to engineer better “retention” on apps and screens has now hijacked many of our most personal choices.

Each time we have that itch to scratch, that’s a signal our dopamine levels are dropping and we’re unconsciously looking to top them up.

Answer these questions as honestly as you can to see whether you have dopamine, or if dopamine has you!
          </p>
          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
      </div>
    </div>
  );
};

export default Analytics;
