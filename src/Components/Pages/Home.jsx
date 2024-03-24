import React from 'react'
import bannerImage from '../../assets/Banner/group-diverse-grads-throwing-caps-up-sky.jpg';

const HomePage = () => {
    return (
        <div className="relative h-[95vh] w-full bg-gray-900 overflow-hidden flex">
            <div className="w-full lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }}>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-0">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-8 text-center">
                    <span className="block xl:inline">Welcome to Versity</span>{' '}
                    <span className="block text-yellow-400 xl:inline">Management System</span>
                </h1>
                <p className="text-base lg:text-lg xl:text-xl text-gray-300 mb-8 text-center">
                    Streamlining education for tomorrow's leaders.
                </p>
                <div className="flex flex-col lg:flex-row">
                    <div className="cursor-pointer w-full lg:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 mb-4 lg:mb-0 lg:mr-4">
                        <a href="/signup">Sign Up</a>
                    </div>
                    <div className="cursor-pointer w-full lg:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-400 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
                        <a href="/login">Log In</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage