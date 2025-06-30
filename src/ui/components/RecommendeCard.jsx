import React from "react";
import DateIcon from "../../assets/icons/DateIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import AuthorIcon from "../../assets/icons/AuthorIcon";
const RecommendedCard = ({
  id,
  title,
  summary,
  date,
  views,
  author,
  image,
}) => {
  return (
    <div className="  md:w-full flex overflow-hidden">
      <div className="lg:h-full lg:w-[15rem]  w-[40%] ">
        <img
          src={image}
          alt={title}
          className="w-[100%] rounded-lg mb-4 pl-5"
        ></img>
      </div>
      <div className=" w-[50%] ">
        <div>
          <h2 className="pl-4 text-[15px] font-semibold text-gray-800  lg:text-wrap hover:text-blue-600 cursor-pointer ellipse">
            {title}
          </h2>

          <p className="text-gray-600 text-sm  px-2 ellipse">{summary}</p>
        </div>

        <div className="flex items-center pl-5 text-xs text-gray-500  pt-3">
          <div className="flex  border-r gap-2 pr-3">
            <DateIcon />
            <span>{date}</span>
          </div>

          <div className="flex gap-2 items-center pl-2">
            <EyeIcon />
            <span>{views}</span>
          </div>

          {/* <div className=" md:block flex gap-2 border-l  items-center pl-2">
            <AuthorIcon />
            <span>{author}</span>
          </div> */}

          {/* <span className=" hidden md:block font-medium text-gray-700">{author}</span> */}
        </div>
      </div>
    </div>
  );
};

export default RecommendedCard;
