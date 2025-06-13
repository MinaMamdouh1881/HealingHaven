import { TbClock24 } from "react-icons/tb";
import { RiUserStarFill, RiHeartAdd2Fill } from "react-icons/ri";
function Whyus() {
  const data = [
    {
      icon: <TbClock24 size={40} className="text-prbleicon" />,
      title: "24 hour service",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <RiUserStarFill size={40} className="text-prbleicon" />,
      title: "8 years of experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <RiHeartAdd2Fill size={40} className="text-prbleicon" />,
      title: "High quality care",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div className="px-10 md:px-main mt-[20px] md:mt-main">
      <div className="xl:px-H grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-myprble p-5 rounded-2xl gap-10 md:gap-5 ">
        {data.map((el, index) => (
          <div key={index} className="flex flex-row gap-2">
            <div className="bg-mainbg flex justify-center items-center rounded-[10px] px-2">
              {el.icon}
            </div>
            <div className="flex flex-col gap-2 text-white">
              <h3 className="font-semibold text-[15px] md:text-lg xl:text-2xl">
                {el.title}
              </h3>
              <p className="text-gray-200 text-sm md:text-[15px] xl:text-lg">
                {el.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whyus;
