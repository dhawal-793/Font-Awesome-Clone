import React, { useState } from 'react'

const IconCard = (props) => {

  const { iconData, reference } = props;
  const [showModal, setShowModal] = useState(false);
  const [iconTheme, setIconTheme] = useState("light")
  const [activeButton, setActiveButton] = useState("d1")
  let type = iconData.class && iconData.class.split(" ")[0].substr(3);
  const brands = type === "brands";
  type = type && (String.fromCharCode(type.charCodeAt(0) - 32) + type.slice(1))

  const handleDiv = (name) => {
    setActiveButton(name)
  }
  const handleTheme = () => {
    const newTheme = iconTheme === "dark" ? "light" : "dark";

    setIconTheme(newTheme)
  }

  return (
    <>
      <button
        className="hidden"
        type="button"
        ref={reference}
        onClick={() => setShowModal(true)}
      >
        Open Card
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[80vw] mt-[12rem] md:mt-0 mx-auto max-w-5xl">
              {/*content*/}
              <div className="border-0  rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-6 pl-8 pr-11 border-b border-solid border-slate-200 rounded-t">
                  {
                    !brands ?
                      (<div className="items-center space-x-3 ">
                        <span className='text-xl font-semibold'><i className={iconData.class}></i></span>&nbsp; <span className='font-bold'>{type}</span>
                      </div>) :
                      (<div className='text-sm text-[#183153] items-center px-3'>
                        <span className='text-[#146EBE] text-lg '><i className="fa-solid fa-circle-info"></i> &nbsp; </span>
                        <span className="font-bold">Heads up!</span> This work may be <span className='cursor-pointer font-sans text-[#146EBE] decoration-dotted underline hover:decoration-solid hover:text-[#74c0fc]'>protected as a trademark</span>.
                      </div>)
                  }
                  <div
                    className="flex justify-between text-base md:space-x-8"
                  >
                    <div className="hidden md:block  text-gray-400 hover:text-[#146EBE] cursor-pointer">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                    <div className=" text-gray-400 hover:text-red-500 cursor-pointer" onClick={() => setShowModal(false)}>
                      <i className="fa-solid fa-x"></i>
                    </div>
                  </div>
                </div>
                {/*body*/}
                <div className="p-6 px-8 items-center">
                  {/* Body Header */}
                  <div className='flex flex-col md:flex-row md:justify-between mb-8 space-y-3 md:space-y-0'>
                    <div className="   space-x-5">
                      <span className='font-bold text-3xl hover:text-[#146EBE] text-[#193053] cursor-pointer'>{iconData.name}</span>
                      <span className="font-semibold text-lg hover:text-[#146EBE] text-gray-300 cursor-pointer md:hidden"><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </div>
                    <div className="mx-2 text-[#193053] flex space-x-8 items-center">
                      <div className='cursor-pointer text-sm md:text-lg hover:text-[#146EBE]'><i className={iconData.class}></i></div>
                      <div className='cursor-pointer text-sm md:text-lg hover:text-[#146EBE]'><i className="fa-solid fa-code"></i></div>
                      <div className='cursor-pointer text-sm md:text-lg hover:text-[#146EBE]'><i className="fa-solid fa-circle-down"></i></div>
                    </div>
                  </div>
                  {/* Body Main */}
                  <div className='grid grid-cols-1 space-y-4 md:grid-cols-4 md:space-x-5 md:space-y-0'>
                    {/* Icon */}
                    <div className={`relative border-2 border-[#f0f1f3] rounded-xl ${iconTheme === "dark" ? "bg-[#183153]" : "bg-white"}`}>
                      <div className={`${iconTheme === "light" ? "text-[#183153] bg-white" : "text-white "} rounded-xl m-auto py-9 md:px-9 text-center items-center`}>
                        <i className={`text-[10rem] ${iconData.class}`}></i>
                      </div>
                      <div className={`absolute w-fit right-0 bottom-[1px] rounded-lg cursor-pointer text-xl px-2 py-1 items-center text-center ${iconTheme === "light" ? "text-[#74c0fc]" : "text-[#ffd43b]"}`} onClick={handleTheme}>
                        <i className={`fa-solid ${iconTheme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
                      </div>
                    </div>
                    {/* Code  */}
                    <div className='col-span-3 items-center space-y-16'>
                      <div className='p-4 rounded-lg w-full text-center bg-[#183153] text-white space-y-5 text-sm md:txt-lg'>
                        <div className="flex">
                          <button className={`items-center px-3 py-1 border-2 border-transparent rounded-md focus:border-[#74c0fc] ${activeButton === "d1" ? "text-white hover:bg-transparent font-semibold" : "text-[#74c0fc] hover:bg-[#001c40]"}`} onClick={() => handleDiv("d1")}>HTML</button>
                          <button className={`items-center px-3 py-1 border-2 border-transparent rounded-md focus:border-[#74c0fc] ${activeButton === "d2" ? "text-white hover:bg-transparent font-semibold" : "text-[#74c0fc] hover:bg-[#001c40]"}`} onClick={() => handleDiv("d2")}>React</button>
                          <button className={`items-center px-3 py-1 border-2 border-transparent rounded-md focus:border-[#74c0fc] ${activeButton === "d3" ? "text-white hover:bg-transparent font-semibold" : "text-[#74c0fc] hover:bg-[#001c40]"}`} onClick={() => handleDiv("d3")}>Vue</button>
                        </div>
                        <div className='px-3 text-start font-mono text-xs md:text-sm md:tracking-wide cursor-pointer'>
                          {
                            activeButton === "d1" ? <p>
                              <span className="text-gray-300">&lt;</span><span className="text-white">i&nbsp;class</span><span className="text-gray-300">=&#8220;</span><span className="text-[#63e6be]">{iconData.class}</span><span className="text-gray-300">&#8221;&gt;&lt;/</span><span className="text-white">i</span><span className="text-gray-300">&gt;</span>
                            </p> :
                              (activeButton === "d2" ? <p>
                                <span className="text-gray-300">&lt;</span><span className="text-white">FontAwesomeIcon icon&nbsp;class</span><span className="text-gray-300">=&#8220;</span><span className="text-[#63e6be]">{iconData.class}</span><span className="text-gray-300">&#8221; /&gt;</span>
                              </p> :
                                <p>
                                  <span className="text-gray-300">&lt;</span><span className="text-white">font-awesome-icon icon&nbsp;class</span><span className="text-gray-300">=&#8220;</span><span className="text-[#63e6be]">{iconData.class}</span><span className="text-gray-300">&#8221; /&gt;</span>
                                </p>)}
                        </div>
                      </div>
                      <div className="rounded-lg bg-[#183153] pb-2" >
                        <div className='border-2 border-[#183153] p-4 rounded-lg w-full cursor-pointer items-center text-center bg-[#ffd43b] hover:bg-[#fab005] text-[#183153] font-bold'>
                          <span><i className="fa-solid fa-rocket text-xl  items-center"></i></span>&nbsp; &nbsp; <span>Start Using This Pro Icon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Body Footer */}
                  <div className='mt-12 flex justify-center text-center items-center space-x-3'>
                    <div className='rounded-full px-3 items-center py-[0.2rem] w-fit bg-[#b9c7d133]'>6.0.0</div>
                  </div>
                </div>
                {/*footer*/}
                <div className="bg-[#b9c7d133] m-2 mx-4 h-10 rounded-lg">

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default IconCard

