import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const BrowseListing = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/roommate")
      .then((res) => setListings(res.data))
      .catch((err) => console.error("Error loading listings", err));
  }, []);

  return (
    // <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen bg-gray-50">
    //   <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
    //     All Roommates
    //   </h2>

    //   {listings.length === 0 ? (
    //     <p className="text-center text-lg text-gray-600">No roommates found.</p>
    //   ) : (
    //     <div className="overflow-x-auto shadow-md rounded-lg bg-white border border-gray-200">
    //       <table className="table-auto w-full text-left">
    //         <thead className="bg-gray-200 text-gray-700">
    //           <tr>
    //             <th className="px-6 py-4 text-sm font-semibold">Title</th>
    //             <th className="px-6 py-4 text-sm font-semibold">Location</th>
    //             <th className="px-6 py-4 text-sm font-semibold">Rent</th>
    //             <th className="px-6 py-4 text-sm font-semibold">Availability</th>
    //             <th className="px-6 py-4 text-sm font-semibold text-center">Action</th>
    //           </tr>
    //         </thead>

    //         <tbody>
    //           {listings.map((roommate) => (
    //             <tr
    //               key={roommate._id}
    //               className="hover:bg-gray-100 transition-colors duration-200"
    //             >
    //               <td className="px-6 py-4 text-black">{roommate.title}</td>
    //               <td className="px-6 py-4 text-black">{roommate.location}</td>
    //               <td className="px-6 py-4 text-black">৳ {roommate.rent}</td>

    //               {/* Availability Badge */}
    //               <td className="px-6 py-4 text-black">
    //                 <span
    //                   className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
    //                     roommate.availability?.toLowerCase() === "available"
    //                       ? "bg-green-100 text-green-800"
    //                       : "bg-red-100 text-red-800"
    //                   }`}
    //                 >
    //                   {roommate.availability}
    //                 </span>
    //               </td>

    //               <td className="px-6 py-4 text-center">
    //                 <Link
    //                   to={`/roommate-details/${roommate._id}`}
    //                   className="inline-block bg-gray-900 text-white px-4 py-2 text-sm rounded-full hover:bg-gray-700 transition duration-200"
    //                 >
    //                   See More
    //                 </Link>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   )}
    // </div>
    <div className="max-w-6xl mx-auto px-4 py-14 min-h-screen ">
      
  <h2 className="text-4xl font-semibold text-center mb-12 
                 text-[#c9b27c] tracking-wide">
    All Roommates
  </h2>

  {listings.length === 0 ? (
    <p className="text-center text-lg text-[#b6b6b6]">
      No roommates found.
    </p>
  ) : (
    <div
      className="
        overflow-x-auto
        rounded-3xl
        bg-[#fdfbf7]
        border border-[#e7dbc2]
        shadow-[0_30px_70px_rgba(201,178,124,0.18)]
      "
    >
      <table className="table-auto w-full text-left">
        <thead>
          <tr
            className="
              bg-gradient-to-r from-[#f3ead7] to-[#fdfbf7]
              text-[#8f7848]
              uppercase tracking-wider text-sm
              border-b border-[#e2d4b6]
            "
          >
            <th className="px-8 py-5 font-semibold">Title</th>
            <th className="px-8 py-5 font-semibold">Location</th>
            <th className="px-8 py-5 font-semibold">Rent</th>
            <th className="px-8 py-5 font-semibold">Availability</th>
            <th className="px-8 py-5 font-semibold text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {listings.map((roommate) => (
            <tr
              key={roommate._id}
              className="
                border-b border-[#f0e6cf]
                hover:bg-gradient-to-r
                hover:from-[#faf6ed]
                hover:to-[#ffffff]
                transition-all duration-300
              "
            >
              <td className="px-8 py-5 font-medium text-[#1b1b1b]">
                {roommate.title}
              </td>

              <td className="px-8 py-5 text-[#4a4a4a]">
                {roommate.location}
              </td>

              <td className="px-8 py-5 font-semibold text-[#8f7848]">
                ৳ {roommate.rent}
              </td>

              {/* Availability Badge */}
              <td className="px-8 py-5">
                <span
                  className={`inline-flex items-center px-4 py-1.5 
                    rounded-full text-xs font-semibold tracking-wide
                    border ${
                      roommate.availability?.toLowerCase() === "available"
                        ? "bg-[#e8f4ec] text-[#1f7a4a] border-[#b7e0c7]"
                        : "bg-[#fbeaea] text-[#8a1f1f] border-[#f1bcbc]"
                    }`}
                >
                  {roommate.availability}
                </span>
              </td>

              <td className="px-8 py-5 text-center">
                <Link
                  to={`/roommate-details/${roommate._id}`}
                  className="
                    inline-block
                    px-6 py-2
                    rounded-full
                    text-sm font-medium
                    text-[#8f7848]
                    border border-[#c9b27c]
                    hover:bg-[#c9b27c]
                    hover:text-[#111]
                    transition-all
                    shadow-sm
                  "
                >
                  See More
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

  );
};

export default BrowseListing;



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router";

// const BrowseListing = () => {
//   const [roommates, setRoommates] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/roommate")
//       .then((res) => setRoommates(res.data))
//       .catch((err) => console.error("Error loading listings", err));
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen bg-gray-50">
//       <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
//         All Roommates
//       </h2>

//       {roommates.length === 0 ? (
//         <p className="text-center text-lg text-gray-600">No roommates found.</p>
//       ) : (
//         <div className="overflow-x-auto shadow-md rounded-lg bg-white border border-gray-200">
//           <table className="table-auto w-full text-left">
//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="px-6 py-4 text-sm font-semibold">Title</th>
//                 <th className="px-6 py-4 text-sm font-semibold">Location</th>
//                 <th className="px-6 py-4 text-sm font-semibold">Rent</th>
//                 <th className="px-6 py-4 text-sm font-semibold">Availability</th>
//                 <th className="px-6 py-4 text-sm font-semibold text-center">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {roommates.map((roommate) => (
//                 <tr
//                   key={roommate._id}
//                   className="hover:bg-gray-100 transition-colors duration-200"
//                 >
//                   <td className="px-6 py-4 text-black">{roommate.title}</td>
//                   <td className="px-6 py-4 text-black">{roommate.location}</td>
//                   <td className="px-6 py-4 text-black">৳ {roommate.rent}</td>

//                   {/* Availability Badge */}
//                   <td className="px-6 py-4 text-black">
//                     <span
//                       className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
//                         roommate.availability?.toLowerCase() === "available"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {roommate.availability}
//                     </span>
//                   </td>

//                   <td className="px-6 py-4 text-center">
//                     <Link
//                       to={`/all-details/${roommate._id}`}
//                       className="inline-block bg-gray-900 text-white px-4 py-2 text-sm rounded-full hover:bg-gray-700 transition duration-200"
//                     >
//                       See More
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BrowseListing;

