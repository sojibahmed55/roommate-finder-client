import React, { Suspense, useEffect, useState } from 'react';
import Roommate from './Roommate';
import Spinner from '../../Components/Spinner/Spinner';
import RoommateSection from '../Shared/RoommateSection';
import HowRoommateWorks from '../Shared/HowRoommateWorks';
import LifestyleMatch from '../Shared/LifestyleMatch';
import Slider from '../Shared/Slider';


const Home = () => {

  const [roommates, setRoommates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/featured-roommates")
      .then(res => res.json())
      .then(data => {
        setRoommates(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Slider />
      <Roommate roommates={roommates} />
      <RoommateSection />
      <HowRoommateWorks />
      <LifestyleMatch />
    </div>
  );
};

export default Home;
