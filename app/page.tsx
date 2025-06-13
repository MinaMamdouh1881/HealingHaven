import Header from "./components/Header";
import Hero from "./components/Hero";
import Whyus from "./components/Whyus";
import Whyus2 from "./components/Whyus2";
import Aboutus from "./components/Aboutus";
import OurServices from "./components/OurServices";
import Appointment from "./components/Appointment";
function page() {
  return (
    <>
      <Header />
      <Hero />
      <Whyus />
      <Aboutus />
      <OurServices />
      <Whyus2 />
      <Appointment />
    </>
  );
}

export default page;
