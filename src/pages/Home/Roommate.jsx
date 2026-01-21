import React, { use } from 'react';
import RoommateCard from '../../Components/RoommateCard/RoommateCard';

const Roommate = ({roommatePromise}) => {

    const roommates = use(roommatePromise);

    return (
        <div className='p-6'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                {
                    roommates.map(roommate => <RoommateCard key={roommate._id} roommate={roommate}></RoommateCard>)
                }
            </div>
        </div>
    );
};

export default Roommate;