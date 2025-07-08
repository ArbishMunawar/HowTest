import React from 'react'
import UseFetch from "../../hooks/UseFetch";
import { useSearchParams } from "react-router";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordianSection = () => {
    const [searchParams] = useSearchParams();
  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/accordian?${searchParams.toString()}`
  );
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl lg:max-w-[1200px] mx-auto my-10 px-4 lg:px-0">
      <h2 className="text-2xl font-bold mb-6">FAQs</h2>
      <div className="space-y-3">
        {data.map((item, idx) => (
          <div key={idx} className=" rounded-lg  bg-[#F8F9FA]">
            <button
              onClick={() => toggleIndex(idx)}
              className="flex gap-5 md:gap-10  text-left items-center w-full px-5 py-4 font-medium text-gray-800"
            >
              <div className='text-[#3874FF] bg-blue-100 rounded p-1'>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}</div>
              <span >{item.question}</span>
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-4 text-gray-600 text-sm pl-[4rem] md:pl-[5.5rem]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
  

export default AccordianSection