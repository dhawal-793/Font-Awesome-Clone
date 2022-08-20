import React from "react";

const SearchKeywords = () => {
  return (
    <>
      <div className="flex justify-center py-3">
        <div className="flex justify-center lg:justify-between w-[50vw] text-sm md:space-x-5">
          <div className="hidden  lg:block space-x-1 lg:text-base">
            <span className="text-gray-500">Try</span>
            <span className="cursor-pointer hover:text-[#74c0fc] text-[rgb(20,110,190)]">
              date
            </span>
            ,
            <span className="cursor-pointer hover:text-[#74c0fc] text-[rgb(20,110,190)]">
              open
            </span>
            ,
            <span className="cursor-pointer hover:text-[#74c0fc] text-[rgb(20,110,190)]">
              filter
            </span>
            ,
            <span className="cursor-pointer hover:text-[#74c0fc] text-[rgb(20,110,190)]">
              apple
            </span>
            ,
            <span className="cursor-pointer hover:text-[#74c0fc] text-[rgb(20,110,190)]">
              pinterest
            </span>
            ,<span>or</span>
            <span className="cursor-pointer hover:text-[#74c0fc] text-[rgb(20,110,190)]">
              robot.
            </span>
          </div>
          <div className="text-gray-500">
            Powered by&nbsp;
            <span className="cursor-pointer hover:text-blue-400">
              <i className="fa-solid fa-stopwatch"></i> Algolia
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchKeywords;
