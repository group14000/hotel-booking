import React, { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import {  SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { CgProfile } from "react-icons/cg";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center py-4 px-2">
                    <Link to="/" className="font-semibold text-gray-800 text-lg">Homely</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <NavLink to="#" label="Booking" />
                    <NavLink to="#" label="Facilities" />
                    <NavLink to="/about" label="About Us" />
                    <NavLink to="#" label="Location" />
                    <NavLink to="/contact" label="Contact" />
                </div>
                <div className="hidden md:flex items-center space-x-3">
                    <AuthButtons />
                </div>
                <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button" onClick={toggleMenu} type="button">
                        <IoReorderThreeOutline className="text-3xl text-gray-800" />
                    </button>
                </div>
            </div>
            <MobileMenu isOpen={isMenuOpen} />
        </nav>
    );
};

const NavLink: React.FC<{ to: string, label: string }> = ({ to, label }) => {
    return (
        <Link to={to} className="py-4 px-2 text-gray-600 hover:text-green-500 transition duration-300">{label}</Link>
    );
};

const AuthButtons: React.FC = () => {
    return (
        <div className="flex items-center space-x-3">
            <SignedOut>
                <Link to="/" className="py-2 px-4 font-medium text-white bg-green-500 rounded-full hover:bg-green-400 transition duration-300" type="button">
                    <SignInButton />
                </Link>
            </SignedOut>
            <SignedIn>
                <div className="flex items-center space-x-3">
                    <Link to="https://skilled-snapper-68.accounts.dev/user" className="py-2 px-4 font-medium text-white bg-green-500 rounded-full hover:bg-green-400 transition duration-300" type="button">
                        <CgProfile />
                    </Link>
                </div>
            </SignedIn>
        </div>
    );
};

const MobileMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <MobileNavLink to="#" label="Booking" />
            <MobileNavLink to="#" label="Facilities" />
            <MobileNavLink to="/about" label="About Us" />
            <MobileNavLink to="#" label="Location" />
            <MobileNavLink to="#" label="Contact" />
            <AuthButtons />
        </div>
    );
};

const MobileNavLink: React.FC<{ to: string, label: string }> = ({ to, label }) => {
    return (
        <Link to={to} className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-200">{label}</Link>
    );
};

export default Navbar;
