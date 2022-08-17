import React from "react";

const Searchinput = () => {
  return (
    <>
      <div className="m-auto justify-center">
        <div className="my-30 px-4 flex items-center justify-center text-xs sm:text-sm md:text-base font-medium ">
          <div className="relative ">
            <div className="absolute left-5 top-[1.1rem] md:top-4">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              placeholder="Search 16,150 icons..."
              className="py-2 pl-12 pr-8 border-2 text-blue-900 font-bold border-blue-900 outline-none rounded-full w-[80vw] md:w-50 h-14"
            />
            <div
              className="absolute right-4 top-[1.1rem] md:top-4 h-10 focus:outline-blue-200"
              style={{ ariaHidden: "true" }}
            >
              <select className="font-normal focus:outline-[#74c0fc]">
                <option value="6.1.2">6.1.2</option>
                <option value="5.15.4">5.15.4</option>
                <option value="All Versions">All versions</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchinput;
