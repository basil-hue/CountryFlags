// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginPage/loginPage';
import Home from './dashBoard/Home';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FlagContextProvider } from './Context/FlagContextPrvider';
// import RegistrationPage from './registrationPage';

function App() {
  return (
    <div className='main'>
    <FlagContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        

  
      </Routes>
    </Router>
    </FlagContextProvider>
    </div>
  );
}

export default App;
