import React from 'react';
import { Commet } from 'react-loading-indicators';

const Spinner = () => {
    return (
    <div className='flex justify-center items-center h-[80vh]'>
        <Commet color="#e3d8c2" size="medium" text="" textColor="" />
    </div>
    );
};

export default Spinner;