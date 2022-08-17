import React from "react";

const Header = () => {
  return (
    <>
      <div className="px-2 md:px-4 lg:px-8 flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center my-12">
        {/* <!-- Options --> */}
        <div className="flex justify-between space-x-5">
          <div className="flex">
            <div className="custom-btn-header rounded-l-md w-auto">
              <span>
                <i className="fas fa-icons fa-fw fa-lg text-gray-600"></i>
              </span>
              <span className="hidden sm:block">&nbsp; &nbsp;Solid</span>
            </div>
            <div className="custom-btn-header">
              <span>
                <i className="fas fa-icons fa-fw fa-lg text-gray-600"></i>
              </span>
              <span className="hidden sm:block">&nbsp; &nbsp;Regular</span>
            </div>
            <div className="custom-btn-header">
              <span>
                <i className="fas fa-icons fa-fw fa-lg text-gray-600"></i>
              </span>
              <span className="hidden sm:block">&nbsp; &nbsp;Light</span>
            </div>
            <div className="custom-btn-header">
              <span>
                <i className="fas fa-icons fa-fw fa-lg text-gray-600"></i>
              </span>
              <span className="hidden sm:block">&nbsp; &nbsp;Thin</span>
            </div>
            <div className="custom-btn-header border-r-2 rounded-r-md">
              <span>
                <i className="fas fa-icons fa-fw fa-lg text-gray-600"></i>
              </span>
              <span className="hidden sm:block">&nbsp; &nbsp;Duotone</span>
            </div>
          </div>
          <div>
            <div className="custom-btn-header border-r-2 font-bold rounded-md">
              <span>
                <i className="fa-solid fa-font-awesome text-gray-600"></i>
              </span>
              <span className="hidden sm:block">&nbsp; &nbsp;Brands</span>
            </div>
          </div>
        </div>
        {/* <!-- Display buttons --> */}
        <div className="flex justify-between lg:justify-end px-4 md:px-0  my-9 lg:my-0 text-sm  md:text-xl">
          <div className="lg:hidden">
            <button className=" font-semibold text-[#183153] hover:text-[rgb(20,110,190)]">
              <i className="fa-solid fa-filter"></i> show Filters
            </button>
          </div>

          <div className="space-x-4">
            <button className="px-1  md:px-4 hover:text-[rgb(20,110,190)] sm:text-[rgb(20,110,190)] sm:hover:text-[#74c0fc]">
              <i className="fa-solid fa-table-cells"></i>
            </button>
            <button className="px-1  md:px-4 text-[rgb(20,110,190)] hover:text-[#74c0fc] sm:text-[#183153] sm:hover:text-[rgb(20,110,190)]">
              <i className="fa-solid fa-border-all"></i>
            </button>
            <button className="px-1  md:pl-4 text-[#183153] hover:text-[rgb(20,110,190)]">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
