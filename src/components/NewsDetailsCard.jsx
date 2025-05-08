import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {

    // console.log(news);

    return (
        <div className='space-y-5'>
            <img className='w-full' src={news.image_url} alt="" />
            <h1 className='text-2xl font-bold'>{news.title}</h1>
            <p>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn bg-red-600 text-white'>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;