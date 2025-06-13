import { FaVideo } from "react-icons/fa6";

function Hero() {
  return (
    <div className="mt-[20px] md:mt-main flex flex-col md:flex-row px-4 md:px-main items-center justify-between py-[40px] md:py-[70px] gap-8 md:gap-0">
      <div className="flex flex-col gap-5 max-w-[600px] text-center md:text-left">
        <h2 className="text-5xl lg:text-7xl font-semibold leading-15 md:leading-20">
          We follow a holistic approach to
          <span className="text-myorange"> health care.</span>
        </h2>
        <p className="text-gray-700 max-w-[400px] mx-auto md:mx-0">
          This is open to everyone every day and provides primary health care
          and cutting-edge medicine in a central location
        </p>
        <a
          href="#"
          className="bg-mainbtn py-3 px-6 text-white rounded-lg w-fit mx-auto md:mx-0"
        >
          Book an Appointment
        </a>
      </div>
      <div className="grow flex justify-center items-center w-full md:w-auto">
        <div className="w-[300px] relative flex items-center justify-center">
          <div className="absolute top-0 left-0 bg-white p-4 md:p-7 rounded-2xl shadow-[0px_0px_30px_0px_#777] -translate-x-1/2 -translate-y-1/2 scale-75 lg:scale-100 max-[830]:hidden ">
            <ul className="flex flex-row gap-2 mb-3">
              <li className="w-[12px] h-[12px] bg-red-400 rounded-full"></li>
              <li className="w-[12px] h-[12px] bg-orange-400 rounded-full"></li>
              <li className="w-[12px] h-[12px] bg-green-400 rounded-full"></li>
            </ul>
            <div className="flex flex-row gap-4">
              <img
                src="/hero2.jpg"
                alt="Doctor's profile"
                className="w-14 rounded-full aspect-square"
              />
              <div>
                <h3 className="font-semibold">Dr. Mina Mamdouh</h3>
                <p className="text-gray-400">Cardiology Specialist</p>
              </div>
            </div>
          </div>
          <img
            src="/hero.png"
            alt="Hero illustration"
            className="max-[830]:w-10/12 lg:w-full h-auto"
          />
          <div className="absolute bottom-0 right-0 bg-white p-4 md:p-7 rounded-2xl shadow-[0px_0px_30px_0px_#777] flex flex-col gap-2 xl:translate-x-1/2 translate-y-1/2 scale-75 lg:scale-100 max-[830]:hidden">
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold">
                Tue, 24
                <span className="text-gray-400 font-medium"> 10:00 AM</span>
              </p>
              <span className="bg-myprble p-2 rounded-lg">
                <FaVideo size={20} color="white" />
              </span>
            </div>
            <p className="text-gray-500 bg-gray-200 w-fit rounded-2xl px-2">
              consultion
            </p>
            <div className="flex flex-row gap-4 items-center">
              <img
                src="/hero3.jpg"
                alt="Doctor's profile"
                className="w-14 rounded-full aspect-square"
              />
              <h3 className="font-semibold">Dr. Minna Mamdouh</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
