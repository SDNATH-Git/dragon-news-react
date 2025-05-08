import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png";
import { AuthContext } from '../Provider/AuthProvider';

const Nabvar = () => {
    const { user, Logout } = use(AuthContext);
    const handleLogOut = () => {
        // console.log("Tri to logout");
        Logout().then(() => {
            // Sign-out successful.
            alert('Sign-out successful');
        }).catch((error) => {
            // An error happened.
            alert(error);
        });
    }

    return (
        <div className='flex items-center justify-between py-2'>
            <div className="">{user && user.email}</div>
            <div className="flex gap-4 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Carrer">Carrer</NavLink>
            </div>
            <div className="flex items-center gap-3">
                <img className='rounded-full w-15 h-15'
                    src={`${user ? user.photoURL : userIcon}`} alt="" />
                {user ? <button onClick={handleLogOut} className='btn btn-primary px-5 font-bold'>LogOut</button> :
                    <Link to="/auth/Login" className='btn btn-primary px-5 font-bold'>Login</Link>}

            </div>

        </div>
    );
};

export default Nabvar;