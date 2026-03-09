// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import Spinner from '../Spinner/Spinner';
// import { FaCheckCircle, FaHome, FaMapMarkerAlt, FaMoneyBillWave, FaTimesCircle } from 'react-icons/fa';
// import { BetweenVerticalStart } from 'lucide-react';

// const BrowseListing = () => {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/roommate")
//       .then((res) => {
//         setListings(res.data);
//       })
//       .catch((err) => {
//         console.error("Error loading listings", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (

//         <Spinner />

//     );
//   }

//   return (
//     // all the Best
//     <div className="max-w-7xl mx-auto px-6 py-20">
//   <h2 className="text-4xl font-semibold text-center mb-16 tracking-tight text-neutral-900 dark:text-white">
//     Browse Roommates
//   </h2>

//   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
//     {listings.map((item) => {

//       const isAvailable =
//         item.availability?.toLowerCase() === "available";

//       return (
//         <div
//           key={item._id}
//           className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden
//                      border border-neutral-200 dark:border-neutral-800
//                      shadow-sm hover:shadow-xl
//                      transition-all duration-500"
//         >
//           {/* Image */}
//           <div className="relative h-64 overflow-hidden">
//             <img
//               src={item.photoUrl}
//               alt={item.title}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

//             {/* <span
//               className={`absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md
//               ${
//                 isAvailable
//                   ? "bg-white/90 text-green-600"
//                   : "bg-white/90 text-red-600"
//               }`}
//             >
//               {isAvailable ? "Available" : "Not Available"}
//             </span> */}

//           </div>

//           {/* Content */}
//           <div className="p-7 space-y-5">
//             <h3 className="text-xl font-semibold text-neutral-900 dark:text-white line-clamp-1">
//               {item.title}
//             </h3>

//             <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
//               <div className="flex items-center gap-2">
//                 <FaMapMarkerAlt />
//                 {item.location}
//               </div>

// <span
//                       className={`flex items-center gap-2 px-3 py-2 rounded-full text-shadow-xs font-medium ${isAvailable
//                           ? "bg-green-50 text-green-600 dark:bg-green-50 dark:text-green-600 px-2 py-2"
//                           : "bg-red-50 text-red-600 dark:bg-red-900 dark:text-red-200"
//                         }`}
//                     >
//                       {isAvailable ? <FaCheckCircle className='text-xl' /> : <FaTimesCircle className='text-xl' />}
//                       {isAvailable ? "Available" : "Not Available"}
//                     </span>
//               {/* <div className="flex items-center gap-2">
//                 <FaHome />
//                 {item.roomType}
//               </div> */}
//               {/* <div className="flex items-center gap-2">
//                 <FaHome />
//                 {item.roomType}
//               </div> */}
//             </div>

//             <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
//               <div className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-white">
//                 <FaMoneyBillWave className="text-[#8f7848]" />
//                 ${item.rent}
//               </div>

//               <Link
//                 to={`/roommate-details/${item._id}`}
//                 className="px-5 py-2 text-sm font-medium rounded-lg
//                            border border-[#e3d8c2] bg-transparent
//                            text-[#dbc187] dark:border-white/70 dark:text-white
//                            hover:bg-[#e3d8c2] hover:text-black
//                            hover:border-[#e3d8c2] transition-colors"
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>
// best
// Best
// <div className="max-w-7xl mx-auto px-6 py-20">
//   <h2 className="text-4xl font-semibold text-center mb-16 tracking-tight text-neutral-900 dark:text-white">
//     Browse Roommates
//   </h2>

//   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
//     {listings.map((item) => {
//       const {
//         _id,
//         title,
//         rent,
//         location,
//         roomType,
//         photoUrl,
//         availability,
//       } = item;

//       const isAvailable =
//         availability?.toLowerCase() === "available";

//       return (
//         <div
//           key={_id}
//           className="group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden
//                      border border-neutral-200 dark:border-neutral-800
//                      shadow-sm hover:shadow-xl
//                      transition-all duration-500"
//         >
//           {/* Image */}
//           <div className="relative h-64 overflow-hidden">
//             <img
//               src={photoUrl}
//               alt={title}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

