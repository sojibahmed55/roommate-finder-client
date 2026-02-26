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
    <div className="w-full mx-auto max-w-[570px] bg-[#fdfbf7] dark:bg-[#1a1a1a] dark:border-[#333] rounded-[28px] shadow-[0_28px_80px_rgba(143,120,72,0.25)] border border-[#e2d6bf] p-8">

      {/* Image */}
      <img
        className="rounded-xl h-60 w-full object-cover shadow-md"
        src={photoUrl}
        alt={title}
      />

      {/* Title */}
      <h5 className="mt-6 mb-3 text-2xl font-semibold tracking-tight text-[#161616] dark:text-white line-clamp-1">
        {title}
      </h5>

      {/* Rent + Availability */}
      <div className="flex justify-between items-center pb-6 text-sm text-[#4b4b4b] dark:text-gray-300">

        <p className="flex items-center gap-2 font-medium text-shadow-xs">
          <FaMoneyBillWave className="text-[#8f7848] dark:text-[#8f7848] text-xl" />
          ${rent}
        </p>

        <span
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-shadow-xs font-medium ${isAvailable
              ? "bg-green-50 text-green-600 dark:bg-green-50 dark:text-green-600 px-2 py-2"
              : "bg-red-50 text-red-600 dark:bg-red-900 dark:text-red-200"
            }`}
        >
          {isAvailable ? <FaCheckCircle className='text-xl' /> : <FaTimesCircle className='text-xl' />}
          {isAvailable ? "Available" : "Not Available"}
        </span>
      </div>

      {/* Location + Room Type */}
      <div className="flex justify-between text-sm text-[#4b4b4b] dark:text-gray-300">

        <p className="flex items-center gap-2 line-clamp-1 font-medium">
          <FaMapMarkerAlt className="text-[#8f7848] dark:text-[#8f7848] text-xl" />
          {location}
        </p>

        <p className="flex items-center gap-2 line-clamp-1 font-medium ">
          <FaHome className="text-[#8f7848] text-xl dark:text-[#8f7848]" />
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
      rounded-md
    "
        ></span>
        <span
          className="
      absolute inset-0 w-full h-full
      bg-[#e3d8c2]
      border border-[#d4c6a6]
      rounded-md
      group-hover:bg-[#d8c9ab]
      transition-colors duration-200
    "
        ></span>
        <span
          className="
      relative
      text-[#161616] dark:text-black
      tracking-wide
    "
        >
          See More
        </span>
      </Link>
    </div>

  );
};

export default RoommateCard;
