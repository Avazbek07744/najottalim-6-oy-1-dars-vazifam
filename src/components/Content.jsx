import React from 'react'
import send from './img/send.svg'
import arrow from './img/arrow.svg'
import leftimage from './img/image.png'

const Content = () => {
    return (
        <div className='flex items-center gap-24 justify-center'>
            <div className="img">
                <img src={leftimage} alt="" />
            </div>
            <div className="info">
                <p className='uppercase mb-[10px] leading-3 color flex items-center gap-2'>About Us <img src={send} alt="" /></p>
                <h1 className='font2 w-[600px] font-bold mb-5'>Unknown Wanderlust <span className='color'>Your Journey into</span></h1>
                <p className='text-[#727272] mb-5 w-[510px] leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
                <div className="cards flex mb-10">
                    <div className="card">
                        <form action="">
                            <input type="checkbox" name="" id="input" />
                            <label htmlFor="input" className='p-2 text-[18px] leading-7 color'>Safety Guides</label>
                        </form>
                            <p className='leading-7 w-[270px] text-[#727272]'>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
                    </div>
                    <div className="card">
                        <form action="">
                            <input type="checkbox" name="" id="input" />
                            <label htmlFor="input" className='p-2 text-[18px] leading-7 color'>Passport Assistance</label>
                        </form>
                        <span>
                            <p className='leading-7 w-[270px] text-[#727272]'>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
                        </span>
                    </div>
                </div>
                <button className='bg3 py-4 px-8 flex items-center gap-2 rounded-[999px] border border-[#83CD20] text-white hover transition-all duration-700'>Read More <img src={arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Content
