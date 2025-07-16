import React from "react";
import UseFetch from "../../../hooks/UseFetch";
import { Link, useSearchParams } from "react-router";
import AuthorCard from "../../components/Cards/AuthorCard";
import { Search } from "lucide-react";
const AllAuthorsPage = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = UseFetch(
    `${
      import.meta.env.VITE_REACT_APP_API_URL
    }/authors?${searchParams.toString()}`
  );

  // const totalAuthors = data?.length || 0;
  // const totalBooks = data?.reduce(
  //   (sum, author) => sum + (author.booksPublished || 0),
  //   0
  // );

  // const totalArticles = data?.reduce(
  //   (sum, author) => sum + (author.articlesPublished || 0),
  //   0
  // );

  // const totalReaders = data?.reduce((sum, author) => {
  //   const readers =
  //     parseInt(author.totalReaders?.toString())|| 0;
  //   return sum + readers;
  // }, 0);

  return (
    <>
      <div className="bg-gradient-to-r from-[#fef6f6] to-[#f0fdfd] p-5  py-[52px] lg:py-[68px] ">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h3 className="text-center text-[32px] font-semibold">All Authors</h3>
          <p className="hidden md:block text-[18px] font-normal text-[#767070] text-center max-w-2xl ">
            Meet the expert authors behind HowTests' top books, creating
            high-quality study materials for competitive exam aspirants. Explore
            their work and boost your exam preparation with trusted resources!
          </p>

          <div className="relative flex w-[90%] md:w-[60%] lg:w-[40%] bg-white mt-6 rounded overflow-hidden border border-[#DCDBDB99]">
            <input
              type="text"
              placeholder="Type for Search..."
              className="flex-grow text-text-gray placeholder-[#C4C4C4] py-3 px-4 text-sm outline-none"
            />
            <button className="bg-azure-blue text-white px-4 flex items-center justify-center">
              <Search />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center gap-6 mt-4 text-center text-gray-700">
        <div className="bg-white shadow-md rounded-lg px-4 py-2">
          <p className="text-lg font-semibold">{totalAuthors}</p>
          <p className="text-sm">Total Authors</p>
        </div>
        <div className="bg-white shadow-md rounded-lg px-4 py-2">
          <p className="text-lg font-semibold">{totalBooks}</p>
          <p className="text-sm">Total Books</p>
        </div>
        <div className="bg-white shadow-md rounded-lg px-4 py-2">
          <p className="text-lg font-semibold">{totalArticles}</p>
          <p className="text-sm">Total Articles</p>
        </div>
        <div className="bg-white shadow-md rounded-lg px-4 py-2">
          <p className="text-lg font-semibold">
            {totalReaders.toLocaleString()}
          </p>
          <p className="text-sm">Total Readers</p>
        </div>
      </div> */}

      <div className="lg:max-w-[1200px] mx-auto py-[50px] lg:py-[80px] px-5 lg:px-0">
        {isLoading ? (
          <p>Loading...</p>
        ) : data && data.length > 0 ? (
          <>
            <div className="md:hidden flex flex-col  gap-10  ">
              {data.map((author) => (
                <div
                  key={author.id}
                  className="min-w-[100%] max-w-[100%] flex-shrink-0"
                >
                  <AuthorCard key={author.id} author={author} />
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