//             <span
//               className={`absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md
//               ${
//                 isAvailable
//                   ? "bg-white/90 text-green-600"
//                   : "bg-white/90 text-red-600"
//               }`}
//             >
//               {isAvailable ? "Available" : "Unavailable"}
//             </span>
//           </div>

//           {/* Content */}
//           <div className="p-7 space-y-5">
//             <h3 className="text-xl font-semibold text-neutral-900 dark:text-white line-clamp-1">
//               {title}
//             </h3>

//             <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
//               <div className="flex items-center gap-2">
//                 <FaMapMarkerAlt />
//                 {location}
//               </div>

//               <div className="flex items-center gap-2">
//                 <FaHome />
//                 {roomType}
//               </div>
//             </div>

//             <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
//               <div className="flex items-center gap-2 text-lg font-semibold text-neutral-900 dark:text-white">
//                 <FaMoneyBillWave className='text-[#8f7848] dark:text-[#8f7848]' />
//                 ${rent}
//               </div>

//               <Link
//                 to={`/roommate-details/${_id}`}
//                 className="px-5 py-2 text-sm font-medium rounded-lg
//                            border border-[#e3d8c2] bg-transparent text-[#dbc187] dark:border-white/70 dark:text-white hover:bg-[#e3d8c2] hover:text-black hover:border-[#e3d8c2] transition-colors"
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>
// {/* <div className="max-w-6xl mx-auto px-4 py-16">

//   <h2 className="text-3xl sm:text-4xl font-semibold  mb-12
//                  text-[#c9b27c] tracking-wide">
//     All Roommates
//   </h2>

//   {listings.length === 0 ? (
//     <p className="text-center text-lg text-[#b6b6b6] dark:text-gray-400">
//       No roommates found.
//     </p>
//   ) : (

//     <div className="
//         relative
//         rounded-3xl

//         dark:border-[#2a2a2a]
//         bg-white/70
//         dark:bg-[#121212]/70
//         backdrop-blur-xl
//         shadow-[0_25px_70px_rgba(201,178,124,0.15)]
//         dark:shadow-[0_35px_80px_rgba(0,0,0,0.85)]
//         transition-all duration-500
//         overflow-hidden
//     ">

//       {/* Desktop View */}
//       <div className="hidden md:block overflow-x-auto">
//         <table className="w-full text-left">

//           <thead className="
//               text-xs uppercase tracking-widest
//               text-[#8f7848] dark:text-[#d6c08a]
//               border-b border-[#eadfc9] dark:border-[#2a2a2a]
//           ">
//             <tr>
//               <th className="px-8 py-6 font-medium">Title</th>
//               <th className="px-8 py-6 font-medium">Location</th>
//               <th className="px-8 py-6 font-medium">Rent</th>
//               <th className="px-8 py-6 font-medium">Availability</th>
//               <th className="px-8 py-6 text-center font-medium">Action</th>
//             </tr>
//           </thead>

//           <tbody>

//             {listings.map((roommate) => (
//               <tr
//                 key={roommate._id}
//                 className="
//                   border-b border-[#f1e7d2]
//                   dark:border-[#1f1f1f]
//                   hover:bg-[#faf6ed]
//                   dark:hover:bg-[#1b1b1b]
//                   transition-all duration-300
//                 "
//               >

//                 <td className="px-8 py-6 font-medium text-[#1a1a1a] dark:text-gray-200">
//                   {roommate.title}
//                 </td>

//                 <td className="px-8 py-6 text-[#555] dark:text-gray-400">
//                   {roommate.location}
//                 </td>

//                 <td className="px-8 py-6 font-semibold text-[#8f7848] dark:text-[#d6c08a]">
//                   ${roommate.rent}
//                 </td>

//                 <td className="px-8 py-6">
//                   <span
//                     className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide
//                       ${
//                         roommate.availability?.toLowerCase() === "available"
//                           ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
//                           : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"
//                       }`}
//                   >
//                     {roommate.availability}
//                   </span>
//                 </td>

