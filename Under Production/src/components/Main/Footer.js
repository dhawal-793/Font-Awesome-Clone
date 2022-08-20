import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[rgb(25,48,83)] text-white py-2 px-16 lg:px-2">
        {/* Footer Container */}
        <div className="text-xs pt-8 px-2 sm:px-5 pb-2 flex flex-col lg:space-x-28 lg:flex-row justify-evenly lg:justify-between">
          {/* footer about */}
          <div className="text-start  lg:px-0 w-[100%] lg:w-[35%] xl:w-1/2">
            {/* <div className="py-3 text-2xl cursor-pointer hover:text-[#74c0fc]"> */}
            <i className="fa-solid fa-font-awesome py-3 text-2xl cursor-pointer hover:text-[#74c0fc]"></i>
            {/* </div> */}
            <div>
              <h2 className="font-bold lg:text-xl py-1">
                Go Make Something Awesome
              </h2>
              <p className="py-1 font-semibold tracking-wider">
                Font Awesome is the internet's icon library and toolkit used by
                millions of designers, developers, and content creators.
              </p>
              <br />
              <p className="py-1 font-semibold tracking-wider">
                Made with <i className="fa-solid fa-heart"></i> and{" "}
                <i className="fa-solid fa-ice-cream"></i> in Bentonville,
                Boston, Chicago, Grand Rapids, Joplin, Kansas City, Seattle,
                Tampa, and Vergennes.
              </p>
              <br />
            </div>
          </div>
          {/* footerlinks */}
          <div className="flex text-start w-[100%] lg:space-x-2 justify-between lg:w-[55%] xl:w-1/2">
            <div className="lg:px-4 ">
              <ul className="py-3 space-y-3 font-semibold">
                <h3 className="text-gray-400 text-sm">Project</h3>
                <li className="hover:text-[#74c0fc] cursor-pointer">
                  Changelog
                </li>
                <li className="hover:text-[#74c0fc] cursor-pointer">Status</li>
                <li className="hover:text-[#74c0fc] cursor-pointer">
                  Commission icons
                </li>
                <li className="hover:text-[#74c0fc] cursor-pointer">License</li>
                <li className="hover:text-[#74c0fc] cursor-pointer">
                  All Versions
                </li>
              </ul>
            </div>
            <div className="lg:px-4 ">
              <ul className="py-3 space-y-3 font-semibold">
                <h3 className="text-gray-400 text-sm">Community</h3>
                <li className="hover:text-[#74c0fc] cursor-pointer">Issues</li>
                <li className="hover:text-[#74c0fc] cursor-pointer">Status</li>
                <li className="hover:text-[#74c0fc] cursor-pointer">
                  Icon Requests Leaderboard
                </li>
                <li className="hover:text-[#74c0fc] cursor-pointer">Twitter</li>
              </ul>
            </div>
            <div className="lg:px-4 ">
              <ul className="py-3 space-y-3 font-semibold">
                <h3 className="text-gray-400 text-sm">Help</h3>
                <li className="hover:text-[#74c0fc] cursor-pointer">Support</li>
                <li className="hover:text-[#74c0fc] cursor-pointer">
                  Troubleshooting
                </li>
                <li className="hover:text-[#74c0fc] cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer footer */}
        <div className="flex text-sm justify-center lg: lg:flex-row-reverse px-4 lg:px-7 py-2">
          <div className="flex w-[100%] justify-between lg:justify-end lg:space-x-5">
            <div className="text-sm hover:text-[#74c0fc] cursor-pointer">
              Terms of Service
            </div>
            <div className="text-sm hover:text-[#74c0fc] cursor-pointer">
              Privacy Policy
            </div>
            <div className="text-sm text-gray-400">
              <i className="fa-regular fa-copyright"></i> Demoicons, Inc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
