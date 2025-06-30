import React, { useState } from "react";
import Tabs from "../../components/Tabs";
import UseFetch from "../../../hooks/UseFetch";
import { useSearchParams } from "react-router";
import RecommendedCard from "../../components/RecommendeCard";

const RecommendedPage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");

  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/articles`
  );

  const filteredArticles =
    activeTab === "all"
      ? data
      : data.filter((item) => item.category === activeTab);

  return (
    <>
      <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE]">
        <h2 className="flex justify-center items-center py-[5rem] font-bold text-2xl">
          Recommended Articles
        </h2>
      </div>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className=" md:flex ">
        <div className="lg:max-w-[1200px] mx-auto ">
          {isLoading ? (
            <p>Loading...</p>
          ) : filteredArticles.length > 0 ? (
            <div className=" mt-6">
              {filteredArticles.map((item) => (
                <RecommendedCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  // summary={item.summary}
                  date={item.date}
                  views={item.views} 
                  author={item.author}
                />
              ))}
            </div>
          ) : (
            <p>No Articles Found</p>
          )}
        </div>
        <div className="hidden md:block md:w-[40%] md:bg-amber-400">hedhvd</div>
      </div>
    </>
  );
};

export default RecommendedPage;
