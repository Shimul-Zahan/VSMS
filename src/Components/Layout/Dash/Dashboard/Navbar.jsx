import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { toast } from 'react-toastify';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { MyContext } from '../../../../Auth/AuthProvide';
const Navbar = () => {

    // setIsSidebarOpen,
    // isSidebarOpen,

    const { user, logOut, setIsSidebarOpen, isSidebarOpen } = useContext(MyContext);

    const logOutUser = () => {
        logOut().then(res => {
            localStorage.removeItem('ms_userInfo');
            toast.warning('Successfully Logout', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            })
        }).catch(err => console.log(err))
    }

    const userManual = localStorage.getItem("ms_userInfo");
    const loginUser = JSON.parse(userManual);
    const userPhotoUrl = user?.reloadUserInfo?.photoUrl || `http://localhost:8000/image/${loginUser?.image}`;

    return (
        <nav className="bg-[#151c47] flex justify-between h-[80px] w-full items-center pr-10 lg:px-10 text-2xl">
            {/* Left side */}
            <div className="flex items-center gap-5">
                {
                    isSidebarOpen ? <FaChevronCircleRight onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='text-3xl text-white cursor-pointer' /> :
                        <FaCircleChevronLeft onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='text-3xl text-white cursor-pointer' />
                }
                <div className="mr-4 relative">
                    {/* Search bar */}
                    <input
                        type="text"
                        className="bg-[#292d4d] lg:min-w-[300px] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Search..."
                    />
                    <div className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer'>
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                </div>
            </div>

            {/* Right side */}
            <div className="lg:flex items-center justify-end gap-5 hidden">
                {/* Notification icon */}
                <button className="text-[#b9a683] mr-4 focus:outline-none">
                    <MdOutlineDarkMode className='text-3xl text-[#ddd5c7]' />

                </button>
                <IoSettings className='text-3xl text-[#ddd5c7]' />

                {
                    (user || loginUser) ? <div onClick={logOutUser} className='flex justify-center items-center gap-3'>
                        <Link to="/registration" className='cursor-pointer nav-item text-[#b9a683] hover:underline'>Logout</Link>
                        {/* <VscAccount className='text-3xl ' /> */}
                        <img src={userPhotoUrl} alt="" className='h-12 w-12 rounded-full' />
                    </div> : <div className='flex justify-center items-center gap-3 text-[#ddd5c7]'>
                        <Link to="/registration" className='cursor-pointer nav-item'>Sign in</Link>
                        <VscAccount className='text-3xl ' />
                    </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;


