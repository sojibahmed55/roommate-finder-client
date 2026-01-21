// import React from 'react';
// import { useLoaderData } from 'react-router';

// const Details = () => {
//     const roommate = useLoaderData();

//     console.log(roommate);
//     return (
//         <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-gradient-to-r from-teal-200 via-neutral-300 to-sky-100 rounded-3xl shadow-2xl border border-indigo-200 mt-10 sm:mt-12">
//       <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-6 tracking-wide drop-shadow-md">
//         {roommate.title}
//       </h2>

//       <div className="space-y-4 text-gray-800 font-medium text-base sm:text-lg leading-relaxed">
//         <p>
//           <span className="font-semibold text-indigo-700">📍 Location:</span>{" "}
//           <span className="text-indigo-900">{roommate.location}</span>
//         </p>
//         <p>
//           <span className="font-semibold text-green-700">💰 Rent:</span>{" "}
//           <span className="text-green-900">${roommate.rent}</span>
//         </p>
//         <p>
//           <span className="font-semibold text-purple-700">📞 Contact:</span>{" "}
//           <span className="text-purple-900">{roommate.contactInfo}</span>
//         </p>
//         <p>
//           <span
//             className={`inline-block px-3 py-1 rounded-full font-semibold ${
//               roommate.availability.toLowerCase() === "available"
//                 ? "bg-green-200 text-green-900 shadow-md"
//                 : "bg-red-200 text-red-900 shadow-md"
//             }`}
//           >
//             {roommate.availability}
//           </span>
//         </p>
//         <p>
//           <span className="font-semibold text-indigo-700">📝 Description:</span>
//           <br />
//           <span className="text-indigo-900 whitespace-pre-line">{roommate.description}</span>
//         </p>
//       </div>

//       <button
//         // onClick={() => navigate("/browse-listings")}
//         className="mt-8 sm:mt-10 mb-6 sm:mb-0 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md font-semibold text-sm sm:text-base w-full sm:w-auto block sm:inline-block"
//       >
//         ← Back
//       </button>
//     </div>
//     );
// };

// export default Details;


import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Spinner from "../Spinner/Spinner";
// import Spinner from "../components/Spinner/Spinner";

const Details = () => {
  const loaderData = useLoaderData(); // এই data আসে যখন loader complete হয়
  const [roommate, setRoommate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (loaderData) {
      
      setTimeout(() => {
        setRoommate(loaderData);
      }, 300); 
    }
  }, [loaderData]);

  if (!roommate) {
    // যতক্ষণ data load হচ্ছে spinner দেখাবে
    return <Spinner />;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-gradient-to-r from-teal-200 via-neutral-300 to-sky-100 rounded-3xl shadow-2xl border border-indigo-200 mt-10 sm:mt-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-6 tracking-wide drop-shadow-md">
        <img src={roommate.photoUrl} alt="" />
        {roommate.title}
      </h2>

      <div className="space-y-4 text-gray-800 font-medium text-base sm:text-lg leading-relaxed">
        <p>
          <span className="font-semibold text-indigo-700">📍 Location:</span>{" "}
          <span className="text-indigo-900">{roommate.location}</span>
        </p>
        <p>
          <span className="font-semibold text-green-700">💰 Rent:</span>{" "}
          <span className="text-green-900">${roommate.rent}</span>
        </p>
        <p>
          <span className="font-semibold text-purple-700">📞 Contact:</span>{" "}
          <span className="text-purple-900">{roommate.contactInfo}</span>
        </p>
        <p>
          <span
            className={`inline-block px-3 py-1 rounded-full font-semibold ${
              roommate.availability.toLowerCase() === "available"
                ? "bg-green-200 text-green-900 shadow-md"
                : "bg-red-200 text-red-900 shadow-md"
            }`}
          >
            {roommate.availability}
          </span>
        </p>
        <p>
          <span className="font-semibold text-indigo-700">📝 Description:</span>
          <br />
          <span className="text-indigo-900 whitespace-pre-line">{roommate.description}</span>
        </p>
      </div>
      

      <button
        onClick={() => navigate("/browse-listing")}
        className="mt-8 sm:mt-10 mb-6 sm:mb-0 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md font-semibold text-sm sm:text-base w-full sm:w-auto block sm:inline-block"
      >
        ← Back
      </button>

      {/* <button
        className="mt-8 sm:mt-10 mb-6 sm:mb-0 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md font-semibold text-sm sm:text-base w-full sm:w-auto block sm:inline-block"
      >
        ← Back
      </button> */}
    </div>
  );
};

export default Details;

