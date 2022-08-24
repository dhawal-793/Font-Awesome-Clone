import React from 'react'

const Customize = () => {
    return (
        <>
            <div className='p-4 space-y-8'>
                <div className="m-auto w-full flex flex-col md:flex-row-reverse justify-center space-y-8 md:space-y-0 md:justify-between md:space-x-6 lg:space-x-10  xl:space-x-16 lg:max-w-[90vw] ">
                    <div className='group md:w-1/2'>
                        <img src="https://img.fortawesome.com/1ce05b4b/kits-travel.svg" alt="" className='group-hover:hidden md:max-w-[360px] lg:max-w-[435px]' />
                        
                        <img src="https://img.fortawesome.com/1ce05b4b/kits-travel-far-far-away.svg" alt="" className='hidden group-hover:block md:max-w-[360px] lg:max-w-[435px]' />
                    </div>
                    <div className='md:w-1/2 text-left md:p-6 lg:pt-8 md:max-w-[380px] lg:max-w-[420px]'>
                        <div className="space-x-2 tracking-wide text-sm lg:text-lg mb-4 lg:mb-6 font-extrabold text-[#fab005]">
                            <span>C U S T O M I Z E </span>
                            <span> W I T H </span>
                            <span> A </span>
                            <span>K I T </span>
                        </div>
                        <div className=" font-semibold leading-7 text-2xl lg:text-3xl lg:mb-7">
                            Have icons, will travel.
                        </div>
                        <div className=" py-2 my-2 lg:pb-4 text-xs lg:text-sm tracking-wider leading-5">
                            Pack up your very own custom version of Font Awesome, and get started easily with a Kit lickity-split. We'll bundle only the icons, tools, and settings you need, so you can travel light wherever you go.
                        </div>
                        <div className='space-y-4 lg:space-y-6'>
                            <div>
                                <span className='font-semibold'>
                                    Enter your email to create your first kit!
                                </span>
                            </div>
                            <div className=''>
                                <input type="email" placeholder='e.g. violet@freshsqueezed.org'
                                    className="px-4 text-xs border-[0.5px] md:border-2 text-blue-900 outline-offset-[2.7px] focus:outline-4  outline-[#74c0fc] border-blue-900 rounded-lg md:rounded-xl w-full h-12 md:h-14"
                                />
                            </div>
                            <div className=" rounded-lg md:rounded-xl bg-[#183153] pb-1 md:pb-[0.3rem] w-full  my-4" >
                                <div className='border md:border-2 border-[#183153] px-6 py-[10px] md:py-3 rounded-lg md:rounded-xl w-full  cursor-pointer items-center text-center bg-[#ffd43b] hover:bg-[#fab005] text-[#183153] font-semibold'>
                                    <span><i className="fa-solid fa-suitcase"></i></span>&nbsp; &nbsp; &nbsp;
                                    <span>Send Kit Code</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-3 space-y-6 justify-center xl:px-28 m-auto lg:max-w-[90vw]'>
                    <div className="flex flex-col md:flex-row space-y-6 md:justify-between md:space-y-0 md:space-x-3">
                        <div className='flex space-x-5 md:w-1/2 md:px-3'>
                            <div className='text-lg md:text-3xl text-[#fab005] items-start p-1'>
                                <i className='fa-solid fa-star '></i>
                            </div>
                            <div className='space-y-2'>
                                <div className='md:text-xl font-bold '>
                                    The Latest and Greatest
                                </div>
                                <div className='text-xs md:text-sm'>
                                    Kits auto-update to the newest version of Font Awesome, so you can stop managing files and pushing code.
                                </div>
                            </div>
                        </div>
                        <div className='flex space-x-5 md:w-1/2 md:px-3'>
                            <div className='text-lg md:text-3xl text-[#fab005] items-start p-1'>
                                <i className='fa-solid fa-universal-access '></i>
                            </div>
                            <div className='space-y-2'>
                                <div className='md:text-xl font-bold '>
                                    Auto-Accessibility & more
                                </div>
                                <div className='text-xs md:text-sm'>
                                    Automate your icons' accessibility, control load timing, ensure Font Awesome Version 4 compatibility, and more.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row space-y-6 md:justify-between md:space-y-0 md;space-x-3">
                        <div className='flex space-x-5 md:w-1/2 md:px-3'>
                            <div className='text-lg md:text-3xl text-[#fab005] items-start p-1'>
                                <i class="fa-solid fa-sliders"></i>
                            </div>
                            <div className='space-y-2'>
                                <div className='md:text-xl font-bold '>
                                    Super Simple Subsetting
                                </div>
                                <div className='text-xs md:text-sm'>
                                    Speed up your site with a super-lean, ultra-fast version of Font Awesome! Choose just the icons you need, and your Kit serves them up as a subset, making it faster than ever.
                                </div>
                            </div>
                        </div>
                        <div className='flex space-x-5 md:w-1/2 md:px-3'>
                            <div className='text-lg md:text-3xl text-[#fab005] items-start p-1'>
                                <i className='fa-brands fa-cloudflare '></i>
                            </div>
                            <div className='space-y-2'>
                                <div className='md:text-xl font-bold '>
                                    Powered by Cloudflare
                                </div>
                                <div className='text-xs md:text-sm'>
                                    Font Awesome Kits are served using Cloudflare, so you know they’re secure, private, fast, and reliable.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Customize



// w-full flex flex-col md:flex-row-reverse justify-center md:justify-between md:space-x-6 px-2 xl:px-28 xl:space-x-10