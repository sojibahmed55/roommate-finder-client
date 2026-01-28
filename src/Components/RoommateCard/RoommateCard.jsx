// import React from 'react';
// import { Link } from 'react-router';

// const RoommateCard = ({ roommate }) => {

//     const { _id, title, roomType, rent, location, lifestylePreferences, description, contactInfo, availability} = roommate;

//     return (
//         <div className="card w-96 bg-base-100 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 rounded-xl">

//       {/* Image */}
//       <figure className="h-52 w-full overflow-hidden rounded-t-xl">
//         <img
//           src="https://images.unsplash.com/photo-1600585154353-e1563ac2d3b0?auto=format&fit=crop&w=800&q=60"
//           alt="Room"
//           className="w-full h-full object-cover"
//         />
//       </figure>

//       {/* Body */}
//       <div className="card-body space-y-2">

//         {/* Title */}
//         <h2 className="card-title text-lg font-semibold">
//           {title}
//           <div className="badge badge-primary">NEW</div>
//         </h2>

//         {/* Short Description */}
//         <p className="text-sm text-gray-600">
//           {description?.slice(0, 70)}...
//         </p>

//         {/* Badges */}
//         <div className="flex flex-wrap gap-2 text-sm mt-1">
//           <div className="badge badge-outline">🏠 {roomType}</div>
//           <div className="badge badge-outline">📍 {location}</div>
//           {lifestylePreferences && (
//             <div className="badge badge-outline">✨ {lifestylePreferences}</div>
//           )}
//         </div>

//         {/* Rent + Availability */}
//         <div className="flex justify-between items-center mt-2">
//           <p className="text-purple-600 font-bold text-lg">৳ {rent}</p>
//           <div className={`badge px-3 py-2 text-white ${
//             availability ? "bg-green-500" : "bg-red-500"
//           }`}>
//             {availability ? "Available" : "Not available"}
//           </div>
//         </div>

//         {/* Contact Info */}
//         <p className="text-sm text-gray-700 mt-1">
//           📞 Contact: <span className="font-semibold">{contactInfo}</span>
//         </p>
//         {/* See More Button */}
//         <div className="card-actions mt-3">
//           <Link to={`/roommate-details/${_id}`} className="btn btn-primary w-full">
//             See More
//           </Link>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default RoommateCard;


