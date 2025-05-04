import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUS = () => {
    return (
        <div>
            <h1 className='font-bold my-4'>Find Us On</h1>

            <div className="join join-vertical w-full">
                <button className="btn bg-base-100 justify-start gap-3 join-item"><FaFacebook size={18}></FaFacebook> Facebook</button>
                <button className="btn bg-base-100 justify-start gap-3 join-item"><FaTwitter size={18}></FaTwitter>Twitter</button>
                <button className="btn bg-base-100 justify-start gap-3 join-item"><FaInstagram size={18}></FaInstagram>Instagram</button>
            </div>

        </div>
    );
};

export default FindUS;