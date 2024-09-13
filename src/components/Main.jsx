import React from 'react'
import arrow from './img/arrow.svg'

const Main = () => {
    return (
        <div className='bg2 mb-[120px]'>
            <div className="main1">
                <h1 className='w-[984px] font text-white text-center m-auto mt[210px] font-bold'>Journey with Confidence <span className='color2 font font-bold'>Migrate</span> with Us</h1>
                <p className='w-[520px] m-auto text-white mb-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.
                </p>
                <button className='flex items-center gap-3  px-3 py-2 m-auto rounded-3xl border border-[#83CD20] hover:bg-[#83CD20] transition-all duration-700'>
                    <p className='text-white'>Learn More</p>
                    <img src={arrow} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Main
