import React from "react";
import UseFetch from "../../hooks/UseFetch";
import { useSearchParams } from "react-router";
import AuthorCard from "../components/AuthorCard";
import TopSection from "../components/TopSection";

const AuthorsSection = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/authors?${searchParams.toString()}`
  );

  return (
    <div className="lg:max-w-[1200px] mx-auto  lg:my-10 my-8">
   <TopSection title="All Authors"/>

      {isLoading ? (
        <p>Loading...</p>
      ) : data && data.length > 0 ? (
        <>
          <div className="md:hidden flex  overflow-x-auto gap-10 scrollbar-hide scroll-smooth my-8 px-5">
            {data.map((item) => (
              <div
                key={item.id}
                className="min-w-[100%] max-w-[100%] flex-shrink-0"
              >
                <AuthorCard author={item} />
              </div>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
            {data.map((item) => (
              <AuthorCard key={item.id} author={item} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 py-10">No Authors Found</p>
      )}
    </div>
  );
};

export default AuthorsSection;
