import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-gray-500 dark:bg-[#1f1a14]  text-[#e3d8c2] pt-20 pb-10 overflow-hidden">

      {/* soft glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#e3d8c2]/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 ">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-[#e3d8c2]/20 pb-16">

          {/* Logo + About */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              Roomie<span className="text-[#e3d8c2]">Find</span>
            </h2>

            <p className="mt-5 text-sm text-[#f5ecd9]/70 leading-relaxed max-w-sm">
              A smart platform to find compatible roommates based on
              location, lifestyle preferences, and budget. 
              Safe, secure, and designed for modern shared living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/add-listing'}>Add Listing</Link></li>
              <li><Link to={'/browse-listing'}>Browse Listing</Link></li>
              <li><Link to={'/my-listing'}>My Listing</Link></li>
              {/* {["Home", "Add Listing", "Browse Listings", "My Listings"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-white hover:pl-2 transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )} */}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>

            <p className="text-sm text-[#f5ecd9]/70">
              Email: support@roomiefind.com
            </p>
            <p className="text-sm text-[#f5ecd9]/70 mb-6">
              Phone: 01951469883
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="
                      w-10 h-10
                      flex items-center justify-center
                      rounded-full
                      border border-[#e3d8c2]/40
                      text-[#e3d8c2]
                      hover:bg-[#e3d8c2]
                      hover:text-[#1f1a14]
                      hover:scale-110
                      transition-all duration-300
                      cursor-pointer
                      shadow-md hover:shadow-[0_10px_30px_rgba(227,216,194,0.5)]
                    "
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-8 text-xs text-[#f5ecd9]/60">
          © {new Date().getFullYear()} RoomieFind. All Rights Reserved.
        </div>
      </div>
    </footer>
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