import React, { useEffect, useState } from 'react';
import Header from './Header';
import RightLayout from './HomeLayout/RightLayout';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    // console.log(data, id, news);

    useEffect(() => {
        const newsDetails = data.find(details => details.id === id);
        setNews(newsDetails);
    }, [])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 mt-4 mb-32 gap-8'>
                <section className='col-span-9'>
                    <h1 className='font-bold mb-3'>News Details</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightLayout></RightLayout>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;