import React from 'react';
import Sidebar from './Sidebar';
import { FaUser } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-8">
                {/* Navbar */}
                <div className="bg-blue p-6 flex items-center justify-between border shadow-xl">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="./logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
                        <h1 className="text-4xl font-bold">Logo</h1>
                    </div>

                    {/* Navbar Links */}
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-2xl">Home</a>
                        <a href="#" className="text-2xl">Jobs</a>
                        <a href="#" className="text-2xl">Companies</a>
                        <a href="#" className="text-2xl">Services</a>
                        <a href="#" className="text-2xl">Location</a>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 rounded-md mr-2 border"
                        />
                    </div>

                  
                    <div className="flex items-center space-x-4">
                        <div className="">
                            <IoNotificationsOutline className="mr-4  text-4xl" />
                          
                        </div>
                        <div className="">
                            <FaUser className="mr-4  text-4xl" />

                           
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Home;
