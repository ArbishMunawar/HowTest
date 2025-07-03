import React, { useState } from "react";
import RMenuIcon from "../../assets/icons/RMenuIcon";
import SortIcon from "../../assets/icons/SortIcon";

const Tabs = ({ tabs,activeTab, setActiveTab,className="",title="" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <div className={`md:border-b md:border-gray-200  py-3 bg-white my-9 md:max-w-[65%] ml-5  ${className}`}>
      <div className="hidden md:flex md:justify-between gap-6 lg:max-w-[1200px] mx-auto px-4">
        <div className="md:flex md:gap-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabClick(tab.value)}
              className={`pb-2 transition-all duration-200 border-b-2 ${
                activeTab === tab.value
                  ? "border-black text-black font-semibold"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="md:flex md:items-center border border-gray-400 rounded">
          <SortIcon />
          <select className="ml-auto  px-2 py-1 rounded text-sm">
            <option></option>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <div className="flex md:hidden items-center gap-5 px-4 py-4 shadow-lg absolute top-15 right-0 left-0 bg-[#FCFCFC] ">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-sm flex items-center gap-1"
        >
          <RMenuIcon />
        </button>
        <h3 className="font-semibold text-base">{title}</h3>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 space-y-2 absolute top-25 bg-[#FCFCFC] right-0 left-0">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabClick(tab.value)}
              className={`block w-full text-left py-2 rounded px-3 text-sm ${
                activeTab === tab.value
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
