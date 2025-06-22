'use client';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='relative'>
      <div className='flex flex-row border-b border-gray-400 justify-between p-main py-5 items-center px-4 md:px-H'>
        <div>
          <h1 className='font-bold text-2xl'>HealingHaven</h1>
        </div>
        <button
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
        <ul className='hidden md:flex flex-row gap-5 text-gray-700'>
          <a href='#'>
            <li>Home</li>
          </a>
          <a href='#aboutus'>
            <li>About Us</li>
          </a>
          <a href='#services'>
            <li>Services</li>
          </a>
          <a href='#doctors'>
            <li>Doctors</li>
          </a>
        </ul>
        <a
          href='#appointment'
          className='hidden md:block bg-mainbtn py-3 px-6 text-white rounded-lg'
        >
          Appointment
        </a>
      </div>
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-400 z-50'>
          <ul className='flex flex-col text-gray-700'>
            <a href='#'>
              <li className='p-4 border-b border-gray-200'>Home</li>
            </a>
            <a href='#aboutus'>
              <li className='p-4 border-b border-gray-200'>About Us</li>
            </a>
            <a href='#services'>
              <li className='p-4 border-b border-gray-200'>Services</li>
            </a>
            <a href='#doctors'>
              <li className='p-4 border-b border-gray-200'>Doctors</li>
            </a>
            <a href='#appointment'>
              <li className='p-4'>
                <button className='w-full bg-mainbtn py-3 px-6 text-white rounded-lg'>
                  Appointment
                </button>
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
