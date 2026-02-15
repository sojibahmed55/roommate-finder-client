import React, { use } from 'react';
import RoommateCard from '../../Components/RoommateCard/RoommateCard';

const Roommate = ({roommatePromise}) => {

    const roommates = use(roommatePromise);

    return (
        // <div className='p-6'>
            
        //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
        //         {
        //             roommates.map(roommate => <RoommateCard key={roommate._id} roommate={roommate}></RoommateCard>)
        //         }
        //     </div>
        // </div>
        // <div className="max-w-[1500px] mx-auto px-4 py-10">
        //   <h1 className="text-7xl font-bold mb-8 text-center text-blue-800">
        //     Featured Roommates
        //   </h1>

          
        //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        //       {
        //             roommates.map(roommate => <RoommateCard key={roommate._id} roommate={roommate}></RoommateCard>)
        //         }
        //     </div>
            
    
        // </div>

        <div className="max-w-[1500px] mx-auto px-4 py-16">
  <div className="text-center mb-14 space-y-5">
    <h1 className="
      relative
      inline-block
      text-4xl sm:text-5xl lg:text-6xl
      font-bold
      tracking-tight
      text-[#1f1a14]
      dark:text-white
    ">
      Featured 
      <span className="text-[#e3d8c2] drop-shadow-[0_8px_25px_rgba(227,216,194,0.6)]">
        {" "}Roommates
      </span>

      {/* underline glow */}
      <span className="
        absolute
        -bottom-3
        left-1/2
        -translate-x-1/2
        w-32
        h-[3px]
        bg-[#e3d8c2]
        rounded-full
        shadow-[0_6px_20px_rgba(227,216,194,0.7)]
      "></span>
    </h1>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {roommates.map((roommate) => (
      <RoommateCard
        key={roommate._id}
        roommate={roommate}
      />
    ))}
  </div>

</div>

    );
};

export default Roommate;