import React, { Suspense } from 'react';
import Roommate from './Roommate';
import Spinner from '../../Components/Spinner/Spinner';
import RoommateSection from '../Shared/RoommateSection';
// import { useLoaderData } from 'react-router';
// import RommateCard from '../../Components/RoommateCard/RommateCard';

const Home = () => {

    // const rommateData = useLoaderData();
    // console.log(rommateData);
    const roommatePromise = fetch("http://localhost:5000/featured-roommates").then(res => res.json());

    return (
        <div>

            {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    rommateData.map(roommate => <RommateCard key={roommate._id} roommate={roommate}></RommateCard>)
                }
            </div> */}
            <Suspense fallback={<Spinner></Spinner>}>
                <Roommate roommatePromise={roommatePromise}></Roommate>
            </Suspense>

            <div>
                <RoommateSection></RoommateSection>
            </div>
        </div>
    );
};

export default Home;