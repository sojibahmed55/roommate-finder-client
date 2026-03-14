import React, { useEffect, useState } from "react";
import AllPostCard from "../../pages/AllPostCard/AllPostCard";
import Spinner from "../Spinner/Spinner";
import axios from "axios";

const BrowseListing = () => {
  const [allPost, setAllPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://roommate-finder-server-gilt.vercel.app/roommate")
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
            {""} Roommate
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

    </div>
  );
};

export default BrowseListing;
