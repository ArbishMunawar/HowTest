import React from "react";
import Button from "./Button";

const CourseBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE]  rounded-[10px] p-6 text-center md:mx-5 max-w-3xl mx-auto my-10">
      <h2 className="text-[16px] font-[700] lg:text-[20px] lg:font-[700] text-[#231F20]">
        Looking to Learn CSS, PMS English?
      </h2>
      <p className="text-[#4F4F4F] mt-3 text-[12px] font-[400] md:text-base">
        If you want to learn English Essay and Precis for CSS, PMS, Judiciary,
        or One Paper Exams, join Sir Syed Kazim Ali, Pakistan’s top English
        teacher with the highest success rate of his students for years. Start
        your journey to success today!
      </p>
      <Button className="mt-3">Explore Courses</Button>
    </div>
  );
};

export default CourseBanner;
