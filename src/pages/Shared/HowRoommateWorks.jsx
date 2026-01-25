import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaComments, FaHeart, FaSearch, FaUserPlus } from 'react-icons/fa';

const HowRoommateWorks = () => {
    
    return (
        <section className="py-24 bg-[#f7f3ea]">
      <div className="max-w-6xl mx-auto px-6">

        {/* heading */}
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#2a2418]">
              How Roommate Finder Works
            </h2>
            <p className="mt-4 text-[#6b5f3d] max-w-xl mx-auto">
              Finding a roommate shouldn’t feel complicated.  
              We made it simple, smart, and comfortable.
            </p>
          </div>
        </Fade>

        {/* cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {[
            {
              icon: <FaUserPlus />,
              title: "Create Profile",
              desc: "Add your preferences, location and budget to get better matches.",
            },
            {
              icon: <FaSearch />,
              title: "Browse Listings",
              desc: "Explore available roommate posts filtered by lifestyle.",
            },
            {
              icon: <FaHeart />,
              title: "Like & Interest",
              desc: "Like posts you prefer. Contact appears after interest.",
            },
            {
              icon: <FaComments />,
              title: "Connect Easily",
              desc: "Talk, discuss comfort and move forward confidently.",
            },
          ].map((item, index) => (
            <Slide
              key={index}
              direction="up"
              delay={index * 120}
              triggerOnce
            >
              <div
                className="
                  bg-white rounded-2xl p-8
                  border border-[#e3d8c2]
                  shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                  hover:-translate-y-2
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                  transition-all duration-500
                "
              >
                <div className="text-3xl text-[#8a7747] mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#2a2418] mb-2">
                  {item.title}
                </h3>

                <p className="text-[#6b5f3d] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HowRoommateWorks;