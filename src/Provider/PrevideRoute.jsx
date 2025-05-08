import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrevideRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    // console.log(user, loading);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <div className=' py-40 flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>
    }

    if (user && user.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/Login"></Navigate>;



};

export default PrevideRoute;