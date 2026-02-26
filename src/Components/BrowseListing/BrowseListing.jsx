import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Spinner from '../Spinner/Spinner';



const BrowseListing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/roommate")
      .then((res) => {
        setListings(res.data);
      })
      .catch((err) => {
        console.error("Error loading listings", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      
        <Spinner />
      
    );
  }
 
  


  return (
<div className="max-w-6xl mx-auto px-4 py-16">

  <h2 className="text-3xl sm:text-4xl font-semibold  mb-12
                 text-[#c9b27c] tracking-wide">
    All Roommates
  </h2>

  {listings.length === 0 ? (
    <p className="text-center text-lg text-[#b6b6b6] dark:text-gray-400">
      No roommates found.
    </p>
  ) : (

    <div className="
        relative
        rounded-3xl
        
        dark:border-[#2a2a2a]
        bg-white/70
        dark:bg-[#121212]/70
        backdrop-blur-xl
        shadow-[0_25px_70px_rgba(201,178,124,0.15)]
        dark:shadow-[0_35px_80px_rgba(0,0,0,0.85)]
        transition-all duration-500
        overflow-hidden
    ">

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">

          <thead className="
              text-xs uppercase tracking-widest
              text-[#8f7848] dark:text-[#d6c08a]
              border-b border-[#eadfc9] dark:border-[#2a2a2a]
          ">
            <tr>
              <th className="px-8 py-6 font-medium">Title</th>
              <th className="px-8 py-6 font-medium">Location</th>
              <th className="px-8 py-6 font-medium">Rent</th>
              <th className="px-8 py-6 font-medium">Availability</th>
              <th className="px-8 py-6 text-center font-medium">Action</th>
            </tr>
          </thead>

          <tbody>

            {listings.map((roommate) => (
              <tr
                key={roommate._id}
                className="
                  border-b border-[#f1e7d2]
                  dark:border-[#1f1f1f]
                  hover:bg-[#faf6ed]
                  dark:hover:bg-[#1b1b1b]
                  transition-all duration-300
                "
              >

                <td className="px-8 py-6 font-medium text-[#1a1a1a] dark:text-gray-200">
                  {roommate.title}
                </td>

                <td className="px-8 py-6 text-[#555] dark:text-gray-400">
                  {roommate.location}
                </td>

                <td className="px-8 py-6 font-semibold text-[#8f7848] dark:text-[#d6c08a]">
                  ${roommate.rent}
                </td>

                <td className="px-8 py-6">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide
                      ${
                        roommate.availability?.toLowerCase() === "available"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"
                      }`}
                  >
                    {roommate.availability}
                  </span>
                </td>

                <td className="px-8 py-6 text-center">
                  <Link
                    to={`/roommate-details/${roommate._id}`}
                    className="
                      inline-flex items-center justify-center
                      px-6 py-2 rounded-sm text-sm font-medium
                      border border-[#c9b27c]
                      text-[#8f7848]
                      dark:text-[#d6c08a]
                      dark:border-[#d6c08a]
                      hover:bg-[#c9b27c]
                      hover:text-black
                      dark:hover:bg-[#d6c08a]
                      dark:hover:text-black
                      transition-all duration-300
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

      {/* Mobile View */}
      <div className="md:hidden p-6 space-y-6">

        {listings.map((roommate) => (
          <div
            key={roommate._id}
            className="
              p-6 rounded-2xl
              bg-white/80
              dark:bg-[#181818]/80
              backdrop-blur-lg
              border border-[#eadfc9]
              dark:border-[#2a2a2a]
              shadow-sm
              transition-all duration-300
            "
          >
            <h3 className="font-semibold text-[#1a1a1a] dark:text-white">
              {roommate.title}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {roommate.location}
            </p>

            <p className="text-sm font-semibold text-[#8f7848] dark:text-[#d6c08a] mt-3">
              ${roommate.rent}
            </p>

            <div className="flex justify-between items-center mt-5">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    roommate.availability?.toLowerCase() === "available"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                      : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"
                  }`}
              >
                {roommate.availability}
              </span>

              <Link
                to={`/roommate-details/${roommate._id}`}
                className="
                  px-4 py-1.5 rounded-xs text-xs
                  border border-[#c9b27c]
                  text-[#8f7848]
                  dark:text-[#d6c08a]
                  dark:border-[#d6c08a]
                  hover:bg-[#c9b27c]
                  hover:text-black
                  dark:hover:bg-[#d6c08a]
                  dark:hover:text-black
                  transition-all duration-300
                "
              >
                See More
              </Link>
            </div>
          </div>
        ))}

      </div>

    </div>
  )}
</div>


  );
};

export default BrowseListing;



