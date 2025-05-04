import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-3'>Login With</h1>
            <button className='btn btn-secondary btn-outline  font-bold w-full'>
                <FcGoogle size={24} /> Login with Google</button>
            <button className='btn btn-outline btn-primary font-bold w-full my-2'> <FaGithub size={24} /> Login with github</button>
        </div>
    );
};

export default SocialLogin;