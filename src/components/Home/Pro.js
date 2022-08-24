import React from 'react'

const Pro = () => {
    return (
        <div className='px-5 py-10 bg-[#ffd43b]'>
            <div className="mt-3 mx-auto flex md:items-center flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-10 md:justify-between md:max-w-[800px] lg:max-w-[1000px]">
                <div className='md:w-[60%] lg:w-[65%]'>
                    <div className="space-x-2 tracking-wide text-sm  mb-4 font-extrabold text-[#183153]">
                        <span>U P G R A D E </span>
                        <span> T O </span>
                        <span> F O N T </span>
                        <span> A W E S O M E </span>
                        <span>P R O </span>
                    </div>
                    <div className="py-2 my-2  text-sm tracking-wider leading-5">
                        Font Awesome Pro gives you 16,150 icons in 68 categories across five styles + brands. Plus, Actual Human™ tech support, hosted Pro Kits, Pro npm, and more!
                    </div>
                </div>
                <div className=" md:w-[40%] lg:w-[35%]">
                    <div className="ml-auto rounded-lg md:rounded-xl bg-[#183153] pb-1 md:pb-[0.3rem] w-full md:w-fit" >
                        <div className='border md:border-2 border-[#183153] px-2 py-2 md:py-3 md:text-lg rounded-lg md:rounded-xl w-full cursor-pointer items-center text-center bg-white hover:bg-[#c3c6d1] text-[#183153] font-semibold'>
                            <span><i className="fa-solid fa-earth-americas"></i></span>&nbsp; &nbsp; &nbsp;
                            <span>Get Front Awesome Pro</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pro