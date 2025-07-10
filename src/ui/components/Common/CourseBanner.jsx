import React from "react";
import Button from "../Button/Button";

const CourseBanner = ({ title, story, buttondata, className }) => {
  return (
    <div
      className={`bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE]  lg:rounded-[10px] py-[46px] px-[19.5px] text-center  mx-auto ${className}`}
    >
      <h2 className="text-[16px] font-[700] lg:text-[20px] lg:font-[600] text-rasin-black">
        {title}
      </h2>
      <p className="text-text-gray mt-3 text-[12px] font-[400] md:text-base">
        {story}
      </p>
      <Button className="mt-3">{buttondata}</Button>
    </div>
  );
};

export default CourseBanner;
