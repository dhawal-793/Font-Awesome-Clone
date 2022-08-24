import React, { useState } from 'react'

const StylingTools = () => {
    const icons = {
        icon1: {
            name: "camera-retro",
            class: "fa-solid fa-camera-retro"
        },
        icon2: {
            name: "camera-retro",
            class: "fa-solid fa-camera-retro"
        },
        icon3: {
            name: "camera-retro",
            class: "fa-solid fa-camera-retro"
        },
        icon4: {
            name: "camera-retro",
            class: "fa-solid fa-camera-retro"
        },
        icon5: {
            name: "camera-retro",
            class: "fa-solid fa-camera-retro"
        },
        icon6: {
            name: "camera-retro",
            class: "fa-solid fa-camera-retro"
        },

    }
    // const [iconData, setIconData] = useState(icons.icon1)
    const iconData = icons.icon1

    const [activeheader, setActiveHeader] = useState("icon")
    const handleHeader = (name) => {
        setActiveHeader(name)
    }

    const [activeIcon, setAtiveIcon] = useState("I1")
    const handleIcon = (name) => {
        setAtiveIcon(name)
    }

    const [activeStyle, setAtiveStyle] = useState("S1")
    const handleStyle = (name) => {
        setAtiveStyle(name)
    }

    const [activeColor, setAtiveColor] = useState("C1")
    const handleColor = (name) => {
        setAtiveColor(name)
    }

    const [activeSize, setAtiveSize] = useState("s1")
    const handleSize = (name) => {
        setAtiveSize(name)
    }

    const [activeAnimation, setAtiveAnimation] = useState("A1")
    const handleAnimation = (name) => {
        setAtiveAnimation(name)
    }

    // const [text, setText] = useState('<i class="fa-solid fa-camera-retro"></i>')
    const text = '<i class="fa-solid fa-camera-retro"></i>'
    const handleCopy = () => {
        navigator.clipboard.writeText(text);

    };
    return (
        <>

            <div>
                <div className='w-full flex flex-col lg:flex-row-reverse justify-center lg:justify-between lg:space-x-6 px-6 xl:px-28 xl:space-x-10'>
                    <div className=' py-4 text-left lg:w-1/2 text-[#183153] md:px-6'>
                        <div className="header space-x-3 tracking-widest text-xs sm:text-sm lg:text-xs sm:text-center lg:text-start mb-3 font-bold text-[#146ebe] my-3">
                            <span>S T Y L I N G</span>&nbsp;<span>T O O L S</span>
                        </div>
                        <div className=" font-semibold text-xl sm:text-3xl md:text-4xl my-6 sm:text-center lg:text-start lg:text-2xl lg:my-3">
                            Style your icons to your fa-heart's content.
                        </div>
                        <div className="sm:flex lg:flex-col">
                            <div className="py-2 text-sm lg:text-md sm:w-1/3 md:w-1/2 lg:w-full sm:px-2 lg:px-0 lg:py-4">
                                You know and WE know styling icons on the web can be a bit of a chore. That's why we fine-tuned our styling tools like a Swiss watch to make icons more malleable right out of the box. Easily size, place, style, and even animate any icon with a short line of code to create the perfect effect. Bippity-boppity-ICON!
                            </div>
                            <div className="sm:hidden lg:block rounded-lg bg-[#183153] pb-1 w-full my-4 sm:w-0 lg:w-fit mb-8" >
                                <div className='border md:border-2 border-[#183153] px-6 lg:px-4 lg:py-2 py-3 rounded-lg w-full md:w-fit cursor-pointer items-center text-center bg-[#74c0fc] hover:bg-[#146EBE] text-[#183153] font-semibold'>
                                    <span><i className="fa-solid fa-bolt"></i></span>&nbsp; &nbsp;
                                    <span>View All Styling Options</span>
                                </div>
                            </div>
                            <div className='space-y-4 sm:w-2/3 md:w-1/2 lg:w-[100%] sm:py-6 md:py-2 lg:py-0'>
                                <div className="flex justify-between text-xs sm:text-sm w-[100%]">
                                    <span className='flex items-baseline group cursor-pointer space-x-2 sm:space-x-3 text-start w-[180px]'>
                                        <div className='text-[#146EBE]'><i className="fas fa-icons fa-fw fa-lg text-sm"></i></div>
                                        <div className='text-start font-extrabold sm:font-semibold underline group-hover:text-[#146EBE]'>Thousands of Icons</div>
                                    </span>
                                    <span className='flex items-baseline group cursor-pointer space-x-2 sm:space-x-3 text-start  w-[160px]'>
                                        <div className='text-[#146EBE]'><i className="fas fa-icons fa-fw fa-lg text-sm"></i></div>
                                        <div className='text-start font-extrabold sm:font-semibold underline group-hover:text-[#146EBE]'>Built-in Sizing</div>
                                    </span>
                                </div>
                                <div className="flex justify-between text-xs sm:text-sm w-[100%]">
                                    <span className='flex items-baseline group cursor-pointer space-x-2 sm:space-x-3 text-start w-[180px]'>
                                        <div className='text-[#146EBE]'><i className="fa-solid fa-pen-nib text-sm"></i></div>
                                        <div className='text-start font-extrabold sm:font-semibold underline group-hover:text-[#146EBE]'>5 Styles</div>
                                    </span>
                                    <span className='flex items-baseline group cursor-pointer space-x-2 sm:space-x-3 text-start w-[160px]'>
                                        <div className='text-[#146EBE]'><i className="fa-solid fa-film text-sm"></i></div>
                                        <div className='text-start font-extrabold sm:font-semibold underline group-hover:text-[#146EBE]'>Animations</div>
                                    </span>
                                </div>
                                <div className="flex justify-between text-xs sm:text-sm w-[100%]">
                                    <span className='flex items-baseline group cursor-pointer space-x-2 sm:space-x-3 text-start w-[180px]'>
                                        <div className='text-[#146EBE]'><i className="fa-solid fa-palette"></i></div>
                                        <div className='text-start font-extrabold sm:font-semibold underline group-hover:text-[#146EBE]'>Quick Color</div>
                                    </span>
                                    <span className='flex items-baseline group cursor-pointer space-x-2 sm:space-x-3 text-start w-[160px]'>
                                        <div className='text-[#146EBE]'><i className="fa-solid fa-arrows-rotate"></i></div>
                                        <div className='text-start font-extrabold sm:font-semibold underline group-hover:text-[#146EBE]'>rotate + Flip</div>
                                    </span>
                                </div>
                                <div className="flex justify-between text-xs sm:text-sm w-[100%]">
                                    <span className='flex items-baseline group cursor-pointer space-x-2 sm:space-x-3 text-start w-[180px]'>
                                        <div className='text-[#146EBE]'><i className="fa-solid fa-layer-group"></i></div>
                                        <div className='text-start font-extrabold sm:font-semibold underline group-hover:text-[#146EBE]'>Power Transforms</div>
                                    </span>
                                    <span className='flex items-baseline group cursor-pointer space-x-2 sm:space-x-3 text-start w-[160px]'>
                                        <div className='text-[#146EBE]'><i className="fa-solid fa-list-ul"></i></div>
                                        <div className='text-start font-extrabold sm:font-semibold underline group-hover:text-[#146EBE]'>Easy lists</div>
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="hidden sm:block lg:hidden m-auto rounded-lg sm:rounded-xl bg-[#183153] pb-1 md:pb-[0.3rem] w-full md:w-fit my-4" >
                            <div className='border md:border-2 border-[#183153] px-6 py-3 rounded-lg md:rounded-xl w-full md:w-fit cursor-pointer items-center text-center bg-[#74c0fc] hover:bg-[#146EBE] text-[#183153] font-semibold'>
                                <span><i className="fa-solid fa-bolt"></i></span>&nbsp; &nbsp;
                                <span>View All Styling Options</span>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 py-4 md:px-6'>
                        <div>
                            <div className='bg-[#f0f1f3] items-center rounded-t-lg text-[#183153]'>
                                <div className='font-bold text-xs flex justify-between px-2 sm:px-6 my-4 border-b'>
                                    <button className={`py-4 px-1 sm:mx-5 cursor-pointer border-b-[3px] border-transparent hover:text-[#146ebe] hover:border-[#146ebe] ${activeheader === "icon" ? "text-[#146ebe] border-[#146ebe]" : ""}`} onClick={() => handleHeader("icon")}>ICON</button>
                                    <button className={`py-4 px-1 sm:mx-5 cursor-pointer border-b-[3px] border-transparent hover:text-[#146ebe] hover:border-[#146ebe] ${activeheader === "style" ? "text-[#146ebe] border-[#146ebe]" : ""}`} onClick={() => handleHeader("style")}>STYLE</button>
                                    <button className={`py-4 px-1 sm:mx-5 cursor-pointer border-b-[3px] border-transparent hover:text-[#146ebe] hover:border-[#146ebe] ${activeheader === "color" ? "text-[#146ebe] border-[#146ebe]" : ""}`} onClick={() => handleHeader("color")}>COLOR</button>
                                    <button className={`py-4 px-1 sm:mx-5 cursor-pointer border-b-[3px] border-transparent hover:text-[#146ebe] hover:border-[#146ebe] ${activeheader === "size" ? "text-[#146ebe] border-[#146ebe]" : ""}`} onClick={() => handleHeader("size")}>SIZE</button>
                                    <button className={`py-4 px-1 sm:mx-5 cursor-pointer border-b-[3px] border-transparent hover:text-[#146ebe] hover:border-[#146ebe] ${activeheader === "animate" ? "text-[#146ebe] border-[#146ebe]" : ""}`} onClick={() => handleHeader("animate")}>ANIMATE</button>
                                </div>
                                <div className='text-center justify-center text-9xl p-10 '>
                                    <i className="fa-solid fa-camera-retro"></i>
                                </div>
                                <div className='py-4 mb-2'>
                                    {activeheader === "icon" && <div className="grid grid-cols-2 sm:grid-cols-3 justify-between px-4">
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleIcon("I1")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeIcon === "I1" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>camera-retro</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleIcon("I2")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeIcon === "I2" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>hand-wave</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleIcon("I3")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeIcon === "I3" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>house-chimney</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleIcon("I4")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeIcon === "I4" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>poo-storm</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleIcon("I5")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeIcon === "I5" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>rocket-launch</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleIcon("I6")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeIcon === "I6" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>sparkles</div>
                                        </div>
                                    </div>}
                                    {activeheader === "style" && <div className="grid grid-cols-2 justify-between px-4">
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleStyle("S1")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeStyle === "S1" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>Solid</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleStyle("S2")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeStyle === "S2" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>regular</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleStyle("S3")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeStyle === "S3" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>light</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleStyle("S4")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeStyle === "S4" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>thin</div>
                                        </div>
                                    </div>}
                                    {activeheader === "color" && <div className="grid grid-cols-2 sm:grid-cols-3 justify-between px-4">
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleColor("C1")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeColor === "C1" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>none</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleColor("C2")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeColor === "C2" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>red</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleColor("C3")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeColor === "C3" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>yellow</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleColor("C4")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeColor === "C4" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>teal</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleColor("C5")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeColor === "C5" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>blue</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleColor("C6")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeColor === "C6" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>purple</div>
                                        </div>
                                    </div>}
                                    {activeheader === "size" && <div className="grid grid-cols-2 sm:grid-cols-3 justify-between px-4">
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleSize("s1")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeSize === "s1" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>2xs</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleSize("s2")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeSize === "s2" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>xs</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleSize("s3")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeSize === "s3" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>sm</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleSize("s4")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeSize === "s4" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>none</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleSize("s5")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeSize === "s5" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>lg</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleSize("s6")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeSize === "s6" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>xl</div>
                                        </div>
                                    </div>}
                                    {activeheader === "animate" && <div className="grid grid-cols-2 sm:grid-cols-3 justify-between px-4">
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleAnimation("A1")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeAnimation === "A1" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>none</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleAnimation("A2")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeAnimation === "A2" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>beat</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleAnimation("A3")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeAnimation === "A3" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>bounce</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleAnimation("A4")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeAnimation === "A4" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>flip</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleAnimation("A5")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeAnimation === "A5" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>shake</div>
                                        </div>
                                        <div className='p-2 flex items-center group cursor-pointer space-x-2' onClick={() => handleAnimation("A6")}>
                                            <div className='text-xs'>
                                                <span><i className={`fa-solid fa-circle${activeAnimation === "A6" ? "-dot" : " text-white"}`}></i></span>
                                            </div>
                                            <div className='lg:text-sm'>spin</div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                            <div className='bg-[#183153] p-4 flex justify-between rounded-b-lg space-x-6 text-sm'>
                                <div className='px-2 text-start'>
                                    <span className="text-gray-300">&lt;</span>
                                    <span className="text-white">i&nbsp;class</span>
                                    <span className="text-gray-300">=&#8220;</span>
                                    <span className="text-[#74c0fc]">{iconData.class}</span>
                                    <span className="text-gray-300">&#8221;</span>
                                    <span className={`${activeheader === "color" && "" ? "inline-block" : "hidden"}`}>
                                        <span className="text-white">&nbsp;&nbsp;style</span>
                                        <span className="text-gray-300">=&#8220;</span>
                                        <span className="text-gray-300">&#8221;</span>
                                    </span>
                                    <span className="text-gray-300"> &gt;&lt;/</span>
                                    <span className="text-white">i</span>
                                    <span className="text-gray-300">&gt;</span>
                                </div>
                                <div className='text-gray-300 cursor-pointer hover:text-[#74c0fc]' onClick={handleCopy}><i className="fa-solid fa-clone "></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StylingTools