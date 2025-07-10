import React from "react";
import UseFetch from "../../../hooks/UseFetch";
import { Link, useSearchParams } from "react-router";
import AuthorCard from "../../components/Cards/AuthorCard";
import { Search } from "lucide-react";
// import NavSearch from "../../components/NavSearch";
const AllAuthorsPage = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = UseFetch(
    `${
      import.meta.env.VITE_REACT_APP_API_URL}/authors?${searchParams.toString()}`
  );

  return (
    <>
      <div className="bg-gradient-to-r from-[#fef6f6] to-[#f0fdfd] p-5 py-14 ">
        <div className=" lg:max-w-[1200px] mx-auto  md:flex md:flex-col md:justify-center md:items-center px-[7rem]">
        <h3 className="text-center text-[32px] font-[600]">All Authors</h3>
        <p className=" hidden md:block text-[18px] font-[400] text-[#767070] text-center">
          Meet the expert authors behind HowTests' top books, creating
          high-quality study materials for competitive exam aspirants. Explore
          their work and boost your exam preparation with trusted resources!
        </p>

        <div className="relative flex justify-between bg-white mt-3 md:w-[50%] lg:w-[35%]">
          <input
            type="text"
            placeholder="Type fot Search..."
            className="w-full border border-[#DCDBDB99] text-[#C4C4C4] rounded py-4 lg:py-2 px-4 pr-[7rem] text-[14px] font-[400]"
          />
          <div className="bg-[#3874FF]">
            <button className="absolute right-0 rounded-tr rounded-br top-1/2 transform -translate-y-1/2 text-white bg-[#3874FF] py-3.5 lg:py-2 px-4">
              <Search />
            </button>
          </div>
        </div>
        </div>
      </div>
      <div className="lg:max-w-[1200px] mx-auto  lg:my-10 my-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : data && data.length > 0 ? (
          <>
            <div className="md:hidden flex flex-col  gap-10  my-8 px-5">
              {data.map((author) => (
                <div
                  key={author.id}
                  className="min-w-[100%] max-w-[100%] flex-shrink-0"
                >
                  <AuthorCard key={author.id} author={author}/>
                </div>
              ))}
            </div>

            <div className="hidden md:grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
              {data.map((author) => (
                <AuthorCard key={author.id} author={author} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 py-10">No Authors Found</p>
        )}
      </div>
    </>
  );
};

export default AllAuthorsPage;
