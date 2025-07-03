import React, { useRef, useState, useEffect } from "react";
import UseFetch from "../../hooks/UseFetch";
import { useSearchParams } from "react-router";
import Card from "../components/Card";
import TopSection from "../components/TopSection";
import { Link } from "react-router";

const RecommendedSection = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = UseFetch(
    `${
      import.meta.env.VITE_REACT_APP_API_URL}/articles?${searchParams.toString()}`
  );

  // console.log(data,"data");
  
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 390;

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] py-10">
      <div className="lg:max-w-[1200px] mx-auto px-4">
        <Link to={`recommended`}>
          <TopSection title="Recommended Articles" subtitle="Latest" />
        </Link>
        {isLoading ? (
          <p>Loading...</p>
        ) : data && data.length > 0 ? (
          <>
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth md:hidden"
            >
              {data.map((item, idx) => (
                <div key={item.id} className="min-w-[300px] flex-shrink-0">
                  <Card image={item.image} id={item.id} title={item.title} />
                </div>
              ))}
            </div>
                                                                        
            <div className="flex justify-center mt-4 gap-2 md:hidden">
              {data.slice(0, 4).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "bg-blue-500 w-3" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
              {data.slice(0, 4).map((item) => (
                <Card key={item.id} image={item.image} id={item.id} title={item.title} />
              ))}
            </div>
          </>
        ) : (
          <p>No Articles Found</p>
        )}
      </div>
    </div>
  );
};

export default RecommendedSection;
