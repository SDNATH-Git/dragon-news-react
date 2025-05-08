import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then(res => res.json());

const Category = () => {
    const categorys = use(categoryPromise);

    // console.log(categorys);
    return (
        <div>
            <h1 className='font-bold'>All Category ({categorys.length})</h1>
            <div className='grid grid-cols-1 gap-2 mt-3'>
                {
                    categorys.map((category, index) =>
                        <NavLink key={index} className="btn bg-white border-0 hover:bg-base-300 font-bold text-accent" to={`/category/${category.id}`}>
                            {category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;