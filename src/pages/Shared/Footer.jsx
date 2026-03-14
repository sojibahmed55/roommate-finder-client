import React from "react";
import { LuFacebook, LuTwitter, LuLinkedin } from "react-icons/lu";

import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="px-6 py-10 md:py-16 bg-gray-50 dark:bg-[#121212] text-gray-800 dark:text-gray-100 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
        {/* About */}
        <div className="flex flex-col items-start text-left">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e9c083] to-[#e9c083]"
          >
            RoomieFind
          </Link>

          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
            RoomieFind helps you discover compatible roommates based on
            lifestyle, budget, and location. Find shared spaces that match your
            comfort, habits, and daily routine — safe and secure.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start text-left">
          <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 md:space-y-2 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-[#e9c083] transition-colors ${
                    isActive
                      ? "underline underline-offset-4 decoration-[#e9c083]"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/add-listing"
                className={({ isActive }) =>
                  `hover:text-[#e9c083] transition-colors ${
                    isActive
                      ? "underline underline-offset-4 decoration-[#e9c083]"
                      : ""
                  }`
                }
              >
                Add Listing
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/browse-listing"
                className={({ isActive }) =>
                  `hover:text-[#e9c083] transition-colors ${
                    isActive
                      ? "underline underline-offset-4 decoration-[#e9c083]"
                      : ""
                  }`
                }
              >
                Browse Listings
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/my-listing"
                className={({ isActive }) =>
                  `hover:text-[#e9c083] transition-colors ${
                    isActive
                      ? "underline underline-offset-4 decoration-[#e9c083]"
                      : ""
                  }`
                }
              >
                My Listings
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col items-start text-left">
          <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
            Support
          </h3>

          <ul className="space-y-2 md:space-y-2 text-sm">
            <li>
              <a
                href="#how-it-works"
                className="hover:text-[#e9c083] transition-colors"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#safety-tips"
                className="hover:text-[#e9c083] transition-colors"
              >
                Safety Guidelines
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-[#e9c083] transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-[#e9c083] transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start text-left">
          <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
            Connect With Us
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            support@roomiefind.com
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Dhaka, Bangladesh
          </p>

          <div className="flex gap-3">
            {[LuFacebook, LuTwitter, LuLinkedin].map((Icon, idx) => (
              <div
                key={idx}
                className="w-9 h-9 flex items-center justify-center rounded-full 
                       bg-gradient-to-tr from-[#e9c083] via-[#e4d4bd] to-[#ecdfcb]
                       dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
                       text-[#000000] dark:text-[#e9c083]
                       hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8 md:mt-12 border-t border-gray-300 dark:border-gray-700 pt-4 max-w-6xl mx-auto">
        © {new Date().getFullYear()} RoomieFind — Find smarter. Live better.
      </div>
    </footer>

  );
};

export default Footer;