import React from 'react';
import { FaCheckCircle, FaHome, FaMapMarkerAlt, FaMoneyBillWave, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const RoommateCard = ({ roommate }) => {
  const {
    _id,
    title,
    roomType,
    rent,
    photoUrl,
    location,
    lifestylePreferences,
    description,
    contactInfo,
    availability,
  } = roommate;

  
  const isAvailable =
    typeof availability === 'boolean'
      ? availability
      : availability === 'Available';

  return (
    <div className="w-full mx-auto max-w-[570px] bg-[#fdfbf7] rounded-[28px] shadow-[0_28px_80px_rgba(143,120,72,0.25)] border border-[#e2d6bf] p-8">

      {/* Image */}
      <img
        className="rounded-xl h-60 w-full object-cover shadow-md"
        src={photoUrl}
        alt={title}
      />

      {/* Title */}
      <h5 className="mt-6 mb-3 text-2xl font-semibold tracking-tight text-[#161616] line-clamp-1">
        {title}
      </h5>

      {/* Rent + Availability */}
      <div className="flex justify-between items-center pb-6 text-sm text-[#4b4b4b]">

        <p className="flex items-center gap-2 font-medium text-shadow-xs">
          <FaMoneyBillWave className="text-[#8f7848] text-xl" />
          ${rent}
        </p>

        <span
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-shadow-xs font-medium ${isAvailable
              ? "bg-green-50 text-green-600 px-2 py-2"
              : "bg-red-50 text-red-600"
            }`}
        >
          {isAvailable ? <FaCheckCircle className='text-xl' /> : <FaTimesCircle className='text-xl' />}
          {isAvailable ? "Available" : "Not Available"}
        </span>
      </div>

      {/* Location + Room Type */}
      <div className="flex justify-between text-sm text-[#4b4b4b]">

        <p className="flex items-center gap-2 line-clamp-1 font-medium">
          <FaMapMarkerAlt className="text-[#8f7848] text-xl" />
          {location}
        </p>

        <p className="flex items-center gap-2 line-clamp-1 font-medium">
          <FaHome className="text-[#8f7848] text-xl" />
          {roomType}
        </p>
      </div>

      {/* Button */}
      <Link
        to={`/roommate-details/${_id}`}
        className="relative inline-block px-6 py-3 font-semibold group mt-6"
      >
        <span
          className="
      absolute inset-0 w-full h-full
      transition-all duration-200 ease-out
      transform translate-x-1 translate-y-1
      bg-[#8f7848]
      group-hover:translate-x-0
      group-hover:translate-y-0
      rounded-full
    "
        ></span>
        <span
          className="
      absolute inset-0 w-full h-full
      bg-[#e3d8c2]
      border border-[#d4c6a6]
      rounded-full
      group-hover:bg-[#d8c9ab]
      transition-colors duration-200
    "
        ></span>
        <span
          className="
      relative
      text-[#161616]
      tracking-wide
    "
        >
          See More
        </span>
      </Link>

      {/* <Link
  to={`/roommate-details/${_id}`}
  className="
    mt-6 inline-block
    px-7 py-3
    rounded-full
    bg-[#e3d8c2]
    text-[#161616]
    
  "
>
  See More
</Link> */}
      {/* <Link
        to={`/roommate-details/${_id}`}
        className="
          mt-6 inline-flex items-center justify-center gap-2
          tracking-[0.3em] text-[#161616]
          bg-[#e3d8c2]
          hover:bg-[#d6c8aa]
          hover:shadow-[0_14px_40px_rgba(143,120,72,0.4)]
          transition-all
          border font-medium text-sm px-6 py-3 rounded-full
        "
      >
        See More
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
        </svg>
      </Link> */}
    </div>

    //     <div className="
    //   w-full max-w-[570px]
    //   bg-[#fdfbf7]
    //   rounded-[32px]
    //   border border-[#e2d6bf]
    //   shadow-[0_35px_120px_rgba(143,120,72,0.30)]
    //   hover:shadow-[0_55px_160px_rgba(143,120,72,0.45)]
    //   transition-all duration-500
    //   overflow-hidden
    //   group
    // ">

    //   {/* Image */}
    //   <div className="relative overflow-hidden">
    //     <img
    //       className="
    //         h-60 w-full object-cover
    //         transition-transform duration-700
    //         group-hover:scale-110
    //       "
    //       src={photoUrl}
    //       alt=""
    //     />

    //     {/* soft gradient overlay */}
    //     <div className="
    //       absolute inset-0
    //       bg-gradient-to-t from-black/40 via-transparent to-transparent
    //       opacity-60
    //     " />
    //   </div>

    //   <div className="p-8">

    //     <h5 className="
    //       mb-3 text-2xl font-semibold tracking-wide
    //       text-[#161616]
    //       line-clamp-1
    //     ">
    //       {title}
    //     </h5>

    //     <div className="flex justify-between items-center pb-6">
    //       <p className="text-sm text-gray-700">
    //         Rent: <span className="font-semibold">{rent}</span>
    //       </p>

    //       <span
    //         className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide
    //         ${
    //           isAvailable
    //             ? 'bg-green-100 text-green-700 shadow-[0_6px_20px_rgba(34,197,94,0.35)]'
    //             : 'bg-red-100 text-red-700 shadow-[0_6px_20px_rgba(239,68,68,0.35)]'
    //         }`}
    //       >
    //         {isAvailable ? 'Available' : 'Not Available'}
    //       </span>
    //     </div>

    //     <div className="flex justify-between text-sm text-gray-600">
    //       <p className="line-clamp-1">📍 {location}</p>
    //       <p className="line-clamp-1">🛏 {roomType}</p>
    //     </div>

    //     {/* Button */}
    //     <Link
    //       to={`/roommate-details/${_id}`}
    //       className="
    //         mt-8 inline-flex w-full items-center justify-center
    //         rounded-full
    //         px-6 py-3
    //         text-sm font-medium tracking-[0.35em]
    //         text-[#161616]
    //         bg-gradient-to-r from-[#e6dbc3] to-[#c9b27c]
    //         shadow-[0_14px_45px_rgba(143,120,72,0.45)]
    //         hover:shadow-[0_22px_65px_rgba(143,120,72,0.6)]
    //         hover:scale-[1.02]
    //         transition-all duration-300
    //       "
    //     >
    //       Read more
    //       <svg
    //         className="w-4 h-4 ms-2 transition-transform group-hover:translate-x-1"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
    //       </svg>
    //     </Link>

    //   </div>
    // </div>

    //best

    //     <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
    //     <a href="#">
    //         <img className="rounded-base" src={photoUrl} alt="" />
    //     </a>
    //     <a href="#">
    //         <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{title}</h5>
    //     </a>

    // <div className='flex gap-3'>
    // <p>Rent:{rent}</p>
    // <p>Room:{roomType}</p>
    // <p>{availability}</p>
    // </div>
    // <div className='flex justify-between'>
    // <p>Location:{location}</p>
    // <p>a</p>
    // </div>
    //     {/* <p className="mb-6 text-body">In </p> */}

    //     <a href="#" className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
    //         Read more
    //         <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
    //     </a>
    // </div>

    // <div className="card w-96 bg-white border border-gray-200 rounded-2xl
    //   shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

    //   {/* Image */}
    //   <figure className="h-52 w-full overflow-hidden rounded-t-2xl">
    //     <img
    //       src={photoUrl}
    //       alt=""
    //       className="w-full h-full object-cover"
    //     />
    //   </figure>

    //   {/* Body */}
    //   <div className="card-body space-y-3">

    //     {/* Title */}
    //     <h2 className="card-title text-lg font-semibold text-gray-800">
    //       {title}
    //       <span className="badge bg-indigo-50 text-indigo-600 border border-indigo-100 ml-2">
    //         New
    //       </span>
    //     </h2>

    //     {/* Description */}
    //     <p className="text-sm text-gray-500">
    //       {description?.slice(0, 70)}...
    //     </p>

    //     {/* Badges */}
    //     <div className="flex flex-wrap gap-2 text-sm">
    //       <span className="badge badge-outline text-gray-600">
    //         🏠 {roomType}
    //       </span>
    //       <span className="badge badge-outline text-gray-600">
    //         📍 {location}
    //       </span>
    //       {lifestylePreferences && (
    //         <span className="badge badge-outline text-gray-600">
    //           ✨ {lifestylePreferences}
    //         </span>
    //       )}
    //     </div>

    //     {/* Rent + Availability */}
    //     <div className="flex justify-between items-center pt-2">
    //       <p className="text-indigo-600 font-bold text-lg">
    //         ৳ {rent}
    //       </p>
    //       <span
    //         className={`px-3 py-1 rounded-full text-xs font-medium ${
    //           isAvailable
    //             ? 'bg-green-50 text-green-600'
    //             : 'bg-red-50 text-red-600'
    //         }`}
    //       >
    //         {isAvailable ? 'Available' : 'Not Available'}
    //       </span>
    //     </div>

    //     {/* Contact */}
    //     {contactInfo?.phone && (
    //       <p className="text-sm text-gray-600">
    //         📞 <span className="font-medium">{contactInfo.phone}</span>
    //       </p>
    //     )}

    //     {/* Button */}
    //     <div className="card-actions pt-2">
    //       <Link
    //         to={`/roommate-details/${_id}`}
    //         className="btn w-full rounded-xl border-0
    //           bg-indigo-600 hover:bg-indigo-700 text-white"
    //       >
    //         See More
    //       </Link>
    //     </div>
    //   </div>
    // </div>



  );
};

export default RoommateCard;
