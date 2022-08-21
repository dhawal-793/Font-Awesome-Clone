import React from 'react'

const Header = () => {
    return (
        <>
            <div className="mx-auto w-[80vw] text-center justify-center md:mb-16">

                <div className='mt-12 py-4 mb-8 mx-auto max-w-[680px] text-center tracking-wide text-[#001c40] text-4xl md:text-5xl font-bold'>
                    Take the hassle out of icons in your <span className='text-[#fab005]'>website.</span>
                </div>

                <div className="w-fit md:w-[50vw] md:mx-auto flex justify-center tracking-wide text-sm text-[#001c40]">
                    <div className='text-center'> <span className="font-bold">Font Awesome</span>
                        <span> is the Internet's icon library and toolkit, used by </span><span> millions of designers, developers, and content creators.</span></div>
                </div>
                <div className="my-6 space-y-3 md:space-y-0 justify-center mx-auto md:px-5 flex flex-col md:flex-row">
                    <div className="max-w-[460px] mx-auto md:mx-3 rounded-lg md:rounded-xl bg-[#183153] pb-1 md:pb-[0.3rem] w-full md:w-fit" >
                        <div className='border md:border-2 border-[#183153] px-6 py-1 md:py-3 rounded-lg md:rounded-xl w-full md:w-fit cursor-pointer items-center text-center bg-white hover:bg-[#c3c6d1] text-[#183153] font-semibold'>
                            <span><i className="fa-solid fa-earth-americas text-base"></i></span>&nbsp; &nbsp;
                            <span>Start for Free</span>
                        </div>
                    </div>
                    <div className="max-w-[460px] mx-auto md:mx-3 rounded-lg md:rounded-xl bg-[#183153] pb-1 md:pb-[0.3rem] w-full md:w-fit" >
                        <div className='border md:border-2 border-[#183153] px-6 py-1 md:py-3 rounded-lg md:rounded-xl w-full md:w-fit cursor-pointer items-center text-center bg-[#ffd43b] hover:bg-[#fab005] text-[#183153] font-semibold'>
                            <span><i className="fa-solid fa-rocket text-base"></i></span>&nbsp; &nbsp;
                            <span>Get More with Pro</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header