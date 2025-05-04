import React from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3 my-4'>
            <p className='text-white bg-secondary px-3 py-2 font-bold'>Lates</p>
            <Marquee className='' pauseOnHover={true}>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis laborum, delectus libero architecto neque magni in eos doloribus a dolore. Neque at repellendus voluptas doloremque fuga ipsam placeat perferendis.</p>
            </Marquee>

        </div>
    );
};

export default LatesNews;