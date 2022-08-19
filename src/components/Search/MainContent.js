import React, { useRef, useState } from 'react'
import icons from "./icons"
const MainContent = () => {
    // const ref = useRef(null)
    // const [iconData, setIconData] = useState({})
    // const handleClick = (element) => {
    //     setIconData(element)
    //     ref.current.click();
    // }
    return (
        <>
            {/* <IconCard iconData={iconData} reference={ref} /> */}

            <div className="w-[80vw] pl-6 pr-2">
                {/* <!-- Main header --> */}
                <div className="flex justify-between pb-8 lg:pb-2">
                    <div className="font-bold"><span>16,150 Icons</span></div>
                    <div><span>Page 1 of 20</span></div>
                </div>
                {/* <!--Main Items --> */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cold-9 grid-flow-row gap-4 py-6">
                    {icons.map((element) => {
                        return (
                            <div className=" custom-card-main" key={element.class} >
                                {/* onClick={() => handleClick(element)} */}
                                <div className="space-y-4 ">
                                    <div className="text-3xl"><i className={element.class}></i></div>
                                    <div className="text-xs px-3">{element.name}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <!-- Pagination --> */}
                <div className="flex justify-center items-center py-8">
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md bg-[rgb(20,110,190)] text-white">1</div>
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md hover:bg-gray-300 hover:text-[rgb(25,48,83)] text-[rgb(20,110,190)]">2</div>
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md hover:bg-gray-300 hover:text-[rgb(25,48,83)] text-[rgb(20,110,190)]">3</div>
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md ">...</div>
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md ">20</div>
                    <div className="text-sm md:text-base  py-1 px-3  md:p-2 md:px-4 lg:p-4 lg:px-6 rounded-md hover:bg-gray-300 hover:text-[rgb(25,48,83)] text-[rgb(20,110,190)]">Next
                        &nbsp;&nbsp; <span className=' text-sm'><i className="fa-solid fa-chevron-right "></i></span></div>
                </div>
            </div>
        </>
    )
}

export default MainContent;