import { CiWavePulse1 } from "react-icons/ci";
import { GiNurseFemale } from "react-icons/gi";
import { FaAmbulance } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";

function Whyus2() {
  const items = [
    {
      icon: <GiNurseFemale size={40} color="#800080" />,
      bg: "#E6E6FA",
      title: "Special Nurse",
      desc: "Clinical excellence must be the priority for any healthcare",
    },
    {
      icon: <FaAmbulance size={40} color="#00CED1" />,
      bg: "#E0FFFF",
      title: "24/7 Ambulance",
      desc: "We service our clients the most secured fast",
    },
    {
      icon: <AiFillMedicineBox size={40} color="#FF8C00" />,
      bg: "#FFF5E1",
      title: "Telemedicine",
      desc: "Related the distance of health-related services",
    },
    {
      icon: <FaUserDoctor size={40} color="#4682B4" />,
      bg: "#e6f0fa",
      title: "Qualified Doctors",
      desc: "7bite Hospital aims to provide the highest possible level.",
    },
  ];
  return (
    <div className="my-[20px] md:my-main px-4 md:px-main ">
      <div className="flex flex-row gap-3 md:gap-5 items-center text-myprble font-bold text-center justify-center">
        <CiWavePulse1 size={30} className="font-extrabold text-myprble" />
        <p>Why Choose Us</p>
      </div>
      <h2 className="text-2xl lg:text-5xl font-semibold leading-15 md:leading-15 text-center mt-[40px]">
        All-in-one treatment &
        <br /> health solution
      </h2>
      <p className="text-center text-gray-400 mt-[40px]">
        Explain to you how all this mistaken idea of denouncing pleasure and
        <br />
        praising pain was born and I will give you a complete account
      </p>
      <div className="flex flex-col lg:flex-row gap-5 mt-[40px] items-center">
        <img
          src="/why-choose-us.jpeg"
          alt="Why choose us illustration"
          className="w-9/12 md:w-1/2 object-cover rounded-lg"
        />
        <div className="w-10/12 lg:w-1/2 flex flex-col gap-5">
          {items.map((el, i) => (
            <div
              key={i}
              className="flex flex-row gap-5 bg-white p-5 border border-gray-200 rounded-3xl"
            >
              <div
                className="rounded-lg p-3 flex justify-center items-center"
                style={{ backgroundColor: el.bg }}
              >
                {el.icon}
              </div>
              <div>
                <h3 className="font-semibold text-2xl">{el.title}</h3>
                <p className="text-lg text-gray-500">{el.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whyus2;
