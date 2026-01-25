import React from "react";
import { FaHome, FaMapMarkedAlt, FaShieldAlt, FaUserFriends } from "react-icons/fa";

const RoommateSection = () => {
  return (
    <div>
      <section className="py-24 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#1b1b1b] mb-4">
            Find Your Perfect Roommate
          </h2>
          <p className="text-[#6b5a34] max-w-xl mx-auto">
            Smart matching, verified listings and a premium experience built
            for modern living.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD */}
          {[
            {
              icon: <FaHome />,
              title: "Verified Listings",
              text: "Every listing is reviewed to ensure safety and accuracy.",
            },
            {
              icon: <FaUserFriends />,
              title: "Perfect Match",
              text: "Find roommates that match your lifestyle & habits.",
            },
            {
              icon: <FaMapMarkedAlt />,
              title: "Location Based",
              text: "Search roommates near your preferred area easily.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Secure Platform",
              text: "Your data and communication stay fully protected.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border border-[#e3d8c2]
                rounded-3xl
                p-8
                text-center
                shadow-[0_20px_60px_rgba(143,120,72,0.15)]
                hover:shadow-[0_40px_90px_rgba(143,120,72,0.35)]
                transition-all duration-500
                hover:-translate-y-3
              "
            >
              {/* ICON */}
              <div
                className="
                  w-16 h-16 mx-auto mb-6
                  rounded-2xl
                  bg-gradient-to-br from-[#e3d8c2] to-[#c9b27c]
                  flex items-center justify-center
                  text-2xl text-black
                  shadow-[0_15px_40px_rgba(143,120,72,0.5)]
                  group-hover:scale-110
                  transition
                "
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#1b1b1b] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#6b5a34] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </div>
  );
};

export default RoommateSection;
