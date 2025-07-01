import React from "react";
import bg3 from "../../assets/images/bg3.jpg";
import Logo from "../../assets/images/Logo.png";
import Button from "../components/Button";
const TakeAway = () => {
  return (
    <>
      <div className="text-[15px] md:text-[18px] lg:text-[18px] font-[400] text-[#4F4F4F]">
        <h2 className="text-[#231F20] text-[20px] font-[700] md:text-[24] my-3">
          TakeAway
        </h2>
        <p>
          There’s no cure for migraine, including refractory chronic migraine.
          Management of the condition means trying to reduce your number of
          migraine days by Preventive treatment aims to reduce the frequency,
          severity, and duration of migraine episodes before they start. Options
          include medications and procedures, as well as lifestyle changes and
          behavioral therapy.
        </p>

        <div className="bg-[#F9F9F9] rounded-[10px] my-5">
          <div className=" p-5 md:flex  md:gap-10 ">
            <img src={bg3} alt="" className="rounded-[10px] md:pt-10  lg:w-[185px] lg:h-[185px]" />
            <div className="">
            <h2 className="text-[20px] font-[700] text-[#231F20] py-5">
              Heading of the ad goes here
            </h2>
            <p>
              Lorem Ipsu`m is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button className="my-5">Explore the course</Button>
            </div>
          </div>
          <div className="bg-[#EBF3F9] rounded-b-[10px] p-5 flex justify-between">
            <img src={Logo} alt="" className="w-[25px] h-[25px] rounded" />
            <p className="text-[12px] md:text-[14px] font-[500] text-[#231F20]">
              Advertise with Us
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeAway;
