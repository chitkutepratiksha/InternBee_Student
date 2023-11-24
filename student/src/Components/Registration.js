import React, { useState } from "react";
import { FaUser, FaEnvelope, FaMobile, FaLock } from "react-icons/fa"; // Import icons
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
    });

    const [showEmailOtpInput, setShowEmailOtpInput] = useState(false);
    const [emailOtp, setEmailOtp] = useState("");

    const [showMobileOtpInput, setShowMobileOtpInput] = useState(false);
    const [mobileOtp, setMobileOtp] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmailOTP = () => {
        // Add logic to send OTP to the provided email address
        // For simplicity, let's assume the OTP is sent successfully
        setShowEmailOtpInput(true);
    };

    const sendMobileOTP = () => {
        // Add logic to send OTP to the provided mobile number
        // For simplicity, let's assume the OTP is sent successfully
        setShowMobileOtpInput(true);
    };

    const verifyEmailOTP = () => {
        // Add logic to verify the entered email OTP
        // For simplicity, let's assume the OTP is verified successfully
        alert("Email OTP Verified Successfully!");
    };

    const verifyMobileOTP = () => {
        // Add logic to verify the entered mobile OTP
        // For simplicity, let's assume the OTP is verified successfully
        alert("Mobile OTP Verified Successfully!");
    };

    const handleGoogleRegistration = () => {
        // Add logic for registering with Google
        alert("Registering with Google...");
    };
    const handleSignIn = () => {
        navigate('/Signin')
    };

    return (
        <div className=" h-screen w-full flex items-center justify-center">
            <div
                className="bg-amber-300 p-8 rounded shadow-md w-full"
                style={{ width: "40rem" }}
            >
                <h1 className="text-2xl font-semibold mb-4 text-center">
                    Student Registration
                </h1>

                {/* Employer Registration Form */}
                <form className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col mb-4 items-center">
                            {/* <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-600"
              >
                First Name
              </label> */}
                            <div className="flex items-center">
                                <div>
                                    <FaUser className="mr-2 inline-block" size={25} />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded flex-grow"
                                        placeholder="Enter First Name"
                                    />
                                </div>
                            </div>
                        </div>



                        <div className="flex flex-col mb-4 items-center">

                            <div className="flex items-center">
                                <div>

                                    <FaUser className="mr-2 inline-block" size={25} /></div>
                                <div>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded flex-grow"
                                        placeholder="Enter Last Name"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col mb-4">
                        {/* <label
              htmlFor="email"
              className="text-sm font-medium text-black"
            >
              <FaEnvelope className="mr-2 inline-block" size={25} />
              Email Address
            </label> */}
                        <div className="flex items-center">
                            <div> <FaEnvelope className="mr-2 inline-block" size={25} /></div>
                            <div className="flex-grow">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className=" mt-1 p-1 flex-grow border rounded"
                                    placeholder="Enter Email"
                                    style={{ width: "100%" }}
                                /></div>
                            {/* <button
                type="button"
                onClick={sendEmailOTP}
                className=" px-2 ml-2 bg-black text-white py-2 rounded hover:bg-black"
              >
                Send OTP
              </button> */}
                        </div>
                    </div>

                    {/* Email OTP Input */}
                    {showEmailOtpInput && (
                        <div className="flex flex-col mb-4">
                            {/* <label
                htmlFor="emailOtp"
                className="text-sm font-medium text-gray-600"
              >
                <FaEnvelope className="mr-2 inline-block" size={25} />
                Enter Email OTP
              </label> */}
                            <div className="flex items-center">
                                <div> <FaEnvelope className="mr-2 inline-block" size={25} /></div>
                                <div className="flex-grow">
                                    <input
                                        type="text"
                                        id="emailOtp"
                                        name="emailOtp"
                                        value={emailOtp}
                                        onChange={(e) => setEmailOtp(e.target.value)}
                                        className="mt-1 p-2 flex-grow border rounded"
                                        placeholder="Enter OTP"
                                        style={{ width: "100%" }}
                                    /> </div>
                                {/* <button
                  type="button"
                  onClick={verifyEmailOTP}
                  className="px-2 ml-2 bg-black text-white py-2 rounded hover:bg-black"
                >
                  Verify OTP
                </button> */}
                            </div>
                        </div>
                    )}

                    {/* Mobile Input */}
                    <div className="flex flex-col mb-4">
                        {/* <label
              htmlFor="mobile"
              className="text-sm font-medium text-gray-600"
            >
              <FaMobile className="mr-2 inline-block" size={25} />
              Mobile Number
            </label> */}
                        <div className="flex items-center">
                            <div><FaMobile className="mr-2 inline-block" size={25} /></div>
                            <div className="flex-grow">
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="mt-1 p-2 flex-grow border rounded"
                                    placeholder="Enter Mobile No"
                                    style={{ width: "100%" }}
                                /> </div>
                            {/* <button
                type="button"
                onClick={sendMobileOTP}
                className="px-2 ml-2 bg-black text-white py-2 rounded hover:bg-black"
              >
                Send OTP
              </button> */}
                        </div>
                    </div>

                    {/* Mobile OTP Input */}
                    {showMobileOtpInput && (
                        <div className="flex flex-col mb-4">
                            {/* <label
                htmlFor="mobileOtp"
                className="text-sm font-medium text-gray-600"
              >
                
                Enter Mobile OTP
              </label> */}
                            <div className="flex items-center">
                                <div><FaMobile className="mr-2 inline-block" size={25} /></div>
                                <div className="flex-grow">
                                    <input
                                        type="text"
                                        id="mobileOtp"
                                        name="mobileOtp"
                                        value={mobileOtp}
                                        onChange={(e) => setMobileOtp(e.target.value)}
                                        className=" px-2 mt-1 p-2 flex-grow border rounded"
                                        placeholder="Enter OTP"
                                        style={{ width: "100%" }}
                                    /> </div>
                                {/* <button
                  type="button"
                  onClick={verifyMobileOTP}
                  className=" px-2 ml-2 bg-black text-white py-2 rounded hover:bg-black"
                >
                  Verify OTP
                </button> */}
                            </div>
                        </div>
                    )}

                    {/* Password Input */}
                    <div className="flex flex-col mb-4">
                        {/* <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600"
            >
              <FaLock className="mr-2 inline-block" size={25} />
              Password
            </label> */}
                        <div className="flex items-center">
                            <div><FaLock className="mr-2 inline-block" size={25} /></div>
                            <div className="flex-grow">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className=" px-2 mt-1 p-2 flex-grow border rounded"
                                    placeholder="Password"
                                    style={{ width: "100%" }}
                                /></div>
                        </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="flex flex-col mb-4">
                        {/* <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-600"
            >
              
              Confirm Password
            </label> */}
                        <div className="flex items-center">
                            <div><FaLock className="mr-2 inline-block" size={25} /></div>
                            <div className="flex-grow">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="mt-1 p-2 flex-grow border rounded"
                                    placeholder="Confirm Password"
                                    style={{ width: "100%" }}
                                /></div>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-red-600"
                    >
                        Sign Up
                    </button>
                    {/* Register with Google Button */}
                    <button
                        type="button"
                        onClick={handleGoogleRegistration}
                        className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-red-600"
                    >
                        Register with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;