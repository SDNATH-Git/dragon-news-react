import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id, data);

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
        }
        else if (id == "1") {
            const filterNews = data.filter((news) => news.others.is_today_pick === true);
            setCategoryNews(filterNews);
        }
        else {
            const filterNews = data.filter((news) => Number(news.category_id) === Number(id));
            // console.log(filterNews);
            setCategoryNews(filterNews);
        }
    }, [data, id])

    return (
        <div>
            <h1 className='font-bold mb-3'>Toatal <span className='text-red-500'>{categoryNews.length}</span> News Found</h1>
            <div className='grid grid-cols-1 gap-4'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }

            </div>
        </div>
    );
};

export default CategoryNews;