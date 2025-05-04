import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png";

const Nabvar = () => {
    return (
        <div className='flex items-center justify-between py-2'>
            <div className=""></div>
            <div className="flex gap-4 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Carrer">Carrer</NavLink>
            </div>
            <div className="flex items-center gap-3">
                <img src={user} alt="" />
                <button className='btn btn-primary px-5 font-bold'>Login</button>
            </div>

        </div>
    );
};

export default Nabvar;