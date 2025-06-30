import React from "react";
import Button from "../components/Button";

const MetricsSection = () => {
  return (
    <>
      <div className="lg:max-w-[1200px] mx-auto my-20">
        <div className="p-5 px-9 bg-white shadow-xl rounded-xl w-[89%] mx-auto my-14 border border-gray-300 md:grid md:grid-cols-4 gap-6">
          <div className=" border-b border-gray-400 py-4 md:border-b-0 md:border-r ">
            <h2 className="font-bold text-xl">Author</h2>
            <h2 className="font-semibold text-lg text-gray-600 md:text-[16px]">
              Type Author Name
            </h2>
          </div>
          <div className=" border-b border-gray-400 py-4 md:border-b-0 md:border-r">
            <h2 className="font-bold text-xl">Title</h2>
            <h2 className="font-semibold text-lg text-gray-600 md:text-[16px]">
              Type the title
            </h2>
          </div>

          <div className="  py-4 ">
            <h2 className="font-bold text-xl">Keyword</h2>
            <h2 className="font-semibold text-lg text-gray-600 md:text-[16px]">
              Type Keyword
            </h2>
          </div>
          <Button className="w-full md:my-4">Search</Button>
        </div>

        {/* <div className="w-[89%] mx-auto flex flex-col  md:grid md:grid-cols-2 :grid-cols-2">
          <div className="flex justify-around items-center border-b   border-gray-400 pb-6 md:pb-0 md:border-b-0 md:border-r">
            <div className="border-r  border-gray-400 pr-7">
              <h2 className="font-bold text-4xl text-center">
                35<sup>+</sup>
              </h2 >
              <h2 className="text-gray-600  text-lg">Total Authors</h2>
            </div>
            <div>
              <h2 className="font-bold text-4xl text-center">
                500<sup>+</sup>
              </h2>
              <h2 className="text-gray-600 text-lg">Total Books</h2>
            </div>
          </div>


         <div className="flex justify-around items-center pt-6 md:pt-0">
            <div className="border-r border-gray-400 pr-6">
              <h2 className="font-bold text-4xl text-center">
                15k<sup>+</sup>
              </h2>
              <h2 className="text-gray-600 text-lg">Monthly Reader</h2>
            </div>

            <div>
              <h2 className="font-bold text-4xl text-center">
                23k<sup>+</sup>
              </h2>
              <h2 className="text-gray-600 text-lg">All Time Reader</h2>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MetricsSection;
