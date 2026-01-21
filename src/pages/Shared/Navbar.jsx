// import React, { use } from 'react';
// import { NavLink } from 'react-router';
// import { AuthContext } from '../../contexts/AuthContext/AuthContext';

// const Navbar = () => {

//     const { user, signOutUser } = use(AuthContext);

//     const handleSignOut = () => {
//         signOutUser()
//         .then(()=> {
//             console.log('sign out user');
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }

//     const links = <>
//         <li><NavLink to='/'>Home</NavLink></li>
//         <li><NavLink to='/add-listing'>Add Listing</NavLink></li>
//         <li><NavLink to='/browse-listing'>Browse Listing</NavLink></li>
//         <li><NavLink to='/my-listing'>My Listing</NavLink></li>
//         <li><a>Item 3</a></li>

//     </>




//     return (
//         <div className="navbar bg-base-100 shadow-sm">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         {links}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl">daisyUI</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {links}
//                 </ul>
//             </div>
//             <div className="navbar-end gap-4">
//                 {
//                     user ? <button onClick={handleSignOut} className='btn btn-primary'>Log Out</button> :
//                         <>
//                             <NavLink to='/register' className="btn">Register</NavLink>
//                             <NavLink to='/login' className="btn">login</NavLink>
//                         </>
//                 }
//             </div>
//         </div>
//     );
// };

// export default Navbar;
// import React, { useContext } from "react";
// import { Link, NavLink } from "react-router";
// import { AuthContext } from "../../contexts/AuthContext/AuthContext";

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOutUser().catch(console.log);
//   };

//   const linkClass = ({ isActive }) =>
//     `px-4 py-2 text-sm font-medium transition-colors duration-200
//      ${isActive ? "text-black" : "text-gray-500 hover:text-black"}`;

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">

//           {/* LOGO */}
//           <div className="flex items-center gap-2">
//             <Link to={'/'}><span className="text-xl font-semibold tracking-tight text-black">
//               Find<span className="text-gray-400">Roomy</span>
//             </span></Link>
//           </div>

//           {/* DESKTOP NAV */}
//           <nav className="hidden md:flex items-center gap-1">
//             <NavLink to="/" className={linkClass}>Home</NavLink>
//             <NavLink to="/add-listing" className={linkClass}>Add Listing</NavLink>
//             <NavLink to="/browse-listing" className={linkClass}>Browse</NavLink>
//             <NavLink to="/my-listing" className={linkClass}>My Listing</NavLink>
//           </nav>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-3">
//             {user ? (
//               <>
//                 {/* USER */}
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={user.photoURL}
//                     alt="user"
//                     className="w-9 h-9 rounded-full object-cover border"
//                   />
//                   <span className="hidden sm:block text-sm text-gray-600">
//                     {user.displayName || "User"}
//                   </span>
//                 </div>

//                 {/* LOGOUT */}
//                 <button
//                   onClick={handleSignOut}
//                   className="text-sm font-medium text-gray-500 hover:text-black transition">
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   to="/login"
//                   className="text-sm font-medium text-gray-500 hover:text-black transition">
//                   Login
//                 </NavLink>
//                 <NavLink
//                   to="/register"
//                   className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition">
//                   Sign up
//                 </NavLink>
//               </>
//             )}

//             {/* MOBILE MENU */}
//             <div className="dropdown dropdown-end md:hidden">
//               <label tabIndex={0} className="btn btn-ghost btn-sm">
//                 ☰
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 w-52 rounded-xl
//                 bg-white border border-gray-200 shadow-xl p-2">
//                 <NavLink to="/" className={linkClass}>Home</NavLink>
//                 <NavLink to="/add-listing" className={linkClass}>Add Listing</NavLink>
//                 <NavLink to="/browse-listing" className={linkClass}>Browse</NavLink>
//                 <NavLink to="/my-listing" className={linkClass}>My Listing</NavLink>
//               </ul>
//             </div>
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


// import React, { useContext } from 'react';
// import { NavLink } from 'react-router';
// import { AuthContext } from '../../contexts/AuthContext/AuthContext';

// const Navbar = () => {

//     const { user, signOutUser } = useContext(AuthContext);

//     const handleSignOut = () => {
//         signOutUser()
//             .then(() => console.log("User signed out"))
//             .catch(error => console.log(error));
//     };

//     const links = (
//         <>
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/add-listing">Add Listing</NavLink></li>
//             <li><NavLink to="/browse-listing">Browse Listing</NavLink></li>
//             <li><NavLink to="/my-listing">My Listing</NavLink></li>
//         </>
//     );

//     return (
//         <div className="navbar bg-base-100 shadow-sm">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>

//                     {/* Mobile Menu */}
//                     <ul
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow">
//                         {links}
//                     </ul>
//                 </div>

//                 <a className="btn btn-ghost text-xl font-bold">Roommate Finder</a>
//             </div>

//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {links}
//                 </ul>
//             </div>

//             <div className="navbar-end gap-4">

