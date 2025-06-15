'use client';
import { CiWavePulse1 } from 'react-icons/ci';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaChevronDown, FaRegClock } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import appointmentAction from '../Actions/appointmentAction';

function Appointment() {
  const showDatePic = () => {
    const dateInput = document.getElementById('picadate') as HTMLInputElement;
    if (dateInput) {
      try {
        dateInput.focus();
        dateInput.showPicker();
      } catch (error) {
        console.log('showPicker not supported, focusing input instead:', error);
      }
    }
  };
  const showTimePic = () => {
    const timeInput = document.getElementById('picatime') as HTMLInputElement;
    if (timeInput) {
      try {
        timeInput.focus();
        timeInput.showPicker();
      } catch (error) {
        console.log('showPicker not supported, focusing input instead:', error);
      }
    }
  };
  return (
    <div className='my-[20px] md:my-main px-4 md:px-main '>
      <div className='bg-myprble p-5 rounded-2xl'>
        <div className='flex flex-row gap-3 md:gap-5 items-center text-white font-bold text-center justify-center'>
          <CiWavePulse1 size={30} className='font-extrabold text-white' />
          <p>Get An Appointment</p>
        </div>
        <h2 className='text-2xl lg:text-5xl font-semibold leading-15 md:leading-15 text-center mt-[40px] text-white'>
          The wide network of
          <br /> best healthcare
        </h2>
        <form
          action={appointmentAction}
          className='flex flex-col justify-center items-center mt-[50px] gap-5'
        >
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex flex-row w-[250px] md:w-[250px] lg:w-[400px] justify-between bg-[#ab92fb] rounded-sm items-center text-white pr-3'>
              <select
                name='depatrment'
                className='w-full h-full bg-[#ab92fb] font-semibold focus:outline-0 appearance-none p-3'
                defaultValue=''
                required
              >
                <option value='' disabled>
                  Select Department
                </option>
                <option value='cardiology'>Cardiology</option>
                <option value='neurology'>Neurology</option>
                <option value='orthopedics'>Orthopedics</option>
                <option value='pediatrics'>Pediatrics</option>
                <option value='dermatology'>Dermatology</option>
              </select>
              <FaChevronDown size={20} />
            </div>
            <div className='flex flex-row w-[250px] md:w-[250px] lg:w-[400px] justify-between bg-[#ab92fb] rounded-sm items-center text-white pr-3'>
              <select
                name='doctor'
                className='w-full h-full bg-[#ab92fb] font-semibold focus:outline-0 appearance-none p-3'
                defaultValue=''
                required
              >
                <option value='' disabled>
                  Select Doctor
                </option>
                <option value='dr_smith'>Dr. John Smith</option>
                <option value='dr_jones'>Dr. Sarah Jones</option>
                <option value='dr_patel'>Dr. Raj Patel</option>
                <option value='dr_wilson'>Dr. Emma Wilson</option>
                <option value='dr_chen'>Dr. Michael Chen</option>
              </select>
              <FaChevronDown size={20} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex flex-row w-[250px] md:w-[250px] lg:w-[400px] p-3 text-white justify-between bg-[#ab92fb] rounded-sm items-center pr-3'>
              <input
                required
                type='text'
                className='w-full h-full font-semibold focus:outline-0 placeholder:text-white'
                name='name'
                placeholder='Enter Your Name'
              />
              <BsPerson size={20} />
            </div>
            <div className='flex flex-row w-[250px] md:w-[250px] lg:w-[400px] p-3 text-white justify-between bg-[#ab92fb] rounded-sm items-center pr-3'>
              <input
                required
                type='email'
                className='w-full h-full font-semibold focus:outline-0 placeholder:text-white'
                name='email'
                placeholder='Enter Your Email'
              />
              <MdOutlineMailOutline size={20} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex flex-row w-[250px] md:w-[160px] lg:w-[260px] p-3 text-white justify-between bg-[#ab92fb] rounded-sm items-center pr-3'>
              <input
                required
                type='tel'
                className='w-full h-full font-semibold focus:outline-0 placeholder:text-white'
                name='phone'
                placeholder='Phone No'
              />
              <FiPhone size={20} />
            </div>
            <div
              className='flex flex-row w-[250px] md:w-[160px] lg:w-[260px] p-3 text-white justify-between bg-[#ab92fb] rounded-sm items-center pr-3'
              onClick={showDatePic}
            >
              <input
                required
                id='picadate'
                type='date'
                className='w-full h-full font-semibold focus:outline-0 placeholder:text-white'
                name='date'
                min={(() => {
                  const tomorrow = new Date();
                  tomorrow.setDate(tomorrow.getDate() + 1);
                  return tomorrow.toISOString().split('T')[0];
                })()}
              />
              <FaCalendarAlt size={20} />
            </div>
            <div
              className='flex flex-row w-[250px] md:w-[160px] lg:w-[260px] p-3 text-white justify-between bg-[#ab92fb] rounded-sm items-center pr-3'
              onClick={showTimePic}
            >
              <input
                required
                type='time'
                id='picatime'
                className='w-full h-full font-semibold focus:outline-0 placeholder:text-white'
                name='time'
                min={'13:00'}
                max={'24:00'}
              />
              <FaRegClock size={20} />
            </div>
          </div>
          <button
            className='py-4 px-6 bg-mainbg rounded-lg text-mainbtn font-semibold cursor-pointer'
            type='submit'
          >
            Book An Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
