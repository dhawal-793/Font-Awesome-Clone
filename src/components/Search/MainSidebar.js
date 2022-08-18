import React from "react";

const MainSidebar = () => {
  const filtersBefore = [
    { name: "free", className: "fa-solid fa-bolt", available: "2016" },
    { name: "New In V6", className: "fa-solid fa-star", available: "8336" },
    {
      name: "Sponsered",
      className: "fa-solid fa-dollar-sign",
      available: "3111",
    },
    {
      name: "Saff Favorites",
      className: "fa-solid fa-heart",
      available: "571",
    },
  ];
  const filtersAfter = [
    { name: "Accessibility", className: "fa-solid fa-person", available: "2016" },
    { name: "Alert", className: "fa-solid fa-bell", available: "6231" },
    { name: "Alphabet", className: "fa-solid fa-a", available: "3111" },
    { name: "Automotive", className: "fa-solid fa-car-side", available: "3111" },
    { name: "Beverages", className: "fa-solid fa-champagne-glasses", available: "3111" },
    { name: "Buildings", className: "fa-solid fa-building-columns", available: "3111" },
    { name: "Buisness", className: "fa-solid fa-briefcase", available: "3111" },
    { name: "Camping", className: "fa-solid fa-campground", available: "3111" },
    { name: "Charts + Diagrams", className: "fa-solid fa-chart-simple", available: "3111" },
    { name: "Coding", className: "fa-solid fa-code", available: "3111" },
    { name: "Communication", className: "fa-solid fa-comment-dots", available: "3111" },
    { name: "Connectivity", className: "fa-solid fa-signal", available: "3111" },
    { name: "Design", className: "fa-solid fa-palette", available: "3111" },
    { name: "Editing", className: "fa-solid fa-pen-to-square", available: "3111" },
    { name: "Education", className: "fa-solid fa-graduation-cap", available: "3111" },
    { name: "Food", className: "fa-solid fa-burger", available: "3111" },
    { name: "Gaming", className: "fa-solid fa-gamepad", available: "3111" },
    { name: "Genders", className: "fa-solid fa-venus-mars", available: "3111" },
    { name: "Halloween", className: "fa-solid fa-hat-wizard", available: "3111" },
    { name: "Household", className: "fa-solid fa-house-chimney-window", available: "3111" },
    { name: "Logistics", className: "fa-solid fa-truck-fast", available: "3111" },
    { name: "Maps", className: "fa-solid fa-map-location", available: "3111" },
    { name: "Medical + Health", className: "fa-solid fa-briefcase-medical", available: "3111" },
    { name: "Money", className: "fa-solid fa-money-bill-1-wave", available: "3111" },
    { name: "Nature", className: "fa-solid fa-mountain-sun", available: "3111" },
    { name: "Numbers", className: "fa-solid fa-2", available: "3111" },
    { name: "Photo + Images", className: "fa-solid fa-camera-retro", available: "3111" },
    { name: "Political", className: "fa-solid fa-check-double", available: "3111" },
    { name: "Religion", className: "fa-solid fa-person-praying", available: "3111" },
    { name: "Science", className: "fa-solid fa-atom", available: "3111" },
    { name: "Science Fiction", className: "fa-solid fa-robot", available: "3111" },
    { name: "Security", className: "fa-solid fa-shield", available: "3111" },
    { name: "Shopping", className: "fa-solid fa-cart-shopping", available: "3111" },
    { name: "Social", className: "fa-solid fa-hashtag", available: "3111" },
    { name: "Sports + Fitness", className: "fa-solid fa-heart-pulse", available: "3111" },
    { name: "Text Formatting", className: "fa-solid fa-underline", available: "3111" },
    { name: "Time", className: "fa-solid fa-calendar-days", available: "3111" },
    { name: "Toggle", className: "fa-solid fa-toggle-on", available: "3111" },
    { name: "Transportation", className: "fa-solid fa-truck-plane", available: "3111" },
    { name: "Travel", className: "fa-solid fa-caravan", available: "3111" },
    { name: "Users", className: "fa-solid fa-person", available: "3111" },
    { name: "Weather", className: "fa-solid fa-cloud-sun", available: "3111" },
    { name: "Writing", className: "fa-solid fa-file-pen", available: "3111" },
  ];
  return (
    <>
      <div className="hidden lg:block w-60 text-gray-600 text-sm px-3 pb-28">
        <ul className="space-y-4 min-w-full text-gray-500">
          {filtersBefore.map((element) => {
            return (
              <li className="custom-btn-side-bar">
                <div className="flex justify-between">
                  <span>
                    <i className={element.className}></i> &nbsp;{element.name}
                  </span>
                  <span>{element.available}</span>
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
              <li className=" custom-btn-side-bar">
                <div className="flex justify-between">
                  <span>
                    <i className={element.className}></i> &nbsp;{element.name}
                  </span>
                  <span>{element.available}</span>
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
