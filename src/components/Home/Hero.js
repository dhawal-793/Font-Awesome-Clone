import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="m-auto my-4 px-5 max-w-[700px] md:max-w-[80vw] rounded-lg ">
                <div className='relative w-full h-[350px] md:h-[430px]'>
                    <iframe src="https://player.vimeo.com/video/672462812?h=73f487b808&amp;texttrack=en" title='Hero' frameBorder={"0"} webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" className='rounded-lg w-[100%] h-[100%] '></iframe>
                </div>
            </div>
        </>
    )
}

export default Hero