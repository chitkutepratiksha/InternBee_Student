import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaUser, FaCalendar, FaMoneyBill, FaMapMarkerAlt, FaRegClock, FaCalendarAlt } from 'react-icons/fa';

import Footer from '../Components/Footer';


const Internship = () => {
    const companiesRef = useRef(null);
    const internshipsRef = useRef(null);
    const navigate = useNavigate();
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleProfileIconClick = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    const handleViewProfile = () => {

        navigate('/Profile')

    };

    const handleLogout = () => {

        navigate('/Signin')


    };

    const handleCompaniesClick = () => {
        if (companiesRef.current) {
            companiesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleInternshipsClick = () => {
        if (internshipsRef.current) {
            internshipsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const internships = [

        {
            id: 1,
            companyName: 'Tata Consultancy Service',
            position: 'Fronted Developer',
            reviews: 4.2,
            duration: 1,
            stipend: 'Rs. 12,000/month',
            location: 'Mumbai',
            skillsRequired: ['Java', 'Spring Boot', 'Hibernate'],
            deadline: '2023-12-20',
        },
        {
            id: 1,
            companyName: 'Tata Consultancy Service',
            position: 'Fronted Developer',
            reviews: 4.2,
            duration: 1,
            stipend: 'Rs. 12,000/month',
            location: 'Mumbai',
            skillsRequired: ['Java', 'Spring Boot', 'Hibernate'],
            deadline: '2023-12-20',
        },
        {
            id: 3,
            companyName: 'dhsbdb',
            position: 'Fronted Developer',
            reviews: 4.2,
            duration: 1,
            stipend: 'Rs. 12,000/month',
            location: 'Mumbai',
            skillsRequired: ['Java', 'Spring Boot', 'Hibernate'],
            deadline: '2023-12-20',
        },
    ];
    const handleHome = () => {
        navigate('/Home1')
    }


    return (
        <>

            <div className="navbar-container fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 flex items-center justify-between border">

                <div className="flex items-center space-x-2">
                    <img src="./logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
                    <h1 className="text-4xl font-bold">Interns <span className="text-4xl font-bold text-amber-300">Bee</span></h1>
                </div>


                <div className="flex items-center space-x-6">
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={handleHome}>Home</a>
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={handleCompaniesClick}>Companies</a>
                    <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4" onClick={handleInternshipsClick}>Internships</a>


                </div>

                {/* Search Bar */}
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 rounded-md mr-2 border"
                    />
                </div>


                <div className="flex items-center space-x-4 relative">
                    <div className="">
                        <IoNotificationsOutline className="mr-4  text-4xl" />
                    </div>
                    <div
                        className="cursor-pointer"
                        onMouseEnter={() => setShowProfileDropdown(true)}
                        // onMouseLeave={() => setShowProfileDropdown(false)}
                        onClick={handleProfileIconClick}

                    >
                        <FaUser className="mr-4  text-4xl" />
                        {showProfileDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md">
                                <div
                                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                    onClick={handleViewProfile}
                                >
                                    View Profile
                                </div>
                                <div
                                    className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                                    onClick={handleLogout}
                                >
                                    Log Out
                                </div>
                            </div>
                        )}
                    </div>


                </div>
            </div>
            <div className='bg-slate-100 mt-20'>

                <div className='ml-20 mb-10 text-2xl font-bold flex flex-col'>
                    <h1 className='mt-20'>Search Your Dream Internship here</h1>
                </div>

                <div className="relative flex items-center gap-2 mb-20">
                    <input
                        type="text"
                        placeholder="Enter skills/designations/companies"
                        className="h-16 w-1/2 mx-20 rounded-full border  border-gray-500  focus:border-gray-400 pl-8 pr-16 mb-20"
                    />
                    <button className="absolute right-0 mr-96 bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2 mb-20">
                        Search
                    </button>
                </div>
            </div>
            <div className='flex'>
                <div className="w-1/4 bg-gray-100 p-6 ml-10 h-1/3">
                    <h2 className="text-lg font-semibold mb-4">All Filters</h2>
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-2">Profile</h3>
                        <select className="w-full p-2 border rounded">
                            <option value="">All</option>
                            <option value="">Web development</option>
                            <option value="">Mobile Development</option>
                            <option value="">Software development</option>
                            <option value="">Software Engineer</option>
                            <option value="">Fronted Development</option>

                        </select>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-2">Location</h3>
                        <select className="w-full p-2 border rounded">
                            <option value="">All</option>
                            <option value="">Pune</option>
                            <option value="">Bangalore</option>
                            <option value="">Mumbai</option>
                            <option value="">Hydrabad</option>
                            <option value="">Gurgaon</option>

                        </select>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-2">Stipend</h3>
                        <select className="w-full p-2 border rounded">
                            <option value="">Any</option>
                            <option value="">1000-5000</option>
                            <option value="">5000-10000</option>
                            <option value="">10000-15000</option>
                            <option value="">more than 15000</option>

                        </select>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-md font-semibold mb-2">Duration</h3>
                        <select className="w-full p-2 border rounded">
                            <option value="">All</option>
                            <option value="">1 month</option>
                            <option value="">2 month</option>
                            <option value="">3 month</option>
                            <option value="">4 month</option>
                            <option value="">5 month</option>
                            <option value="">6 month</option>


                        </select>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-2">Other Filters</h3>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Part-time</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Full-time</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Work from Home</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Internship for women</span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    {internships.map(internship => (
                        <div key={internship.id} className=" ml-40 card w-full m-6 rounded-md flex flex-grow justify-between items-center bg-white  shadow-md overflow-hidden">
                            <div className="flex-grow px-6 py-4">

                                <h2 className="card-title text-2xl font-semibold text-gray-800">{internship.position}</h2>
                                <p className="card-company text-xl text-gray-700">{internship.companyName}</p>

                                <div className="flex justify-between items-center my-4">

                                    <div className="flex items-center">
                                        <FaCalendar className="mr-2" />
                                        <p className="card-company text-xl text-gray-700">{internship.duration}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMoneyBill className="mr-2" />
                                        <p className="card-location text-xl text-gray-700">&#x20B9;{internship.stipend}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="mr-2" />
                                        <p className="card-duration text-xl text-gray-700">{internship.location}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaRegClock className="mr-2" />
                                        <p className="card-duration text-xl text-gray-700">{internship.deadline}</p>
                                    </div>

                                </div>

                                <p className="card-description text-base text-gray-700 my-4">
                                    {`We are seeking a talented and driven ${internship.companyName} with a solid skills ...`}
                                </p>
                                <p className="card-skills text-base text-gray-700">Skills: {internship.skillsRequired.join(', ')}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />

        </>
    )

}
export default Internship;