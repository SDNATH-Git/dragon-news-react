import React from 'react';
import SocialLogin from './SocialLogin';
import FindUS from '../FindUS';
import Qzone from '../Qzone';

const RightLayout = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUS></FindUS>
            <Qzone></Qzone>
        </div>
    );
};

export default RightLayout;