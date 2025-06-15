import Image from "next/image";
import { CiWavePulse1 } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Aboutus() {
  return (
    <div className='mt-[20px] md:mt-main px-4 md:px-10 lg:px-main flex flex-col md:flex-row gap-10 md:gap-20 justify-between'>
      <div className='flex flex-col md:max-w-[500px] gap-5'>
        <span className='flex flex-row gap-3 md:gap-5 items-center text-myprble font-bold'>
          <CiWavePulse1 size={30} className='font-extrabold text-myprble' />
          About Us
        </span>
        <p className='text-2xl md:text-3xl lg:text-5xl font-semibold leading-[30px] md:leading-[40px] lg:leading-[50px] text-center md:text-left'>
          Our qualified team is ready to answer your questions!
        </p>
        <p className='text-gray-400 leading-[35px] text-center md:text-left text-[15px] md:text-xl'>
          Our team of highly trained professionals can help you feel better
          quickly and easily by using the latest healing technologies.
        </p>
        <ul className='grid gap-3 grid-cols-2 text-sm'>
          <li className='flex items-center gap-2'>
            <IoMdCheckmarkCircleOutline
              size={20}
              className='text-myprble flex-shrink-0'
            />
            20+ years of excellence
          </li>
          <li className='flex items-center gap-2'>
            <IoMdCheckmarkCircleOutline
              size={20}
              className='text-myprble flex-shrink-0'
            />
            Multi Specialty Hospital
          </li>
          <li className='flex items-center gap-2'>
            <IoMdCheckmarkCircleOutline
              size={20}
              className='text-myprble flex-shrink-0'
            />
            24 Hours Medical Service
          </li>
          <li className='flex items-center gap-2'>
            <IoMdCheckmarkCircleOutline
              size={20}
              className='text-myprble flex-shrink-0'
            />
            Professional Experts
          </li>
        </ul>
      </div>
      <div className='flex flex-row md:flex-col gap-4 md:gap-6 w-full md:w-auto'>
        <Image
          src='/about-1.jpg'
          alt='Medical professionals collaborating in a modern hospital setting'
          width={400}
          height={255}
          className='w-1/2 md:w-[400px] rounded-2xl object-cover'
        />
        <Image
          src='/about-2.jpeg'
          alt='Advanced medical equipment and treatment facilities'
          width={510}
          height={255}
          className='w-1/2 md:w-[510px] aspect-[2/1] rounded-2xl object-cover'
        />
      </div>
    </div>
  );
}

export default Aboutus;
