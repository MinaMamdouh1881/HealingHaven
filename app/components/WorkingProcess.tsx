import Image from 'next/image';
import React from 'react';
import { CiWavePulse1 } from 'react-icons/ci';

function WorkingProcess() {
  const data = [
    {
      img: '/one.png',
      title: 'Select Expert Doctor',
      desc: 'There are many variationes of passage of available',
    },
    {
      img: '/two.png',
      title: 'Make Appointment',
      desc: 'There are many variationes of passage of available',
    },
    {
      img: '/three.png',
      title: 'Get Consultation',
      desc: 'There are many variationes of passage of available',
    },
    {
      img: '/four.png',
      title: 'Get Care & Relige',
      desc: 'There are many variationes of passage of available',
    },
  ];
  return (
    <div className='my-[20px] md:my-main px-4 md:px-main'>
      <div className='flex flex-row gap-3 md:gap-5 items-center text-myprble font-bold text-center justify-center'>
        <CiWavePulse1 size={30} className='font-extrabold text-myprble' />
        <p>Our Working Process</p>
      </div>
      <h2 className='text-2xl lg:text-5xl font-semibold leading-15 md:leading-15 text-center my-[40px]'>
        How Dose We Work ?
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {data.map((el, i) => (
          <div
            key={i}
            className='flex flex-col items-center gap-2 relative arrow'
          >
            <Image
              src={el.img}
              alt={el.title}
              width={100}
              height={100}
              loading='lazy'
            />
            <h3 className='font-semibold text-2xl'>{el.title}</h3>
            <p className='text-lg text-gray-500 text-center'>{el.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkingProcess;
