import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import MenuIcon from "../../assets/icons/MenuIcon";
import CrossIcon from "../../assets/icons/CrossIcon";
import LeftArrowIcon from "../../assets/icons/LeftArrow";
import { ChevronRight, Search } from "lucide-react";
import WriteForUsButton from "./WriteForUsButton";
import NavSearch from "./NavSearch";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("main");
  const [input, setInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const subMenus = {
    Blog: [
      "CSS Essays",
      "PMS Essays",
      "Editorials",
      "Past Papers",
      "CSS Past Papers",
      "PMS Past Papers",
      "CSS Current Affairs",
      "PMS Current Affairs",
    ],
    Books: ["All Books", "FPSC Books", "PPSC Books", "PMA Books"],
    Mock: ["All Mocks", "FPSC Mocks", "PMS Mocks"],
    Other: [
      "Online Mocks",
      "Recommended Articles",
      "Most Read Books",
      "Current Affairs",
      "Write For Us",
      "Privacy Policy",
      "FAQs",
      "Courses",
    ],
  };

  return (
    <nav className="bg-white shadow-3xl">
      <div className="lg:max-w-[1200px] mx-auto ">
        <div className="md:hidden flex justify-between items-center px-6 py-3 lg:max-w-[1200px] mx-auto ">
          <img src={Logo} alt="Logo" className="w-10" />
          <div className="flex items-center gap-2">
            <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
              <Search />
            </button>
            <button
              onClick={() => {
                setMobileOpen(true);
                setActiveSubMenu("main");
              }}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {mobileSearchOpen && (
          <div className="md:hidden px-4 py-2 bg-white shadow">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded px-4 py-2 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        )}

        {mobileOpen && (
          <div className="fixed inset-0 bg-white z-50 p-5 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <img src={Logo} alt="Logo" className="w-10" />
              <button onClick={() => setMobileOpen(false)}>
                <CrossIcon />
              </button>
            </div>

            {activeSubMenu === "main" && (
              <ul className="space-y-4 text-xl">
                <li className="font-bold">Explore</li>
                <li
                  onClick={() => setActiveSubMenu("Blog")}
                  className="cursor-pointer flex items-center justify-between"
                >
                  Blog Categories <ChevronRight className="w-5 h-5" />
                </li>
                <li
                  onClick={() => setActiveSubMenu("Books")}
                  className="cursor-pointer flex items-center justify-between"
                >
                  Online Books <ChevronRight className="w-5 h-5" />
                </li>
                <li
                  onClick={() => setActiveSubMenu("Mock")}
                  className="cursor-pointer flex items-center justify-between"
                >
                  Mock Tests <ChevronRight className="w-5 h-5" />
                </li>
                <li
                  onClick={() => setActiveSubMenu("Other")}
                  className="cursor-pointer flex items-center justify-between"
                >
                  Other Pages <ChevronRight className="w-5 h-5" />
                </li>
              </ul>
            )}

            {activeSubMenu !== "main" && (
              <>
                <div className="flex items-center gap-4 mt-2 mb-4">
                  <button onClick={() => setActiveSubMenu("main")}>
                    <LeftArrowIcon />
                  </button>
                  <h2 className="text-xl font-semibold capitalize">
                    {activeSubMenu}
                  </h2>
                </div>
                <ul className="space-y-5 text-gray-700 text-lg">
                  {Array.isArray(subMenus[activeSubMenu]) &&
                    subMenus[activeSubMenu].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                </ul>
              </>
            )}

            <div className="mt-10 text-center text-sm text-gray-500">
              <p className="mb-2">Connect With Us</p>
              <div className="flex justify-center gap-4 text-xl">
                <i className="fab fa-facebook" />
                <i className="fab fa-twitter" />
                <i className="fab fa-instagram" />
              </div>
              <p className="mt-4 text-xs">© 2024 All rights reserved</p>
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center justify-between py-4 z-30">
          <div className="flex items-center gap-6">
            <img src={Logo} alt="Logo" className="w-10" />
            <div
              className="relative group"
              onClick={() => {
                setIsDropdownOpen((prev) => !prev);
                if (isDropdownOpen) {
                  setActiveMenu(null);
                }
              }}
            >
              <button className="flex items-center font-semibold text-sm text-gray-700">
                Explore
                <ChevronRight
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 top-7 mt-3 bg-white shadow-lg rounded w-[100vw] right-0 z-50">
                  <div className="grid grid-cols-2 gap-8 p-6">
                    <ul className="space-y-4 text-xl text-gray-800  border-r pr-6">
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu("Blog");
                        }}
                        className="cursor-pointer flex items-center justify-between hover:text-blue-600"
                      >
                        Blog Categories <ChevronRight className="w-4 h-4" />
                      </li>
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu("Books");
                        }}
                        className="cursor-pointer flex items-center justify-between hover:text-blue-600"
                      >
                        Online Books <ChevronRight className="w-4 h-4" />
                      </li>
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu("Mock");
                        }}
                        className="cursor-pointer flex items-center justify-between hover:text-blue-600"
                      >
                        Mock Tests <ChevronRight className="w-4 h-4" />
                      </li>
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenu("Other");
                        }}
                        className="cursor-pointer flex items-center justify-between hover:text-blue-600"
                      >
                        Other Pages <ChevronRight className="w-4 h-4" />
                      </li>
                    </ul>

                    <div className="text-sm text-gray-600">
                      {activeMenu && (
                        <ul className="space-y-3">
                          {subMenus[activeMenu]?.map((item, idx) => (
                            <li
                              key={idx}
                              className="hover:text-blue-500 cursor-pointer"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-10 max-w-md  w-full">
            {/* <div className="relative flex justify-between">
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
            </div> */}

            <NavSearch/>
            {/* <div> */}
              {/* <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50 text-sm">
                Write For Us
              </button> */}

              <WriteForUsButton >Write For Us</WriteForUsButton>
            {/* </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