//                 <td className="px-8 py-6 text-center">
//                   <Link
//                     to={`/roommate-details/${roommate._id}`}
//                     className="
//                       inline-flex items-center justify-center
//                       px-6 py-2 rounded-sm text-sm font-medium
//                       border border-[#c9b27c]
//                       text-[#8f7848]
//                       dark:text-[#d6c08a]
//                       dark:border-[#d6c08a]
//                       hover:bg-[#c9b27c]
//                       hover:text-black
//                       dark:hover:bg-[#d6c08a]
//                       dark:hover:text-black
//                       transition-all duration-300
//                     "
//                   >
//                     See More
//                   </Link>
//                 </td>

//               </tr>
//             ))}

//           </tbody>
//         </table>
//       </div>

//       {/* Mobile View */}
//       <div className="md:hidden p-6 space-y-6">

//         {listings.map((roommate) => (
//           <div
//             key={roommate._id}
//             className="
//               p-6 rounded-2xl
//               bg-white/80
//               dark:bg-[#181818]/80
//               backdrop-blur-lg
//               border border-[#eadfc9]
//               dark:border-[#2a2a2a]
//               shadow-sm
//               transition-all duration-300
//             "
//           >
//             <h3 className="font-semibold text-[#1a1a1a] dark:text-white">
//               {roommate.title}
//             </h3>

//             <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//               {roommate.location}
//             </p>

//             <p className="text-sm font-semibold text-[#8f7848] dark:text-[#d6c08a] mt-3">
//               ${roommate.rent}
//             </p>

//             <div className="flex justify-between items-center mt-5">
//               <span
//                 className={`px-3 py-1 rounded-full text-xs font-semibold
//                   ${
//                     roommate.availability?.toLowerCase() === "available"
//                       ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
//                       : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"
//                   }`}
//               >
//                 {roommate.availability}
//               </span>

//               <Link
//                 to={`/roommate-details/${roommate._id}`}
//                 className="
//                   px-4 py-1.5 rounded-xs text-xs
//                   border border-[#c9b27c]
//                   text-[#8f7848]
//                   dark:text-[#d6c08a]
//                   dark:border-[#d6c08a]
//                   hover:bg-[#c9b27c]
//                   hover:text-black
//                   dark:hover:bg-[#d6c08a]
//                   dark:hover:text-black
//                   transition-all duration-300
//                 "
//               >
//                 See More
//               </Link>
//             </div>
//           </div>
//         ))}

//       </div>

//     </div>
//   )}
// </div> */}

//   );
// };

// export default BrowseListing;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import Spinner from '../Spinner/Spinner';
// import {
//   FaCheckCircle,
//   FaHome,
//   FaMapMarkerAlt,
//   FaMoneyBillWave,
//   FaTimesCircle
// } from 'react-icons/fa';

// const BrowseListing = () => {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/roommate")
//       .then((res) => {
//         setListings(res.data);
//       })
//       .catch((err) => {
//         console.error("Error loading listings", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <div className="max-w-[1500px] mx-auto px-6 py-20">
//       <h2 className="text-4xl font-semibold text-center mb-16 tracking-tight text-neutral-900 dark:text-white">
//         Browse Roommates
//       </h2>

//       {/* 3 Column Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//         {listings.map((item) => {

//           const isAvailable =
//             item.availability?.toLowerCase() === "available";

//           return (
//             <div
//               key={item._id}
//               className="w-full mx-auto max-w-[570px] bg-[#fdfbf7] dark:bg-[#1a1a1a] dark:border-[#333] rounded-[28px] shadow-[0_28px_80px_rgba(143,120,72,0.25)] border border-[#e2d6bf] p-8"
//             >

//               {/* Image */}
//               <img
//                 className="rounded-xl h-60 w-full object-cover shadow-md"
//                 src={item.photoUrl}
//                 alt={item.title}
//               />

//               {/* Title */}
//               <h5 className="mt-6 mb-3 text-2xl font-semibold tracking-tight text-[#161616] dark:text-white line-clamp-1">
//                 {item.title}
//               </h5>

//               {/* Rent + Availability */}
//               <div className="flex justify-between items-center pb-6 text-sm text-[#4b4b4b] dark:text-gray-300">

//                 <p className="flex items-center gap-2 font-medium text-shadow-xs">
//                   <FaMoneyBillWave className="text-[#8f7848] dark:text-[#8f7848] text-xl" />
//                   ${item.rent}
//                 </p>

