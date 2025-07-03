import React from 'react';

const BookCard = ({id, image, title, subtitle }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden   flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-[70%] object-cover" 
        
      />
      <div className="py-4 md:px-3 flex-grow">
        <h3 className="text-lg font-bold text-left text-gray-800 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
