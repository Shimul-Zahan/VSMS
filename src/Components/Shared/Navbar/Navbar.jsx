import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Navlinks from './Navlinks';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className='flex sticky top-0 shadow-xl justify-between items-center md:px-10 z-50 bg-gray-900 text-white'>
                <div className='w-full z-50 md:w-auto px-4 py-8 flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>VSMG</h1>
                    <div onClick={() => setOpen(!open)} className='text-2xl md:hidden cursor-pointer'>
                        {open ? <IoClose /> : <GiHamburgerMenu />}
                    </div>
                </div>
                <ul className='md:flex hidden justify-center items-center gap-10 py-5 uppercase'>
                    <Navlinks />
                </ul>
                <div className='flex justify-center items-center gap-3'>
                    <button className='md:block hidden px-6 py-2 bg-yellow-400 rounded-full'>
                        Get Startered
                    </button>
                    <button className='md:block hidden px-6 py-2 bg-yellow-400 rounded-full'>
                        Register Now
                    </button>
                </div>


                {/* mobile navbar */}
                <ul className={`md:hidden bg-yellow-400 absolute w-full h-screen py-10 space-y-5 bottom-0 top-20 left-0 pl-4
                duration-700 ${open ? 'left-0' : 'left-[-100%]'}
                `}>
                    <Navlinks />
                    <button className='px-6 py-2 bg-yellow-400 rounded-full'>
                        Get Startered
                    </button>
                    <button className='px-6 py-2 bg-yellow-400 rounded-full'>
                        Register Now
                    </button>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar