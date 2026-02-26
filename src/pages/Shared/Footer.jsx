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
            {/* <li><NavLink to="/" className="hover:text-[#e9c083] transition-colors">Home</NavLink></li>
        <li><NavLink to="/add-listing" className="hover:text-[#e9c083] transition-colors">Add Listing</NavLink></li>
        <li><NavLink to="/browse-listing" className="hover:text-[#e9c083] transition-colors">Browse Listings</NavLink></li>
        <li><NavLink to="/my-listing" className="hover:text-[#e9c083] transition-colors">My Listings</NavLink></li> */}
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

    //     <footer className="px-6 py-16 bg-gray-50 dark:bg-[#121212] text-gray-800 dark:text-gray-100 relative overflow-hidden transition-colors duration-500">

    //   <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full"></div>

    //   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

    //     {/* About */}
    //     <div className="flex flex-col items-start text-left">
    //       <Link to="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e9c083] to-[#e9c083]">
    //         RoomieFind
    //       </Link>

    //       <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
    //         RoomieFind helps you discover compatible roommates based on lifestyle,
    //         budget, and location. Find shared spaces that match your comfort,
    //         habits, and daily routine — safe and secure.
    //       </p>
    //     </div>

    //     {/* Quick Links */}
    //     <div className="flex flex-col items-start text-left">
    //       <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
    //         Quick Links
    //       </h3>

    //       <ul className="space-y-2 text-sm">
    //         <li>
    //           <NavLink to="/" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/add-listing" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Add Listing
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/browse-listing" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Browse Listings
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/my-listing" className="hover:text-[#e9c083] transition-colors duration-300">
    //             My Listings
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Support */}
    //     <div className="flex flex-col items-start text-left">
    //       <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
    //         Support
    //       </h3>

    //       <ul className="space-y-2 text-sm">
    //         <li>
    //           <a href="#how-it-works" className="hover:text-[#e9c083] transition-colors duration-300">
    //             How It Works
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#safety-tips" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Safety Guidelines
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#terms" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Terms & Conditions
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#privacy" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Privacy Policy
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Contact */}
    //     <div className="flex flex-col items-start text-left">
    //       <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
    //         Connect With Us
    //       </h3>

    //       <p className="text-sm text-gray-600 dark:text-gray-400">
    //         support@roomiefind.com
    //       </p>
    //       <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
    //         Dhaka, Bangladesh
    //       </p>

    //       <div className="flex gap-4 mt-2">
    //         {[LuFacebook, LuTwitter, LuLinkedin].map((Icon, idx) => (
    //           <div
    //             key={idx}
    //             className="w-10 h-10 flex items-center justify-center rounded-full
    //                        bg-gradient-to-tr from-[#e9c083] via-[#e4d4bd] to-[#ecdfcb]
    //                        dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
    //                        text-[#000000] dark:text-[#e9c083]
    //                        hover:scale-110 hover:shadow-[0_8px_25px_rgba(201,178,124,0.25)]
    //                        transition-transform duration-300 cursor-pointer"
    //           >
    //             <Icon size={18} />
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //   </div>

    //   <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-12 border-t border-gray-300 dark:border-gray-700 pt-4 max-w-6xl mx-auto">
    //     © {new Date().getFullYear()} RoomieFind — Find smarter. Live better.
    //   </div>

    // </footer>

    // {/* <footer className="px-6 py-16 bg-gray-50 dark:bg-[#121212] text-gray-800 dark:text-gray-100 relative overflow-hidden transition-colors duration-500">

    //   {/* Subtle top glow */}
    //   <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full"></div>

    //   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

    //     {/* About */}
    //     <div className="flex flex-col items-center md:items-start text-center md:text-left">
    //       <Link to="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e9c083] to-[#e9c083]">
    //         RoomieFind
    //       </Link>

    //       <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
    //         RoomieFind helps you discover compatible roommates based on lifestyle,
    //         budget, and location. Find shared spaces that match your comfort,
    //         habits, and daily routine — safe and secure.
    //       </p>
    //     </div>

    //     {/* Quick Links */}
    //     <div className="hidden md:flex flex-col items-center md:items-start text-center md:text-left">
    //       <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
    //         Quick Links
    //       </h3>

    //       <ul className="space-y-2 text-sm">
    //         <li>
    //           <NavLink to="/" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/add-listing" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Add Listing
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/browse-listing" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Browse Listings
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to="/my-listing" className="hover:text-[#e9c083] transition-colors duration-300">
    //             My Listings
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Resources (Changed for Roommate Website) */}
    //     <div className="flex flex-col items-center md:items-start text-center md:text-left">
    //       <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
    //         Support
    //       </h3>

    //       <ul className="space-y-2 text-sm">
    //         <li>
    //           <a href="#how-it-works" className="hover:text-[#e9c083] transition-colors duration-300">
    //             How It Works
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#safety-tips" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Safety Guidelines
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#terms" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Terms & Conditions
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#privacy" className="hover:text-[#e9c083] transition-colors duration-300">
    //             Privacy Policy
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Contact & Social */}
    //     <div className="flex flex-col items-center text-center md:text-left">
    //       <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
    //         Connect With Us
    //       </h3>

    //       <p className="text-sm text-gray-600 dark:text-gray-400">
    //         support@roomiefind.com
    //       </p>
    //       <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
    //         Dhaka, Bangladesh
    //       </p>

    //       <div className="flex gap-4 mt-2">
    //         {[LuFacebook, LuTwitter, LuLinkedin].map((Icon, idx) => (
    //           <div
    //             key={idx}
    //             className="w-10 h-10 flex items-center justify-center rounded-full
    //                        bg-gradient-to-tr from-[#e9c083] via-[#e4d4bd] to-[#ecdfcb]
    //                        dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
    //                        text-[#000000] dark:text-[#e9c083]
    //                        hover:scale-110 hover:shadow-[0_8px_25px_rgba(201,178,124,0.25)]
    //                        transition-transform duration-300 cursor-pointer"
    //           >
    //             <Icon size={18} />
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //   </div>

    //   {/* Bottom */}
    //   <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-12 border-t border-gray-300 dark:border-gray-700 pt-4">
    //     © {new Date().getFullYear()} RoomieFind — Find smarter. Live better.
    //   </div>

    // </footer> */}
    // <footer className="px-6 py-16 bg-gray-50 dark:bg-[#121212] text-gray-800 dark:text-gray-100 relative overflow-hidden transition-colors duration-500">

    //   {/* Subtle top gradient glow */}
    //   <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full   "></div>

    //   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

    //     {/* About */}
    //     <div className="flex flex-col items-center md:items-start text-center md:text-left">
    //       <Link to="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e9c083] to-[#e9c083]">
    //         EduCircle
    //       </Link>
    //       <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
    //         EduCircle is your collaborative online group study platform. Create, share, attempt, and grade assignments with friends in real-time.
    //       </p>
    //     </div>

    //     {/* Quick Links */}
    //     <div className="hidden md:flex flex-col items-center md:items-start text-center md:text-left">
    //       <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Links</h3>
    //       <ul className="space-y-2 text-sm">
    //         <li><NavLink to="/" className="hover:text-[#e9c083] dark:hover:text-[#e9c083] transition-colors duration-300">Home</NavLink></li>
    //         <li><NavLink to="/add-listing" className="hover:text-[#e9c083] dark:hover:text-[#e9c083] transition-colors duration-300">Add Listing</NavLink></li>
    //         <li><NavLink to="/browse-listing" className="hover:text-[#e9c083] dark:hover:text-[#e9c083] transition-colors duration-300">Browse Listing</NavLink></li>
    //         <li><NavLink to="/my-listing" className="hover:text-[#e9c083] dark:hover:text-[#e9c083] transition-colors duration-300">My Listing</NavLink></li>
    //       </ul>
    //     </div>

    //     {/* Resources */}
    //     <div className="flex flex-col items-center md:items-start text-center md:text-left">
    //       <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Resources</h3>
    //       <ul className="space-y-2 text-sm">
    //         <li><a href="#faq" className="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-300">FAQ</a></li>
    //         <li><a href="#features" className="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-300">Features</a></li>
    //         <li><a href="#support" className="hover:text-[#e9c083] dark:hover:text-[#e9c083] transition-colors duration-300">Support</a></li>
    //         <li><a href="mailto:study@educircle.app" className="hover:text-[#e9c083] dark:hover:text-[#e9c083] transition-colors duration-300">Contact</a></li>
    //       </ul>
    //     </div>

    //     {/* Theme & Social */}
    //     <div className="flex flex-col items-center text-center md:text-left">
    //       <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Connect & Customize</h3>

    //       {/* Social Icons */}
    //       <div className="flex gap-4 mt-2">
    //         {[LuFacebook, LuTwitter, LuLinkedin].map((Icon, idx) => (
    //           <div
    //             key={idx}
    //             className="w-10 h-10 flex items-center justify-center rounded-full
    //                        bg-gradient-to-tr from-[#e9c083] via-[#e4d4bd] to-[#ecdfcb] dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
    //                        text-[#000000] dark:text-[#e9c083]
    //                        hover:scale-110 hover:shadow-[0_8px_25px_rgba(201,178,124,0.25)]
    //                        transition-transform duration-300 cursor-pointer"
    //           >
    //             <Icon size={18} />
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //   </div>

    //   {/* Footer Bottom */}
    //   <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-12 border-t border-gray-300 dark:border-gray-700 pt-4">
    //     © {new Date().getFullYear()} EduCircle — All rights reserved | Built for study purpose only.
    //   </div>

    // </footer>
    // <footer className="px-6 backdrop-blur transition-all duration-300 shadow-lg py-12 bg-transparent  border-t border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 ">
    //         <div className="max-w-6xl md:pl-6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    //             {/* About */}
    //             <div>
    //                 <Link to="/" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">EduCircle</Link>
    //                 <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
    //                     EduCircle is your collaborative online group study platform. Create, share, attempt, and grade assignments with friends in real-time.
    //                 </p>
    //             </div>

    //             {/* Quick Links */}
    //             <div className="hidden md:block">
    //                 <h3 className="text-lg  font-semibold mb-3 text-gray-900 dark:text-gray-100">Quick Links</h3>
    //                 <ul className="space-y-2">
    //                     <li><NavLink to="/" className="hover:text-primary">Home</NavLink></li>
    //                     <li><NavLink to="/add-listing" className="hover:text-primary">Assignments</NavLink></li>
    //                     <li><NavLink to="/browse-listing" className="hover:text-primary">Create Assignment</NavLink></li>
    //                     <li><NavLink to="/my-listing" className="hover:text-primary">Pending Assignments</NavLink></li>
    //                 </ul>
    //             </div>

    //             {/* Resources */}
    //             <div>
    //                 <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Resources</h3>
    //                 <ul className="space-y-2">
    //                     <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
    //                     <li><a href="#features" className="hover:text-primary">Features</a></li>
    //                     <li><a href="#support" className="hover:text-primary">Support</a></li>
    //                     <li><a href="mailto:study@educircle.app" className="hover:text-primary">Contact</a></li>
    //                 </ul>
    //             </div>

    //             {/* Theme & Social */}
    //             <div>
    //                 <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Customize</h3>

    //                 {/* Social Icons */}
    //                 <div className="flex space-x-4 mt-2 ">
    //                     <a target="blank" href="https://www.facebook.com/programmingHero/" aria-label="Facebook" className="text-xl hover:text-primary"><LuFacebook /></a>
    //                     <a target="blank" href="https://x.com/ProgrammingHero" aria-label="Twitter" className="text-xl hover:text-primary"><LuTwitter /></a>
    //                     <a target="blank" href="https://bd.linkedin.com/company/programminghero" aria-label="LinkedIn" className="text-xl hover:text-primary"><LuLinkedin /></a>
    //                 </div>
    //             </div>

    //         </div>

    //         {/* Footer Bottom */}
    //         <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-12 border-t border-gray-300 dark:border-gray-700 pt-4">
    //             © {new Date().getFullYear()} EduCircle — All rights reserved | Built for study purpose only.
    //         </div>
    //     </footer>
    // <footer className="relative bg-gray-500 dark:bg-[#1f1a14]  text-[#e3d8c2] pt-20 pb-10 overflow-hidden">

    //   {/* soft glow background */}
    //   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#e3d8c2]/20 blur-[120px] rounded-full pointer-events-none"></div>

    //   <div className="relative max-w-7xl mx-auto px-6 ">

    //     {/* Top Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#e3d8c2]/20 pb-16">

    //       {/* Logo + About */}
    //       <div>
    //         <h2 className="text-3xl font-bold tracking-wide">
    //           Roomie<span className="text-[#e3d8c2]">Find</span>
    //         </h2>

    //         <p className="mt-5 text-sm text-[#f5ecd9]/70 leading-relaxed max-w-sm">
    //           A smart platform to find compatible roommates based on
    //           location, lifestyle preferences, and budget.
    //           Safe, secure, and designed for modern shared living.
    //         </p>
    //       </div>

    //       {/* Quick Links */}
    //       <div>
    //         <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
    //         <ul className="space-y-3 text-sm">
    //           <li><Link to={'/'}>Home</Link></li>
    //           <li><Link to={'/add-listing'}>Add Listing</Link></li>
    //           <li><Link to={'/browse-listing'}>Browse Listing</Link></li>
    //           <li><Link to={'/my-listing'}>My Listing</Link></li>
    //           {/* {["Home", "Add Listing", "Browse Listings", "My Listings"].map(
    //             (item, index) => (
    //               <li key={index}>
    //                 <a
    //                   href="#"
    //                   className="hover:text-white hover:pl-2 transition-all duration-300"
    //                 >
    //                   {item}
    //                 </a>
    //               </li>
    //             )
    //           )} */}
    //         </ul>
    //       </div>

    //       {/* Contact + Social */}
    //       <div>
    //         <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>

    //         <p className="text-sm text-[#f5ecd9]/70">
    //           Email: support@roomiefind.com
    //         </p>
    //         <p className="text-sm text-[#f5ecd9]/70 mb-6">
    //           Phone: 01951469883
    //         </p>

    //         {/* Social Icons */}
    //         <div className="flex gap-4">
    //           {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
    //             (Icon, index) => (
    //               <div
    //                 key={index}
    //                 className="
    //                   w-10 h-10
    //                   flex items-center justify-center
    //                   rounded-full
    //                   border border-[#e3d8c2]/40
    //                   text-[#e3d8c2]
    //                   hover:bg-[#e3d8c2]
    //                   hover:text-[#1f1a14]
    //                   hover:scale-110
    //                   transition-all duration-300
    //                   cursor-pointer
    //                   shadow-md hover:shadow-[0_10px_30px_rgba(227,216,194,0.5)]
    //                 "
    //               >
    //                 <Icon size={14} />
    //               </div>
    //             )
    //           )}
    //         </div>
    //       </div>
    //     </div>

    //     {/* Bottom */}
    //     <div className="text-center pt-8 text-xs text-[#f5ecd9]/60">
    //       © {new Date().getFullYear()} RoomieFind. All Rights Reserved.
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;

// import React from 'react';

// const Footer = () => {

//     return (
//         <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
//   <aside className="grid-flow-col items-center">
//     <svg
//       width="36"
//       height="36"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//       fillRule="evenodd"
//       clipRule="evenodd"
//       className="fill-current">
//       <path
//         d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//     </svg>
//     <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
//   </aside>
//   <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//       </svg>
//     </a>
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//       </svg>
//     </a>
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//       </svg>
//     </a>
//   </nav>
// </footer>
//     );
// };

// export default Footer;