//                 <span
//                   className={`flex items-center gap-2 px-3 py-2 rounded-full text-shadow-xs font-medium ${
//                     isAvailable
//                       ? "bg-green-50 text-green-600 dark:bg-green-50 dark:text-green-600 px-2 py-2"
//                       : "bg-red-50 text-red-600 dark:bg-red-50 dark:text-red-600"
//                   }`}
//                 >
//                   {isAvailable ? (
//                     <FaCheckCircle className='text-xl' />
//                   ) : (
//                     <FaTimesCircle className='text-xl' />
//                   )}
//                   {isAvailable ? "Available" : "Not Available"}
//                 </span>
//               </div>

//               {/* Location + Room Type */}
//               <div className="flex justify-between text-sm text-[#4b4b4b] dark:text-gray-300">

//                 <p className="flex items-center gap-2 line-clamp-1 font-medium">
//                   <FaMapMarkerAlt className="text-[#8f7848] dark:text-[#8f7848] text-xl" />
//                   {item.location}
//                 </p>

//                 <p className="flex items-center gap-2 line-clamp-1 font-medium ">
//                   <FaHome className="text-[#8f7848] text-xl dark:text-[#8f7848]" />
//                   {item.lifestylePreferences}
//                 </p>
//               </div>

//               {/* Button */}
//               <Link
//                 to={`/roommate-details/${item._id}`}
//                 className="relative inline-block px-6 py-3 font-semibold group mt-6"
//               >
//                 <span
//                   className="absolute inset-0 w-full h-full
//                              transition-all duration-200 ease-out
//                              transform translate-x-1 translate-y-1
//                              bg-[#8f7848]
//                              group-hover:translate-x-0
//                              group-hover:translate-y-0
//                              rounded-md"
//                 ></span>

//                 <span
//                   className="absolute inset-0 w-full h-full
//                              bg-[#e3d8c2]
//                              border border-[#d4c6a6]
//                              rounded-md
//                              group-hover:bg-[#d8c9ab]
//                              transition-colors duration-200"
//                 ></span>

//                 <span className="relative text-[#161616] tracking-wide">
//                   See More
//                 </span>
//               </Link>

//             </div>
//           );
//         })}

//       </div>
//     </div>
//   );
// };

// export default BrowseListing;

import React, { useEffect, useState } from "react";
// import { useLoaderData } from 'react-router';
import AllPostCard from "../../pages/AllPostCard/AllPostCard";
import Spinner from "../Spinner/Spinner";
import axios from "axios";

const BrowseListing = () => {
  // const allPost = useLoaderData();
  // const [listings, setListings] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/roommate")
      .then((res) => {
        setAllPost(res.data);
      })
      .catch((err) => {
        console.error("Error loading listings", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Spinner />;
  }

  // const [allPost, setAllPost] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/roommate")
  //     .then(res => res.json())
  //     .then(data => {
  //       setAllPost(data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       setLoading(false);
  //     });
  // }, []);
  //  if (loading) {
  //   return <Spinner></Spinner>
  //  }
  return (
    <div className="max-w-[1500px] mx-auto px-4 py-16">
      <div className="text-center mb-14 space-y-5">
        <h1
          className="
          relative
          inline-block
          text-4xl sm:text-5xl lg:text-6xl
          font-bold
          tracking-tight
          text-[#1f1a14]
          dark:text-white
        "
        >
          All
          <span className="text-[#e3d8c2] drop-shadow-[0_8px_25px_rgba(227,216,194,0.6)]">
            {""} Rommate
          </span>
          <span
            className="
            absolute
            -bottom-3
            left-1/2
            -translate-x-1/2
            w-32
            h-[3px]
            bg-[#e3d8c2]
            rounded-full
            shadow-[0_6px_20px_rgba(227,216,194,0.7)]
          "
          ></span>
        </h1>
      </div>
      {allPost.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No listings available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPost.map((post) => (
            <AllPostCard key={post._id} post={post} />
          ))}
        </div>
      )}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPost.map((post) => (
          <AllPostCard key={post._id} post={post}></AllPostCard>
        ))}
      </div> */}
    </div>
  );
};

export default BrowseListing;
