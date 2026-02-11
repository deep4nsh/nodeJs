import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import '../App.css'; // Ensure we have styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <GraduationCap size={32} />
                <span>Assignment 2</span>
            </div>
            <div className="navbar-menu">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/work" className="nav-item">Work</Link>
            </div>
        </nav>
    );
};

export default Navbar;
