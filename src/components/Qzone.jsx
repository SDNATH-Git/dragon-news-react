import React from 'react';
import swimimg from "../assets/swimming.png";
import classimg from "../assets/class.png";
import playimg from "../assets/playground.png";

const Qzone = () => {
    return (
        <div className='bg-base-300 p-4 my-3'>
            <h1 className='font-bold my-4'> Q-zone</h1>
            <div className='space-y-4'>
                <img src={swimimg} alt="" />
                <img src={classimg} alt="" />
                <img src={playimg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;