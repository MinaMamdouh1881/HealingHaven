import {
  FaXTwitter,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaDiscord,
} from 'react-icons/fa6';

function Footer() {
  const socialIcons = [
    { icon: FaXTwitter, link: '#' },
    { icon: FaSquareInstagram, link: '#' },
    { icon: FaLinkedin, link: '#' },
    { icon: FaSquareFacebook, link: '#' },
    { icon: FaDiscord, link: '#' },
  ];
  return (
    <>
      <div className='flex flex-col gap-5 mt-[20px] md:mt-main px-4 md:px-main mb-[15px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='p-5 sm:p-8 xl:p-15 bg-myprble rounded-2xl flex flex-col gap-5 md:gap-10'>
            <p className='text-white font-semibold text-2xl'>
              Get Free Consultaion <br /> From Our Top Doctors 24x7
            </p>
            <a
              href='#appointment'
              className='w-fit bg-white p-3 rounded-md text-mainbtn font-semibold'
            >
              Book An Appointment
            </a>
          </div>
          <div className='p-5 sm:p-8 xl:p-15 bg-secbg rounded-2xl flex flex-col gap-5 md:gap-10'>
            <p className='text-white font-semibold text-2xl'>
              Emergency ? <br /> Don{`'`}t Be Late Call Us Now
            </p>
            <a
              href='#appointment'
              className='w-fit bg-white p-3 rounded-md text-mainbtn font-semibold'
            >
              Book An Appointment
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center max-sm:gap-5 bg-black text-white px-4 md:px-main py-5'>
        <p>&copy; HealingHaven All Copy-Right Reserved</p>
        <div className='flex items-center mt-3 md:mt-0'>
          {socialIcons.map(({ icon: Icon, link }, index) => (
            <a key={index} href={link} className='mx-2'>
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;
