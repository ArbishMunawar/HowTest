import React from "react";
import DateIcon from "../../assets/icons/DateIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import AuthorIcon from "../../assets/icons/AuthorIcon";
import { Link } from "react-router";
const RecommendedCard = ({
  id,
  bio,
  title,
  summary,
  date,
  views,
  author,
  image,
}) => {
  return (
       <Link to={`/articles/${id}`}>
    <div className="  md:w-full flex my-3 ">
      <div className="lg:h-full lg:w-[15rem] w-[40%] ">
        <img
          src={image }
          alt={title}
          className="w-[100%] rounded-lg mb-4 pl-5"
        ></img>
      </div>
      <div className=" w-[50%] lg:w-[60%] md:w-[55%]">
        <div>
          <h2 className="pl-4 text-[16px]  lg:text-[22px] font-[500] text-gray-800  lg:text-wrap hover:text-blue-600 cursor-pointer ellipse">
            {title}
          </h2>

          <p className="hidden md:block text-gray-600 text-sm px-2 md:pl-4">
            {summary}
          </p>
        </div>

        <div className="flex items-center pl-5 text-[12px]  text-gray-500  pt-3">
          <div className="flex  border-r gap-2 pr-2">
            <DateIcon />
            <span>{date}</span>
          </div>

          <div className="flex gap-2 items-center pl-2 pr-2">
            <EyeIcon />
            <span>{views}</span>
          </div>

          <div className="hidden md:block md:flex md:items-center gap-2 border-l pl-3 items-center ">
            <AuthorIcon />
            <span>{author}</span>
          </div>

          {/* <span className=" hidden md:block font-medium text-gray-700">{author}</span> */}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default RecommendedCard;
