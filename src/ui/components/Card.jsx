import React from 'react';
const Card = ({ id,title, summary, date, views, author,image }) => {
  return (
    <div className="  w-[100vw] md:w-full flex justify-between  ">
      <div className='lg:h-full lg:w-[15rem]'>
      <img
        src={image}
        alt={title}
        className="w-[20rem]    rounded-lg mb-4"></img>
        </div>
        <div>
      <h2 className="pl-4 text-[15px] font-semibold text-gray-800 mb-2 lg:text-wrap hover:text-blue-600 cursor-pointer ">
        {title}
      </h2>

      <p className="text-gray-600 text-sm mb-4 ">
        {summary}
      </p>
</div>
      <div className="flex items-center justify-between text-xs text-gray-500  pt-3">
         <span className="font-medium text-gray-700">{author}</span>
        <span>{date}</span>
      
      </div>
    </div>
  );
};

export default Card;
