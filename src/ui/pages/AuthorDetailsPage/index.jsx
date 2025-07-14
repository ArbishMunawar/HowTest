import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../../../hooks/UseFetch";
import Tabs from "../../components/Common/Tabs";
import CourseBanner from "../../components/Common/CourseBanner";
import RecommendedCard from "../../components/Cards/RecommendeCard";
import BookCard from "../../components/Cards/BookCard";
import FblackIcon from "../../../assets/icons/fblackIcon";
import Iblack from "../../../assets/icons/iblack";
import Inblack from "../../../assets/icons/inblack";
import Wblack from "../../../assets/icons/wblack";
import Pblack from "../../../assets/icons/pblack";
import Xblack from "../../../assets/icons/xblack";
const AuthorDetailsSection = () => {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("articles");

  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/authors/${id}`
  );

  const [articles, setArticles] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!data.name) return;

    if (activeTab === "articles" && articles.length === 0) {
      fetch(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/articles?author=${encodeURIComponent(data.name)}`
      )
        .then((res) => res.json())
        .then((data) => setArticles(data));
    }

    if (activeTab === "books" && books.length === 0) {
      fetch(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }/books?author=${encodeURIComponent(data.name)}`
      )
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }
  }, [activeTab, data.name]);

  const authorsTabs = [
    { label: "Articles", value: "articles" },
    { label: "MCQ Books", value: "books" },
  ];

  if (isLoading) return <p className="text-center py-10">Loading...</p>;

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
                I’m a passionate and experienced full stack developer.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[1200px] mx-auto py-[50px]">
          <CourseBanner
            className="py-[40px] lg:px-[239px] bg-gradient-to-r from-[#f7fffe] to-[#FBEEEE]"
            title="Want to Get Heard Like This Author?"
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
            <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] px-[20px] mt-[50px]  pb-[28px] md:rounded-[10px] lg:py-[47px]">
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

        <div className="lg:max-w-[1200px] mx-auto">
          <Tabs
            title="Author Content"
            tabs={authorsTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className="md:max-w-full lg:max-w-[100%] "
          />

          <div className="lg:max-w-[1200px] mx-auto px-[20px] ">
            {activeTab === "articles" && (
              <div className="grid gap-6 ">
                {articles.length > 0 ? (
                  articles.map((item, index) => (
                    <RecommendedCard
                      id={item.id}
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      summary={item.summary}
                      date={item.date}
                      views={item.views}
                      author={item.author}
                    />
                  ))
                ) : (
                  <p>No articles found for this author.</p>
                )}
              </div>
            )}

            {activeTab === "books" && (
              <div className="grid gap-6 md:grid-cols-4 pt-[20px]">
                {books.length > 0 ? (
                  books.map((item, index) => (
                    <BookCard
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      subtitle={item.subtitle}
                    />
                  ))
                ) : (
                  <p>No MCQ books found for this author.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="lg:max-w-[1200px] mx-auto py-[50px]">
          <CourseBanner
            className="py-[40px] lg:px-[239px] bg-gradient-to-r from-[#f7fffe] to-[#FBEEEE]"
            title="Want to Get Heard Like This Author?"
            story="Share your knowledge with millions of competitive exam aspirants worldwide. Publish your stories, articles, guidelines, etc. on HowTests and make a lasting impact on students' success."
            children={
              <div className="flex gap-3 justify-center pt-[20px]">
                <FblackIcon />
                <Iblack />
                <Inblack />
                <Wblack />
                <Xblack />
                <Pblack />
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};

export default AuthorDetailsSection;
