import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import TabRow from "../components/home/TabRow";
import Testimonials from "../components/home/Testimonials";
import Students from "../components/home/Students";
import OurPartners from "../components/home/OurPartners";
import HowItWorks from "../components/home/HowItWorks";
import FrequentlyAskedQs from "../components/home/FrequentlyAskedQs";
import WhatWeOffer from "../components/home/WhatWeOffer";

const Home = () => {
  return (
    <div
      className="w-full max-w-[1200px] mx-auto  py-10 px-4 sm:px-6 
    
    "
      // md:max-w-[780px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto py-10 px-2
    >
      <Helmet>
        <title>EduCare | Home</title>
      </Helmet>
      {/* hero section */}
      <Hero />
      {/* Tabs section */}
      <p className=" text-primary dark:text-gray-400 sm:text-5xl text-2xl font-semibold text-center nunitoSans-font border-b-2 border-primary dark:border-gray-400 sm:w-[350px] w-[200px] ml-20  sm:mx-auto mt-5 mb-10">
        Top Scholarship
      </p>
      <TabRow />
      <OurPartners />
      <Testimonials />
      <Students />
      <HowItWorks />
      <WhatWeOffer />
      <FrequentlyAskedQs />
    </div>
  );
};

export default Home;
