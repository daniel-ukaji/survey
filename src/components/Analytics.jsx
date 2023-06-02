import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          {/* <p className='text-[#00df9a] font-bold '>What Even is Dopamine?</p> */}
          <h1 className='md:text-4xl sm:text-3xl text-2xl text-[#00df9a] font-bold py-2'>What Even is Dopamine?</h1>
          <p>
          It’s the chemical in our brains that makes us sit up and pay attention, and rewards us when we discover things that are new, pleasant or dangerous (the fancy term is salience).

For all of human evolution, dopamine was a way to encourage us to seek novelty, take risks, and pay attention to danger.

But lately, with the advent of digital media and one click buying, this powerful motivator has been hijacked, and most of us have barely noticed.

Taking this quiz is just the first step in a much more detailed process of discovery, learning, training, and leveling up your game (if you’re into that).
          </p>
          {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
