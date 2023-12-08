import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './Sidebar';
import { FaUser } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
    const [birthdate, setBirthdate] = useState(null);
    const { register, handleSubmit, setValue, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        alert("Data Submitted Successfully!");
        console.log(data)
        reset();
    }
    const handleBirthdateChange = (date) => {
        setBirthdate(date);
        // Set birthdate in the form data using setValue
        setValue('birthdate', date);
    };



    const handleResume = () => {
        navigate('/Resume');
    };

    return (
        <div className="">
            {/* <Sidebar /> */}
            <div className="">

                <div className="bg-slate-50 p-6 flex items-center justify-between border shadow-xl">

                    <div className="flex items-center space-x-2">
                        <img src="./logo.png" alt="Logo" className="w-14 h-14 rounded-full" />
                        <h1 className="text-4xl font-bold">Interns <span className="text-4xl font-bold text-amber-300">Bee</span></h1>
                    </div>


                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Home</a>
                        <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Internships</a>
                        <a href="#" className="text-2xl font-bold focus:text-yellow-300 focus:border-yellow-300 focus:border-b-4">Companies</a>


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
                <div className="mt-6 text-2xl font-bold">
                    <h6>1.Personal Details</h6>

                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">

                        <div className="form-group">
                            <label htmlFor="firstname" className="block text-xl font-medium">First Name</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="fullname" {...register('fullname', { required: 'This field is required' })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname" className="block text-xl font-medium">Last Name</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="lastname" {...register('lastname', { required: 'This field is required' })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="block text-xl font-medium">Email address</label>
                            <input type="email" className="mt-1 p-2 w-full border rounded-md text-xl" id="email" {...register('email', { required: 'This field is required' })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="birthdate" className="block text-xl font-medium">Birth Date</label>
                            <DatePicker
                                selected={birthdate}
                                onChange={handleBirthdateChange}
                                dateFormat="MM/dd/yyyy"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="permanentaddress" className="block text-xl font-medium">Permanent Address</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="permanentaddress" {...register('permanentaddress', { required: 'This field is required' })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city" className="block text-xl font-medium">City</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="city" {...register('city', { required: 'This field is required' })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="district" className="block text-xl font-medium">District</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="district" {...register('district', { required: 'This field is required' })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country" className="block text-xl font-medium">Country</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="country" {...register('country', { required: 'This field is required' })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="currentaddress" className="block text-xl font-medium">Current Address</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="currentaddress" {...register('currentaddress', { required: 'This field is required' })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city" className="block text-xl font-medium">City</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="city" {...register('city', { required: 'This field is required' })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="district" className="block text-xl font-medium">District</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="district" {...register('district', { required: 'This field is required' })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country" className="block text-xl font-medium">Country</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="country" {...register('country', { required: 'This field is required' })} />
                        </div>

                    </div>
                    <div className="text-xl flex justify-end m-4">
                        <button type="submit" className='mt-8 p-2 text-xl text-white border rounded-md bg-gray-800'>Save and next</button>
                    </div>
                </form>
                <div className="mt-6 text-2xl font-bold">
                    <h6>2.Educational Details</h6>
                </div>

                <form>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-4">

                        <div className="form-group">
                            <label htmlFor="education" className="block text-xl font-medium">Education</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="education" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="institutename" className="block text-xl font-medium">School/Institute Name</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="institutename" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="stream" className="block text-xl font-medium">Stream</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="stream" />
                        </div>


                        <div className="form-group">
                            <label htmlFor="passoutyear" className="block text-xl font-medium">Pass-out Year</label>
                            <DatePicker
                                selected={birthdate}
                                onChange={(date) => setBirthdate(date)}

                                dateFormat="MM/dd/yyyy"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                            />
                        </div>
                    </div>
                    <div className="text-xl flex justify-end m-4">
                        <button type="button" className='mt-8 p-2 text-xl text-white border rounded-md  bg-gray-800 mr-4'>Add</button>
                        <button type="button" className='mt-8 p-2 text-xl text-white border rounded-md  bg-gray-800 '>Save and next</button>

                    </div>
                </form>

                <div className="mt-6 text-2xl font-bold">
                    <h6>3.Technical Details</h6>

                </div>

                <form>
                    <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 m-4">

                        <div className="form-group">
                            <label htmlFor="keyskills" className="block text-xl font-medium">Key SKills</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="keyskills" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="languages" className="block text-xl font-medium">Languages</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="languages" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="experience" className="block text-xl font-medium">Experience(if any)</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="experience" />
                        </div>


                        <div className="form-group">
                            <label htmlFor="salaryexpections" className="block text-xl font-medium">Salary Expections</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="salaryexpections" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="projectname" className="block text-xl font-medium">Project Name</label>
                            <input type="text" className="mt-1 p-2 w-full border rounded-md text-xl" id="projectname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectsummary" className="block text-xl font-medium">Project Summary</label>
                            <textarea
                                id="projectsummary"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                                rows="4"

                            />
                        </div>
                    </div>
                    <div className="text-xl flex justify-end m-4">
                        <button type="button" className='mt-8 p-2 text-xl text-white border rounded-md  bg-gray-800 mr-4'>Add</button>
                        <button type="button" className='mt-8 p-2 text-xl text-white border rounded-md  bg-gray-800'>Save and next</button>

                    </div>
                </form>

                <div className="mt-6 text-2xl font-bold">
                    <h6>4.Upload Documents</h6>
                </div>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Column 1: Upload Resume */}
                        <div className="form-group">
                            <label htmlFor="resume" className="block text-xl font-medium">Resume</label>
                            <input
                                type="file"
                                id="resume"
                                accept=".pdf, .doc, .docx"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                            />
                        </div>

                        {/* Column 2: "Or" Text */}
                        <div className="form-group col-span-3 md:col-span-1 mt-10">
                            <span className="block text-xl font-large">OR</span>
                        </div>

                        {/* Column 3: Create Resume Button */}
                        <div className="form-group">
                            <button type='button' className='mt-8 p-2 text-xl text-white border rounded-md bg-gray-800' onClick={handleResume}>Create Resume</button>
                        </div>

                        {/* Column 4: Upload Certification */}
                        <div className="form-group">
                            <label htmlFor="certification" className="block text-xl font-medium mt-10">Certification</label>
                            <input
                                type="file"
                                id="certification"
                                accept=".pdf, .doc, .docx"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                            />
                        </div>

                        {/* Column 5: Upload Profile Picture */}
                        <div className="form-group">
                            <label htmlFor="profilePicture" className="block text-xl font-medium mt-10">Profile Picture</label>
                            <input
                                type="file"
                                id="profilePicture"
                                accept="image/*"
                                className="mt-1 p-2 w-full border rounded-md text-xl"
                            />
                        </div>
                    </div>
                    <div className="text-xl flex justify-end m-4">
                        <button type="button" className='mt-8 p-2 text-xl text-white border rounded-md  bg-gray-800 mr-4'>Add</button>
                        <button type="button" className='mt-8 p-2 text-xl text-white border rounded-md  bg-gray-800'>Save and next</button>

                    </div>
                </form>

            </div>

        </div >
    );
};

export default Profile;
