
import React from 'react';
import { FaUserTie, FaUserGraduate } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const navigate=useNavigate();
    
    const handleSignIn = () => {
      navigate('/Registration')
  };
    return (
        <div className="flex items-center justify-center h-screen w-50">
            <div className="card bg-yellow-200 p-4">
                <FaUserTie className="text-4xl mb-2" />
                <h2 className="text-2xl font-bold">Employer Card</h2>
                {/* Add employer-specific information here */}
            </div>
            <div className="card bg-yellow-200 p-4 m-4">
                <FaUserGraduate className="text-4xl mb-2" onClick={(handleSignIn)}/>
                <h2 className="text-2xl font-bold">Student</h2>
                {/* Add student-specific information here */}
            </div>
        </div>
    );
}

export default Profile;
