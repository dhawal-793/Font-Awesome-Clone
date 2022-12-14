import React from "react";
import { filtersBefore, filtersAfter } from "./filters";

const MainSidebar = () => {

  return (
    <>
      <div className="hidden lg:block w-60 text-gray-600 text-sm px-3 pb-28">
        <ul className="space-y-4 min-w-full text-gray-500">
          {filtersBefore.map((element) => {
            return (

              <li className="custom-btn-side-bar group">
                <div className="flex justify-between">
                  <div className="flex space-x-3">
                    <div>
                    <div className="group-hover:hidden">
                      <i className={`${element.className} `}></i>
                    </div>
                    <div className="hidden group-hover:block">
                      <i className={`${element.className} fa-beat`}></i>
                    </div>
                    </div>
                    <div className="text-start ">{element.name}</div>
                  </div>
                  <div className="ml-2">{element.available}</div>
                </div>
              </li>
            );
          })}
          <li className="py-1 px-3 flex cursor-pointer justify-end bg-gray-200 h-36 rounded-xl hover:bg-gray-200 hover:border-0 ">
            <span className=" relative -top-4 h-fit -right-5 text-xl text-gray-400 hover:text-red-500 ">
              <i className="fa-solid fa-circle-xmark"></i>
            </span>
          </li>
          {filtersAfter.map((element) => {
            return (
              <li className="custom-btn-side-bar group">
                <div className="flex justify-between">
                  <div className="flex space-x-3">
                    <div>
                    <div className="group-hover:hidden">
                      <i className={`${element.className} `}></i>
                    </div>
                    <div className="hidden group-hover:block">
                      <i className="fa-regular fa-square"></i>
                    </div>
                    </div>
                    <div className="text-start ">{element.name}</div>
                  </div>
                  <div className="ml-2">{element.available}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MainSidebar;
