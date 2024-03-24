import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import './nav.css'
import { Link } from 'react-router-dom';

const Navlinks = () => {

    const [heading, setHeading] = useState('');

    const menuItem = [
        {
            nav: 'Home',
            link: '/'
        },
        {
            nav: 'About',
            link: '/about'
        },
        {
            nav: 'Courses',
            link: '/courses',
            submenu: true,
            submenuItem: [
                {
                    name: 'Computer Science',
                    link: '/courses/computer-science'
                },
                {
                    name: 'Mathematics',
                    link: '/courses/mathematics'
                },
                {
                    name: 'Physics',
                    link: '/courses/physics'
                }
            ]
        },
        {
            nav: 'Faculty',
            link: '/faculty'
        },
        {
            nav: 'Students',
            link: '/students'
        },
        {
            nav: 'News & Events',
            link: '/news-events'
        },
        {
            nav: 'Contact Us',
            link: '/contact',
        },
        {
            nav: 'Dashboard',
            link: '/dashboard',
        },
    ];

    return (
        <>
            {
                menuItem.map(item =>
                    <div>
                        <div className='group cursor-pointer'>
                            <li onClick={() => heading !== item.nav ? setHeading(item.nav) : setHeading('')}
                                className='flex justify-between md:justify-center items-center gap-1'>
                                <Link to={item.link} className='nav-item'>{item.nav}</Link> {item.submenu && <RiArrowDropDownLine className='text-xl' />}
                            </li>
                            {
                                item?.submenu && (
                                    <div>
                                        <div className='absolute mt-0 hidden duration-200 group-hover:md:block hover:md:block'>
                                            <div className='py-3'>
                                                <div className='w-4 h-4 absolute left-3 mt-1 bg-yellow-400 rotate-45'></div>
                                            </div>
                                            <div className='space-y-3 py-2 px-10 bg-yellow-400 z-10 '>
                                                {
                                                    item?.submenuItem.map(subMenuItem =>
                                                        <li className='capitalize cursor-pointer hover:text-yellow-500'>{subMenuItem.name}</li>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            {/* mobile view bro */}
                            <div className={` pt-2 ${heading === item.nav ? 'md:hidden duration-500' : 'hidden duration-500'} `}>
                                {
                                    item.submenu && (
                                        <div className='px-10 space-y-2 py-2'>
                                            {
                                                item?.submenuItem.map(subMenuItem =>
                                                    <li>{subMenuItem.name}</li>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Navlinks