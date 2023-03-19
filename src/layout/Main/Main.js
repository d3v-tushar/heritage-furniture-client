import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;