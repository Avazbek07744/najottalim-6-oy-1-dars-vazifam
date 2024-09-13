import React from 'react'
import logo from './img/logo.svg'
import img from './img/chat.svg'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between container main-container'>
            <div className="logo">
                <img className='w-[157px]' src={logo} alt="" />
            </div>
            <ul className='flex gap-2'>
                <li className='hover:text-white bg transition-all duration-300 cursor-pointer p-1 px-3 color  rounded-3xl w-max'>HOME</li>
                <li className='hover:text-white bg transition-all duration-300 cursor-pointer p-1 px-3 color  rounded-3xl w-max'>ABOUT US</li>
                <li className='hover:text-white bg transition-all duration-300 cursor-pointer p-1 px-3 color  rounded-3xl w-max'>SERVICES</li>
                <li className='hover:text-white bg transition-all duration-300 cursor-pointer p-1 px-3 color  rounded-3xl w-max'>PROJECTS</li>
                <li className='hover:text-white bg transition-all duration-300 cursor-pointer p-1 px-3 color  rounded-3xl w-max'>BLOG</li>
            </ul>
            <div className="flex gap-3 items-center">
                <img className='w-[55px]' src={img} alt="" />
                <span>
                    <p className='text-gray-400 mb-1'>Need help?</p>
                    <h6 className=''>(307) 555-0133</h6>
                </span>
            </div>
        </div>
    )
}

export default Navbar
