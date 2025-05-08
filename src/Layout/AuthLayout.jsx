import React from 'react';
import Nabvar from '../components/Nabvar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
            <header className='w-11/12 mx-auto py-8'>
                <Nabvar></Nabvar>
            </header>

            <main className='w-11/12 mx-auto py-8 '>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;