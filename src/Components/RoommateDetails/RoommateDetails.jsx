import React, { useContext, useEffect, useState } from "react";
import {
  FaHandSparkles,
  FaHome,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaPhone,
  FaThumbsUp,
} from "react-icons/fa";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import Spinner from "../../Components/Spinner/Spinner";

const RoommateDetails = () => {

  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [roommate, setRoommate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [showContact, setShowContact] = useState(false);


  useEffect(() => {
    fetch(`http://localhost:5000/roommate/${id}`)
      .then(res => res.json())
      .then(data => {
        setRoommate(data);
        setLikes(data.likeCount || 0);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      
        <Spinner />
      
    );
  }

  if (!roommate) {
    return <h2 className="p-6 text-red-500">Roommate Not Found!</h2>;
  }

  const handleLike = () => {
    if (user?.email === roommate.userEmail) {
      return Swal.fire("Oops!", "You can't like your own post", "error");
    }

    fetch(`http://localhost:5000/roommate/like/${roommate._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: user.email }),
    })
      .then(res => res.json())
      .then(() => {
        setLikes(prev => prev + 1);
        setShowContact(true);
      });
  };

  return (
    <div className=" px-4 py-10">

  <div className="max-w-3xl mx-auto 
    bg-[#fdfbf7] 
    dark:bg-gradient-to-br dark:from-[#1a1611] dark:via-[#1f1a14] dark:to-[#262017]
    rounded-[28px] 
    shadow-[0_28px_80px_rgba(143,120,72,0.25)] 
    dark:shadow-[0_40px_100px_rgba(0,0,0,0.75)]
    border border-[#e2d6bf] 
    dark:border-[#2f291f]
    p-7 space-y-6 transition-all duration-500">

    {/* IMAGE */}
    <div className="overflow-hidden rounded-2xl">
      <img
        src={roommate.photoUrl}
        alt=""
        className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* TITLE */}
    <div className="space-y-1">
      <h1 className="text-2xl font-semibold tracking-wide text-[#161616] dark:text-white">
        {roommate.title}
      </h1>
      <p className="text-2xl text-black dark:text-white">
        {likes} people interested
      </p>
    </div>

    {/* INFO GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xl font-medium text-[#534e4e] dark:text-gray-400">

      <p className="flex items-center gap-2">
        <FaHome className="text-[#c9b27c] dark:text-[#d6c08a]" />
        <span className="font-bold text-xl text-[#161616] dark:text-white">Room Type:</span> {roommate.roomType}
      </p>

      <p className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-[#c9b27c] dark:text-[#d6c08a]" />
        <span className="font-bold text-xl text-[#161616] dark:text-white">Location:</span> {roommate.location}
      </p>

      <p className="flex items-center gap-2">
        <FaMoneyBillWave className="text-[#c9b27c] dark:text-[#d6c08a]" />
        <span className="font-bold text-xl text-[#161616] dark:text-white">Rent:</span> ${roommate.rent}
      </p>

      {roommate.lifestylePreferences && (
        <p className="flex items-center gap-2">
          <FaHandSparkles className="text-[#c9b27c] dark:text-[#d6c08a]" />
          <span className="font-medium text-black dark:text-white">Lifestyle:</span> {roommate.lifestylePreferences}
        </p>
      )}
    </div>

    {/* DESCRIPTION */}
    <p className="text-sm leading-relaxed text-[#161616] border-t border-[#e6dcc7] pt-4
 dark:text-white dark:border-[#2f291f]">
      {roommate.description}
    </p>

    {/* CONTACT */}
    {showContact && (
      <div className="bg-[#f1ede5] border border-[#ddd2bd] rounded-xl px-4 py-3 text-sm
        dark:bg-[#1c1914] dark:border-[#ffffff] dark:text-[#ffffff] flex items-center gap-2">
        <FaPhone className="text-[#c9b27c] dark:text-[#d6c08a]" />
        <span className="font-semibold">Contact:</span> {roommate.contactInfo}
      </div>
    )}

    {/* ACTIONS */}
    <div className="flex items-center justify-between pt-4 border-t border-[#e6dcc7]
      dark:border-[#2f291f]">

      <button
        onClick={handleLike}
        className="
          flex items-center gap-2 px-5 py-2.5 rounded-full
          border border-[#c9b27c]/60
          text-[#c9b27c] text-sm cursor-pointer
          hover:bg-[#c9b27c] hover:text-[#0b0b0b]
          transition-all duration-300
          dark:border-[#d6c08a]
          dark:text-[#d6c08a]
          dark:hover:bg-[#d6c08a]
          dark:hover:text-[#14120f]
          dark:hover:shadow-[0_10px_40px_rgba(214,192,138,0.35)]
        "
      >
        <FaThumbsUp />
        Like
      </button>

      <span
        className={`px-4 py-1.5 rounded-full text-xs tracking-wide font-medium
          ${
            roommate.availability.toLowerCase() === "available"
              ? "bg-[#e4efe6] text-[#1f7a3b] dark:bg-[#1a2b1f] dark:text-[#4ade80]"
              : "bg-[#f4e3e3] text-[#8b2c2c] dark:bg-[#2a1a1a] dark:text-[#f87171]"
          }
        `}
      >
        {roommate.availability}
      </span>
    </div>
  </div>
</div>
  );
};

export default RoommateDetails;
