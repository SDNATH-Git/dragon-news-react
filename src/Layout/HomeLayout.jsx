import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatesNews from '../components/LatesNews';
import Nabvar from '../components/Nabvar';
import LeftLayout from '../components/HomeLayout/LeftLayout';
import RightLayout from '../components/HomeLayout/RightLayout';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatesNews></LatesNews>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Nabvar></Nabvar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto  grid grid-cols-12 my-6 gap-4'>

                <aside className='col-span-3'>
                    <LeftLayout></LeftLayout>
                </aside>

                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3'>
                    <RightLayout></RightLayout>
                </aside>

            </main>
        </div>
    );
};

export default HomeLayout;