import React from 'react'
// import tb from "./assets/i64.png"
const OpenSource = () => {
    return (
        <>
            <div className=" items-center justify-center">
                <div className='w-full p-10 bg-[#183153]'>
                    <h1 className=' text-center my-3 text-lg font-semibold text-[#ffd43b] tracking-widest'>THE WEB'S DEFAULT ICON SET, USED ON OVER 200 MILLION SITES</h1>
                    <div className='flex py-4 justify-center items-center space-x-8 md:space-x-20 lg:space-x-32 xl:space-x-52 '>
                        <div className='text-white hover:text-[#74c0fc] text-4xl lg:text-6xl'>
                            <a href="https://www.docker.com" target="_blank" rel="noreferrer" className="" >
                                <i class="fa-brands fa-docker"></i>
                            </a>
                        </div>
                        <div className='text-white hover:text-[#74c0fc] text-4xl lg:text-6xl'>
                            <a href="https://about.gitlab.com" target="_blank" rel="noreferrer" className="" >
                                <i class="fa-brands fa-gitlab"></i>
                            </a>
                        </div>
                        <div className='text-white hover:text-[#74c0fc] text-4xl lg:text-6xl'>
                            <a href="https://aws.amazon.com" target="_blank" rel="noreferrer" className="" >
                                <i class="fa-brands fa-aws"></i>
                            </a>
                        </div>
                        <div className='text-white hover:text-[#74c0fc] text-4xl lg:text-6xl'>
                            <a href="https://www.digitalocean.com" target="_blank" rel="noreferrer" className="" >
                                <i class="fa-brands fa-digital-ocean"></i>
                            </a>
                        </div>
                        <div className='text-white hover:text-[#74c0fc] text-4xl lg:text-6xl'>
                            <a href="https://www.figma.com" target="_blank" rel="noreferrer" className="" >
                                <i class="fa-brands fa-figma"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bg-[#f0f1f3]'>
                    <div className='w-full flex flex-col-reverse md:flex-row justify-center md:justify-between'>
                        <div className='px-8 md:px-16 lg:px-24 xl:pl-48 py-4 text-left md:w-1/2 text-[#183153]'>
                            <div className="header space-x-2 tracking-widest text-lg mb-3 font-bold text-[#0ca678] my-3">
                                <span>P R O U D L Y </span><span> O P E N</span><span>S O U R C E</span>
                            </div>
                            <div className=" font-semibold text-4xl my-6">
                                Everyone gets more awesome.
                            </div>
                            <div className="py-6 text-lg">
                                We know the pain of wrangling icons on the internet. That's why in 2012, we created the first version of our open-source icons and toolkit. And with the help of our subscription plan Font Awesome Pro, we've built a lean icon-obsessed team who keep cranking out more icons, more styles, and more services for everyone.
                            </div>
                            <div className=" rounded-lg md:rounded-xl bg-[#183153] pb-1 md:pb-[0.3rem] w-full md:w-fit my-4" >
                                <div className='border md:border-2 border-[#183153] px-6 py-3 rounded-lg md:rounded-xl w-full md:w-fit cursor-pointer items-center text-center bg-[#63e6be] hover:bg-[#0ca678] text-[#183153] font-semibold'>
                                    <span><i class="fa-solid fa-binoculars"></i></span>&nbsp; &nbsp;
                                    <span>Explore Font Awesome Free</span>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2'>
                            <img src="https://img.fortawesome.com/1ce05b4b/open-source-illustration.svg" alt="" className="m-auto h-full" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8 px-8 py-8 lg:px-24 xl:px-36'>
                        <div className='items-center py-6 px-3 bg-white rounded-xl'>
                            <div className='text-6xl p-4 text-center text-[#0ca678]'>
                                <i class="fa-solid fa-hand-holding-heart"></i>
                            </div>
                            <div className='px-6'>
                                <div className='text-2xl font-bold my-2 py-2'>
                                    Always Free
                                </div>
                                <div className='text-sm'>
                                    From the beginning, Font Awesome has been free and open source. And since we're creator owned and operated, we get to make sure Font Awesome Free stays that way.
                                </div>
                            </div>
                        </div>
                        <div className='items-center py-6 px-3 bg-white rounded-xl'>
                            <div className='text-6xl p-4 text-center text-[#0ca678]'>
                                <i class="fa-solid fa-shield"></i>
                            </div>
                            <div className='px-6'>
                                <div className='text-2xl font-bold my-2 py-2'>
                                    No Shenanigams
                                </div>
                                <div className='text-sm'>
                                    We have more icons, services, and support in Pro. If you want them, you subscribe. No shenanigans. We won't sell your data, because we don't want to live in that world, and we don't want to run that company.
                                </div>
                            </div>
                        </div>
                        <div className='items-center py-6 px-3 bg-white rounded-xl'>
                            <div className='text-6xl p-4 text-center text-[#0ca678]'>
                                <i class="fa-solid fa-rocket"></i>
                            </div>
                            <div className='px-6'>
                                <div className='text-2xl font-bold my-2 py-2'>
                                    Support Open Source
                                </div>
                                <div className='text-sm'>
                                    Give back to the open-source community by subscribing to Font Awesome Pro. In fact, Pro subscribers helped grow Font Awesome Free icons by over 250% since version 4.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-3 lg:flex-row lg:space-y-0 justify-center space-x-8 text-center m-auto my-6 py-6 items-center'>
                        <div className="cursor-pointer space-x-5 group hover:text-[#146EBE] text-lg">
                            <span><i class="fa-brands fa-github"></i></span>
                            <span className="underline decoration-dotted group-hover:decoration-solid font-semibold">
                                Font Awesome is one of the top open source projects on GitHub.
                            </span>
                        </div>
                        <div className='flex space-x-3 text-sm'>
                            <div className='flex cursor-pointer '>
                                <span className='border border-gray-300 mx-0 hover:bg-gray-200 px-[0.2rem]'>
                                <i class="fa-brands fa-github"></i> Star
                                </span>
                                <span className='border border-gray-300 mx-0 bg-white hover:text-[#146EBE] px-[0.2rem]'> 69.924</span>
                            </div>
                            <div className='flex cursor-pointer'>
                                <span className='border border-gray-300 mx-0 hover:bg-gray-200 px-[0.2rem]'>
                                <i class="fa-brands fa-github"></i> Fork
                                </span>
                                <span className='border border-gray-300 mx-0 bg-white hover:text-[#146EBE] px-[0.2rem]'> 12,124</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OpenSource;