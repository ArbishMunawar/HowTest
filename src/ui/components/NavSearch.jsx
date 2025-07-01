import React from 'react'
import {  Search } from "lucide-react";
const NavSearch = ({className}) => {
  return (
    <div className={`relative flex justify-between ${className}`}>
              <input
                type="text"
                placeholder="What you are looking for"
                className="w-full border border-[#DCDBDB99] rounded py-2 px-4 pr-[7rem] text-sm font-ligt"
              />
              <div className="bg-blue-600">
                <button className="absolute right-0 rounded-tr rounded-br top-1/2 transform -translate-y-1/2 text-white bg-blue-600 py-1.5 px-4">
                  <Search />
                </button>
              </div>
            </div>
  )
}

export default NavSearch