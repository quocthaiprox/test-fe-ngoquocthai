import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false);
  return (
    <div className="">
      <div className="items-center border-b border-slate-200">
        <div className="flex gap-4 items-center p-3 ">
          <div
            className=" cursor-pointer sm:hidden"
            onClick={() => {
              setSideBarOpen(!isSidebarOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <img
            className="h-8 cursor-pointer"
            src="https://geekup.vn/Icons/geekup-logo-general.svg"
            alt=""
          />
          <div className="max-sm:hidden flex flex-row gap-3">
            <Link to="/">
              <div className=" font-semibold cursor-pointer">Test</div>
            </Link>
            <Link to="/todo">
              <div className=" font-normal text-sm hover:text-blue-500 cursor-pointer p-1">
                To do
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div
          onClick={() => {
            setSideBarOpen(false);
          }}
          className={`fixed h-full w-full bg-slate-200 bg-opacity-50 z-40`}
        ></div>
      )}
      <div
        className={`fixed  w-1/2 h-full bg-white transition-all duration-500 ease-in-out z-50 ${
          isSidebarOpen ? " translate-x-0" : " -translate-x-full"
        }`}
      >
        <Link
          to="/"
          onClick={() => {
            setSideBarOpen(false);
          }}
        >
          <div className="font-normal text-sm hover:text-blue-500 cursor-pointer p-1 text-center">
            Test
          </div>
        </Link>
        <Link
          to="/todo"
          onClick={() => {
            setSideBarOpen(false);
          }}
        >
          <div className="font-normal text-sm hover:text-blue-500 cursor-pointer p-1 text-center">
            To do
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
