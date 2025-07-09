import React from "react";
import { Link } from "react-router";
const Card = ({ id, bio, title, summary, date, views, author, image }) => {
  return (
    <Link to={`/articles/${id}`}>
      <div className="  w-[100vw] md:w-full flex justify-between  ">
        <div className="lg:h-full lg:w-[15rem] w-[100px] shrink-0">
          <img src={image} alt={title} className=" rounded-lg mb-4"></img>
        </div>
        <div>
          <h2 className="pl-4 text-small font-[500] mb-2 text-rasin-black lg:text-[22px] cursor-pointer ">
            {title}
          </h2>

          <p className="text-text-gray text-sm mb-4 ">{summary}</p>
        </div>
        <div className="flex items-center justify-between text-xs text-text-gray  pt-3">
          <span className="font-medium text-text-gray">{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
