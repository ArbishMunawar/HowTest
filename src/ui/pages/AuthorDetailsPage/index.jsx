import React, { useState } from "react";
import UseFetch from "../../../hooks/UseFetch";
import { useParams } from "react-router-dom";
import Tabs from "../../components/Common/Tabs";
import CourseBanner from "../../components/Common/CourseBanner";
const AuthorDeatilsSection = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("all");
  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/authors/${id}`
  );
  const authorsTabs = [
    // { label: "All Articles", value: "all" },
    { label: "Articles", value: "articles" },
    { label: "MCQs Books", value: "MCQ Books" },
  ];
  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE]">
          <div className="lg:max-w-[1200px] mx-auto">
            <div className="pt-[100px] pb-[66px] flex flex-col items-center justify-center px-[20px] ">
              <div className="relative h-[161px] w-[170px] bg-white flex justify-end items-end rounded-[60%_30%_40%_60%/50%_60%_40%_50%] overflow-hidden">
                <img
                  src={data.image}
                  alt=""
                  className="absolute bottom-0 w-[90%] object-cover"
                />
              </div>
              <p className="text-text-normal-gray text-small lg:text-small-medium py-[20px]">
                Author
              </p>
              <h2 className="text-rasin-black text-medium lg:text-normal font-[600]">
                {data.name}
              </h2>
              <p className="text-text-normal-gray text-small lg:text-small-medium py-[20px] text-center">
                I’m a passionate and experienced full stack developer. I
                specialize in creating dynamic, user-friendly web applications
                that meet the highest standards of functionality and design.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[1200px] mx-auto py-[50px]">
          <CourseBanner
            className="py-[40px] lg:px-[239px] bg-gradient-to-r from-[#f7fffe] to-[#FBEEEE]"
            title="Want to Get Heard Like This Author?  
"
            story="Share your knowledge with millions of competitive exam aspirants worldwide. Publish your stories, articles, guidelines, etc. on HowTests and make a lasting impact on students' success."
            buttondata="Write for us"
          />
        </div>

        <div className="pb-[50px] md:grid md:grid-cols-2 lg:max-w-[1200px] mx-auto ">
          <div className="px-[20px]">
            <h2 className="text-medium lg:text-medium-large font-[600] text-rasin-black py-[20px]">{`About  ${data.name}`}</h2>
            <h2 className="text-small text-text-gray">{data.about}</h2>
          </div>
          <div>
            <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] px-[20px] my-[50px] pb-[28px] md:rounded-[10px] lg:py-[47px]">
              <h2 className="text-rasin-black lg:px-[40px] pt-[28px] pb-[20px] text-[22px] lg:text-[24px] font-[600] ">
                Credentials
              </h2>

              {data?.credentials &&
                Object.entries(data.credentials).map(([key, value], index) => (
                  <div key={index} className="px-3 lg:px-[70px] ">
                    <div className="flex justify-between items-center text-extra-small lg:text-small">
                      <span className="text-text-gray font-[600] text-extra-small lg:text-small">
                        {key}
                      </span>
                      <span className="text-text-gray font-[400] py-[10px] text-extra-small lg:text-small">
                        {value}
                      </span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-[#FFFFFF] via-[#C4C4C4] to-[#FFFFFF]" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>
          <Tabs
            title="Articles"
            tabs={authorsTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="md:max-w-full lg:max-w-[100%] "
          />
        </div>
      </div>
    </>
  );
};

export default AuthorDeatilsSection;