//                 {user ? (
//                     <div className="flex items-center gap-3">

//                         {/* USER PHOTO */}
//                         <div className="relative group cursor-pointer">
//                             <img
//                                 src={user.photoURL}
//                                 alt="User"
//                                 className="w-10 h-10 rounded-full border"
//                             />

//                             {/* HOVER TOOLTIP (displayName) */}
//                             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
//                             transition-all bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap">
//                                 {user.displayName || "No Name"}
//                             </div>
//                         </div>

//                         {/* LOGOUT */}
//                         <button onClick={handleSignOut} className="btn btn-error btn-sm">
//                             Log Out
//                         </button>
//                     </div>
//                 ) : (
//                     <>
//                         <NavLink to="/register" className="btn btn-primary btn-sm">
//                             Signup
//                         </NavLink>
//                         <NavLink to="/login" className="btn btn-outline btn-sm">
//                             Login
//                         </NavLink>
//                     </>
//                 )}

//             </div>
//         </div>
//     );
// };

// export default Navbar;


import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser().catch(console.log);
  };

  const linkClass = ({ isActive }) =>
    `
    relative px-5 py-2 rounded-sm text-sm tracking-wide transition-all duration-300
    ${isActive
      ? "text-[#0b0b0b] bg-gradient-to-r from-[#e6dbc3] to-[#c9b27c] shadow-[0_8px_30px_rgba(143,120,72,0.45)]"
      : "text-[#1a1a1a] hover:text-[#8f7848] hover:bg-[#f3eddf]"}
  `;

  return (
    <header className="
      sticky top-0 z-[999]
      backdrop-blur-2xl
      bg-white/80
      border-b border-[#e6dbc3]
      shadow-[0_12px_60px_rgba(143,120,72,0.25)]
    ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            {/* Mobile */}
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="
                btn btn-ghost rounded-full
                hover:bg-[#f3eddf]
              ">
                <svg className="w-6 h-6 text-[#8f7848]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h10M4 18h16" />
                </svg>
              </label>

              <ul tabIndex={0} className="
                menu dropdown-content mt-3 w-56
                rounded-3xl
                bg-[#fdfbf7]
                border border-[#e2d6bf]
                shadow-[0_30px_90px_rgba(143,120,72,0.35)]
                p-3
              ">
                <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
                <li><NavLink to="/add-listing" className={linkClass}>Add Listing</NavLink></li>
                <li><NavLink to="/browse-listing" className={linkClass}>Browse</NavLink></li>
                <li><NavLink to="/my-listing" className={linkClass}>My Listing</NavLink></li>
              </ul>
            </div>

            {/* LOGO */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="
                w-10 h-10 rounded-2xl
                bg-gradient-to-br from-[#c9b27c] to-[#8f7848]
                grid place-items-center
                shadow-[0_10px_40px_rgba(143,120,72,0.6)]
              ">
                <span className="text-black font-bold text-lg"><FaHome></FaHome></span>
              </div>

              <span className="text-xl md:text-2xl font-semibold tracking-wide text-[#0b0b0b]">
                Find
                <span className="text-[#8f7848]">Roomy</span>
              </span>
            </div>
          </div>

          {/* CENTER */}
          <nav className="hidden lg:flex gap-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/add-listing" className={linkClass}>Add Listing</NavLink>
            <NavLink to="/browse-listing" className={linkClass}>Browse</NavLink>
            <NavLink to="/my-listing" className={linkClass}>My Listing</NavLink>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                {/* USER */}
                <div className="relative group">
                  <img
                    src={user.photoURL}
                    alt="user"
                    className="
                      w-11 h-11 rounded-full
                      ring-2 ring-[#e2d6bf]
                      group-hover:ring-[#8f7848]
                      transition
                    "
                  />
                  <div className="
                    absolute -bottom-14 left-1/2 -translate-x-1/2
                    opacity-0 group-hover:opacity-100
                    bg-[#0b0b0b] text-white
                    text-xs px-4 py-2 rounded-full
                    shadow-lg transition
                  ">
                    {user.displayName || "User"}
                  </div>
                </div>

                {/* LOGOUT */}
                <button
                  onClick={handleSignOut}
                  className="
                    px-6 py-2.5 rounded-full
                    text-sm font-medium tracking-wide
                    bg-gradient-to-r from-[#e6dbc3] to-[#c9b27c]
                    text-[#0b0b0b]
                    shadow-[0_12px_40px_rgba(143,120,72,0.55)]
                    hover:scale-105 transition
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="
                    px-6 py-2.5 rounded-sm
                    text-sm
                    border border-[#8f7848]
                    text-black
                    hover:bg-gradient-to-r from-[#e6dbc3] to-[#c9b27c]
                    
                
                    transition
                  "
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="
                    px-6 py-2.5 rounded-sm
                    text-sm
                    bg-gradient-to-r from-[#e6dbc3] to-[#c9b27c]
                    text-[#0b0b0b]
                  "
                >
                  Signup
                </NavLink>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
