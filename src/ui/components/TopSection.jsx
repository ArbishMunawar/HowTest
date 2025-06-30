import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TopSection = ({
  className = "",
  title = "Recommended",
  subtitle = "View All",
}) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6 px-5 md:p-0 ">
        <h1 className={`text-2xl font-bold text-gray-800 ${className}`}>
          {title}
        </h1>
        <div className="flex items-center gap-4">
          <p className="text-[15px] text-blue-600">{subtitle}</p>
          <button className="h-[2rem] w-[2rem] border border-blue-600 flex items-center justify-center bg-[#F5F5F5] rounded-full">
            <ArrowRight className=" text-blue-600 " />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopSection;
