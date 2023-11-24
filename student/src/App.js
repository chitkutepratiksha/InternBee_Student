import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Registration from './Components/Registration';
import Signin from './Components/Signin';
import Profile from './Components/Profile';



import Login from './Employer/Login';
import Signup from './Employer/Signup';
import Packages from './Employer/Packages';

function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<Profile />} />

        <Route path="/Registration" element={<Registration />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Signin" element={<Signin />} />


      </Routes>
    </Router>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Signup />} />
    //     <Route path="/Login" element={<Login />} />
    //     <Route path="/Packages" element={<Packages />} />
    //   </Routes>
    // </Router>


  );
}

export default App;
