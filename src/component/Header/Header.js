import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";const Header = () => {
    return (
        <div className='header-container'>
           <Link to="/"></Link>
           <Link to="/home">Home</Link>
           <Link to="/order-review">Orders</Link>
           <Link to="/gfother">G-fother</Link>
        </div>
    );
};

export default Header;