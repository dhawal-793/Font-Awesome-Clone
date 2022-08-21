import React from 'react'

const Topbar = () => {
    return (
        <>
            <div className="text-xs md:text-sm lg:text-base items-center flex space-x-2 mx-5 md:mx-[5vw] lg:mx-[15vw] rounded-xl my-3 px-8 py-4 bg-[#001c40]">
                <div>

                    <i className="fa-solid fa-parachute-box text-sm md:text-base lg:text-lg text-yellow-300"></i> &nbsp;
                </div>
                <div className='text-start'>

                    <span className='text-white'><span className='font-bold'>Font Awesome 6.1.2</span> is now available with a new </span>
                    <span className='text-blue-300 hover:text-blue-400 hover:decoration-solid underline decoration-dotted'>Humanitarian Icons</span> <span className='text-white'>category and more. </span>
                    <span className='text-blue-300 hover:text-blue-400 hover:decoration-solid underline decoration-dotted'>See everything that's new.</span>
                </div>

            </div>
        </>
    )
}

export default Topbar
