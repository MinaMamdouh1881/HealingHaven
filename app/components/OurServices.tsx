import { CiWavePulse1 } from "react-icons/ci";
import { FaHeartbeat } from "react-icons/fa";
import { GiStomach } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { BsLungsFill } from "react-icons/bs";

function OurServices() {
  const services = [
    {
      icon: <FaHeartbeat size={40} className="text-secbg" />,
      title: "Cardiology",
      description:
        "It uses a dictionary over combined with a handful of model sentence.",
      link: "Explore Now",
    },
    {
      icon: <GiStomach size={40} className="text-secbg" />,
      title: "Gastroenterology",
      description:
        "It uses a dictionary over combined with a handful of model sentence.",
      link: "Explore Now",
    },
    {
      icon: <GiBrain size={40} className="text-secbg" />,
      title: "Neurology",
      description:
        "It uses a dictionary over combined with a handful of model sentence.",
      link: "Explore Now",
    },
    {
      icon: <BsLungsFill size={40} className="text-secbg" />,
      title: "Pulmonology",
      description:
        "It uses a dictionary over combined with a handful of model sentence.",
      link: "Explore Now",
    },
  ];
  return (
    <div className="mt-[20px] md:mt-main bg-secbg px-4 md:px-main py-main">
      <div className="flex flex-row gap-3 md:gap-5 items-center text-white font-bold text-center justify-center">
        <CiWavePulse1 size={30} className="font-extrabold text-white" />
        <p>Our Services</p>
      </div>
      <h2 className="text-2xl lg:text-5xl font-semibold leading-15 md:leading-15 text-center text-white">
        Experienced in a variety of
        <br /> medical services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-18 gap-5">
        {services.map((el, i) => (
          <div
            key={i}
            className="flex flex-col bg-mainbg rounded-lg p-5 gap-10"
          >
            <span className="self-center shadow-[0px_0px_30px_0px_#999] rounded-full p-2">
              {el.icon}
            </span>
            <h3 className="self-center text-2xl font-semibold">{el.title}</h3>
            <p className="text-lg text-gray-600">{el.description}</p>
            <a href="#" className="flex flex-row gap-2 items-center p-2 w-fit">
              {el.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
