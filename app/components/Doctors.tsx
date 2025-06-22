import Image from 'next/image';
import React from 'react';
import { CiWavePulse1 } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';

function Doctors() {
  const data = [
    { img: '/doctor1.png', title: 'Dr. Craig Rosser', desc: 'Surgery Expert' },
    { img: '/doctor2.png', title: 'Dr. Cooper Saris', desc: 'Cardiologists' },
    {
      img: '/doctor3.png',
      title: 'Dr. Carla Herwitz',
      desc: 'Gastroenterologists',
    },
    {
      img: '/doctor4.png',
      title: 'Dr. Jocelyn Calzoni',
      desc: 'Obstetrician/gynecologists',
    },
  ];
  return (
    <div className='my-[20px] md:my-main px-4 md:px-main' id='doctors'>
      <div className='flex flex-row gap-3 md:gap-5 items-center text-myprble font-bold text-center justify-center'>
        <CiWavePulse1 size={30} className='font-extrabold text-myprble' />
        <p>Doctors</p>
      </div>
      <h2 className='text-2xl lg:text-5xl font-semibold leading-15 md:leading-15 text-center my-[40px]'>
        Meet Out Specialists
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mx-auto justify-items-center'>
        {data.map((el, i) => (
          <div
            key={i}
            className='flex flex-col items-center w-[250px] xl:w-full'
          >
            <Image
              src={el.img}
              alt={el.title}
              width={300}
              height={300}
              className='rounded-lg'
            />
            <div className='flex flex-row justify-between w-full items-center'>
              <div>
                <h3 className='font-semibold text-2xl mt-2'>{el.title}</h3>
                <p className='text-lg text-gray-500'>{el.desc}</p>
              </div>
              <a href='#' className='bg-mainbtn block p-2 rounded-full'>
                <FaArrowRight size={20} color='white' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
