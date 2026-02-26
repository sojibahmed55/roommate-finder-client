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

// import React, { useContext } from "react";
// import { NavLink } from "react-router";
// import { AuthContext } from "../../contexts/AuthContext/AuthContext";
// import { FaHome } from "react-icons/fa";

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOutUser().catch(console.log);
//   };

//   const linkClass = ({ isActive }) =>
//     `
//     relative px-5 py-2 rounded-sm text-sm tracking-wide transition-all duration-300
//     ${isActive
//       ? "text-[#0b0b0b] bg-gradient-to-r from-[#e6dbc3] to-[#c9b27c] shadow-[0_8px_30px_rgba(143,120,72,0.45)]"
//       : "text-[#1a1a1a] hover:text-[#8f7848] hover:bg-[#f3eddf]"}
//   `;

//   return (
//     <header className="
//       sticky top-0 z-[999]
//       backdrop-blur-2xl
//       bg-white/80
//       border-b border-[#e6dbc3]
//       shadow-[0_12px_60px_rgba(143,120,72,0.25)]
//     ">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">

//           {/* LEFT */}
//           <div className="flex items-center gap-3">
//             {/* Mobile */}
//             <div className="dropdown lg:hidden">
//               <label tabIndex={0} className="
//                 btn btn-ghost rounded-full
//                 hover:bg-[#f3eddf]
//               ">
//                 <svg className="w-6 h-6 text-[#8f7848]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                     d="M4 6h16M4 12h10M4 18h16" />
//                 </svg>
//               </label>

//               <ul tabIndex={0} className="
//                 menu dropdown-content mt-3 w-56
//                 rounded-3xl
//                 bg-[#fdfbf7]
//                 border border-[#e2d6bf]
//                 shadow-[0_30px_90px_rgba(143,120,72,0.35)]
//                 p-3
//               ">
//   <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
//   <li><NavLink to="/add-listing" className={linkClass}>Add Listing</NavLink></li>
//   <li><NavLink to="/browse-listing" className={linkClass}>Browse</NavLink></li>
//   <li><NavLink to="/my-listing" className={linkClass}>My Listing</NavLink></li>
// </ul>
//             </div>

//             {/* LOGO */}
//             <div className="flex items-center gap-2 cursor-pointer">
//               <div className="
//                 w-10 h-10 rounded-2xl
//                 bg-gradient-to-br from-[#c9b27c] to-[#8f7848]
//                 grid place-items-center
//                 shadow-[0_10px_40px_rgba(143,120,72,0.6)]
//               ">
//                 <span className="text-black font-bold text-lg"><FaHome></FaHome></span>
//               </div>

//               <span className="text-xl md:text-2xl font-semibold tracking-wide text-[#0b0b0b]">
//                 Find
//                 <span className="text-[#8f7848]">Roomy</span>
//               </span>
//             </div>
//           </div>

//           {/* CENTER */}
//           <nav className="hidden lg:flex gap-2">
//             <NavLink to="/" className={linkClass}>Home</NavLink>
//             <NavLink to="/add-listing" className={linkClass}>Add Listing</NavLink>
//             <NavLink to="/browse-listing" className={linkClass}>Browse</NavLink>
//             <NavLink to="/my-listing" className={linkClass}>My Listing</NavLink>
//           </nav>

//           {/* RIGHT */}
//           <div className="flex items-center gap-4">
//             {user ? (
//               <>
//                 {/* USER */}
//                 <div className="relative group">
//                   <img
//                     src={user.photoURL}
//                     alt="user"
//                     className="
//                       w-11 h-11 rounded-full
//                       ring-2 ring-[#e2d6bf]
//                       group-hover:ring-[#8f7848]
//                       transition
//                     "
//                   />
//                   <div className="
//                     absolute -bottom-14 left-1/2 -translate-x-1/2
//                     opacity-0 group-hover:opacity-100
//                     bg-[#0b0b0b] text-white
//                     text-xs px-4 py-2 rounded-full
//                     shadow-lg transition
//                   ">
//                     {user.displayName || "User"}
//                   </div>
//                 </div>

//                 {/* LOGOUT */}
//                 <button
//                   onClick={handleSignOut}
//                   className="
//                     px-6 py-2.5 rounded-full
//                     text-sm font-medium tracking-wide
//                     bg-gradient-to-r from-[#e6dbc3] to-[#c9b27c]
//                     text-[#0b0b0b]
//                     shadow-[0_12px_40px_rgba(143,120,72,0.55)]
//                     hover:scale-105 transition
//                   "
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <NavLink
//                   to="/login"
//                   className="
//                     px-6 py-2.5 rounded-sm
//                     text-sm
//                     border border-[#c9b27c]
//                     text-black
//                     hover:bg-gradient-to-r from-[#e6dbc3] to-[#c9b27c]

//                     transition
//                   "
//                 >
//                   Login
//                 </NavLink>

//                 <NavLink
//                   to="/register"
//                   className="
//                     px-6 py-2.5 rounded-sm
//                     text-sm
//                     bg-gradient-to-r from-[#e6dbc3] to-[#c9b27c]
//                     text-[#0b0b0b]
//                   "
//                 >
//                   Signup
//                 </NavLink>
//               </>
//             )}
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useContext, useState } from 'react';
// import { AuthContext } from "../../contexts/AuthContext/AuthContext";
// import { Link, NavLink } from 'react-router';
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const { user, signOutUser } = useContext(AuthContext);

//   // const handleSignOut = () => {
//   //   signOutUser().catch(console.log);
//   // };

//   const handleSignOut = () => {
//         signOutUser()
//         .then(()=> {
//             console.log('sign out user');
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Add Listing", path: "/add-listing" },
//     { name: "Browse Listing", path: "/browse-listing" },
//     { name: "My Listing", path: "/my-listing" },
//   ];

//   return (

//       <div className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src="https://i.ibb.co/WWBSf9ns/istockphoto-1884947552-612x612.jpg"
//             alt="logo"
//             className="w-10 h-10 rounded-full"
//           />
//           <span className="text-2xl font-bold text-blue-700">RoomieFind</span>
//         </Link>

//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
//           {navItems.map(({ name, path }) => (
//             <NavLink
//               key={path}
//               to={path}
//               className="relative group transition duration-300 hover:text-blue-600"
//             >
//               {({ isActive }) => (
//                 <span>
//                   {name}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all ${
//                       isActive ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                   ></span>

//                 </span>

//               )}
//             </NavLink>

//           ))}

//         </nav>

//         <div className="hidden md:block">
//           {user ? (
//             <div className="group relative cursor-pointer">
//               <img
//                 src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full border-2 border-blue-500"
//               />
//               <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
//                 <p className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
//                   {user.displayName || "Unknown User"}
//                 </p>
//                 <button
//                   onClick={handleSignOut}
//                   className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="space-x-2">
//               <Link to="/login">
//                 <button className="btn btn-outline btn-primary px-6">
//                   Login
//                 </button>
//               </Link>
//               <Link to="/register">
//                 <button className="btn btn-outline btn-primary px-6">
//                   Register
//                 </button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 space-y-4 shadow-lg">
//           <nav className="flex flex-col gap-3 text-gray-700 font-medium">
//             {navItems.map(({ name, path }) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={({ isActive }) =>
//                   `px-2 py-1 rounded hover:bg-blue-50 ${
//                     isActive ? "text-blue-600 font-semibold" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             ))}
//           </nav>
//           <div>
//             {user ? (
//               <div className="mt-4 flex items-center justify-between border-t pt-4">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
//                     alt="user"
//                     className="w-10 h-10 rounded-full border"
//                   />
//                   <p className="text-gray-700 text-sm font-medium">
//                     {user.displayName || "Unknown User"}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => {

//                     setIsMenuOpen(false);
//                   }}
//                   className="text-sm text-red-500"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="flex gap-2 mt-4">
//                 <Link to="/login">
//                   <button className="btn btn-outline btn-primary w-full">
//                     Login
//                   </button>
//                 </Link>
//                 <Link to="/register">
//                   <button className="btn btn-outline btn-primary w-full">
//                     Register
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>

//   );
// };

// export default Navbar;

// import React, { useContext, useState, useEffect } from "react";
// import { AuthContext } from "../../contexts/AuthContext/AuthContext";
// import { Link, NavLink } from "react-router";
// import { Menu, X, Sun, Moon } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [theme, setTheme] = useState("light");
//   const { user, signOutUser } = useContext(AuthContext);

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => console.log("sign out user"))
//       .catch(console.log);
//   };

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Add Listing", path: "/add-listing" },
//     { name: "Browse Listing", path: "/browse-listing" },
//     { name: "My Listing", path: "/my-listing" },
//   ];

//   return (
//     <div className="sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
//       <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3">
//           <img
//             src="https://i.ibb.co/WWBSf9ns/istockphoto-1884947552-612x612.jpg"
//             alt="logo"
//             className="w-10 h-10 rounded-full ring-2 ring-blue-500"
//           />
//           <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             RoomieFind
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-8 font-medium">
//           {navItems.map(({ name, path }) => (
//             <NavLink
//               key={path}
//               to={path}
//               className={({ isActive }) =>
//                 `relative transition-all ${
//                   isActive
//                     ? "text-blue-600 dark:text-blue-400"
//                     : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
//                 }`
//               }
//             >
//               {name}
//               <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
//             </NavLink>
//           ))}
//         </nav>

//         {/* Right Side */}
//         <div className="hidden md:flex items-center gap-4">

//           {/* Theme Toggle */}
//           <button
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
//           >
//             {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
//           </button>

//           {/* User */}
//           {user ? (
//             <div className="relative group">
//               <img
//                 src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
//                 className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
//                 alt="user"
//               />
//               <div className="absolute right-0 mt-3 w-52 bg-white dark:bg-gray-900 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
//                 <p className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
//                   {user.displayName || "Unknown User"}
//                 </p>
//                 <button
//                   onClick={handleSignOut}
//                   className="w-full text-left px-4 py-3 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="flex gap-2">
//               <Link to="/login">
//                 <button className="btn btn-outline btn-primary">Login</button>
//               </Link>
//               <Link to="/register">
//                 <button className="btn btn-primary">Register</button>
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden flex items-center gap-2">
//           <button
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
//           >
//             {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
//           </button>
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white dark:bg-[#020617] px-4 pb-6 space-y-4 shadow-xl">
//           <nav className="flex flex-col gap-3">
//             {navItems.map(({ name, path }) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={({ isActive }) =>
//                   `px-3 py-2 rounded-lg ${
//                     isActive
//                       ? "bg-blue-100 dark:bg-blue-900 text-blue-600"
//                       : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             ))}
//           </nav>

//           {user ? (
//             <div className="flex items-center justify-between border-t pt-4 dark:border-gray-700">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
//                   className="w-9 h-9 rounded-full"
//                   alt="user"
//                 />
//                 <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                   {user.displayName || "Unknown User"}
//                 </p>
//               </div>
//               <button
//                 onClick={handleSignOut}
//                 className="text-sm text-red-500"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="flex gap-2 pt-4">
//               <Link to="/login" className="w-full">
//                 <button className="btn btn-outline btn-primary w-full">
//                   Login
//                 </button>
//               </Link>
//               <Link to="/register" className="w-full">
//                 <button className="btn btn-primary w-full">
//                   Register
//                 </button>
//               </Link>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Link, NavLink } from "react-router";
import { Menu, X, Sun, Moon, LogOut } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user, signOutUser } = useContext(AuthContext);

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const handleSignOut = () => {
  //   signOutUser().catch(console.log);
  // };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Find Roommate", path: "/add-listing" },
    { name: "Browse Listing", path: "/browse-listing" },
    { name: "My Listing", path: "/my-listing" },
  ];

  return (
    <>
      {/* <header className="sticky top-0 z-[100] w-full border-b border-gray-200/50 dark:border-gray-800 bg-white dark:bg-slate-950/90 backdrop-blur-md"> */}
      <header
        className="sticky top-0 z-50 
bg-white dark:bg-slate-950

border-b border-gray-200 dark:border-gray-800 
transition-colors duration-300"
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-16 md:h-16 flex items-center gap-36 justify-center">
          {/* --- LOGO --- */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-[#e3d8c2] flex items-center justify-center shadow-lg shadow-[#e3d4c2]-500/30 group-hover:rotate-6 transition-all">
              <img
                src="https://i.ibb.co.com/5gsY8v7V/huy-nguyen-AB-q9lw-CVv8-unsplash.jpg"
                alt="logo"
                className="w-full h-full rounded-xl object-cover border-2 border-[#e3d8c2]"
              />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight dark:text-white">
              Roomie<span className="text-[#e3d8c2]">Find</span>
            </span>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative px-5 py-3 text-[15px] font-semibold tracking-wide 
     transition-all duration-300 rounded-md
     ${
       isActive
         ? "text-[#e3d8c2]"
         : "text-gray-600 dark:text-gray-400 hover:text-[#1f1a14] hover:bg-[#e3d8c2]/30"
     }`
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {name}

                    {/* Premium Underline */}
                    <span
                      className={`
          absolute left-0 -bottom-1 h-[2.5px] rounded-full
          transition-all duration-300
          ${
            isActive
              ? "w-full bg-[#e3d8c2] shadow-[0_4px_15px_rgba(227,216,194,0.7)]"
              : "w-0 bg-[#e3d8c2] group-hover:w-full"
          }
        `}
                    ></span>
                  </span>
                )}
              </NavLink>

              // <NavLink
              //   key={path}
              //   to={path}
              //   className={({ isActive }) =>
              //     `px-5 py-2 text-[15px] font-semibold rounded-full transition-all duration-300 ${
              //       isActive
              //         ? "bg-blue-50 text-blue-600 dark:bg-blue-600/10 dark:text-blue-400"
              //         : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white"
              //     }`
              //   }
              // >
              //   {name}
              // </NavLink>
            ))}
          </nav>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <ThemeToggle></ThemeToggle>
            {/* <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2.5 cursor-pointer rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
            >
              {theme === "light" ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} className="text-yellow-500 " />
              )}
            </button> */}

            {/* Auth/Profile */}
            <div className="hidden md:block">
              {user ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 p-1 pl-1  rounded-full bg-gray-100 dark:bg-gray-800 border border-transparent hover:border-blue-500/50 transition-all">
                    <img
                      src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
                      className="w-8 h-8 rounded-full object-cover"
                      alt="avatar"
                    />
                    {/* <span className="text-sm font-bold dark:text-gray-200">
                      {user.displayName?.split(" ")[0]}
                    </span> */}
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-[110]">
                    <div className="px-4 py-3 border-b dark:border-gray-800">
                      <p className="text-[16px] font-bold dark:text-white text-black ">
                        {user.displayName}
                      </p>
                      <p className="text-sm font-bold truncate dark:text-white">
                        {user.email}
                      </p>
                    </div>
                    {/* <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <LayoutDashboard size={16} /> Dashboard
                    </Link> */}
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center cursor-pointer gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                    >
                      <LogOut size={16} /> Log Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  {/* <Link to="/login" className="btn border border-[#e3d8c2] bg-transparent text-[#2f2a22] dark:border-[#e3d8c2]/70 dark:text-[#e3d8c2] hover:bg-[#e3d8c2] hover:text-[#2f2a22] hover:border-[#e3d8c2] transition-colors duration-300">Login</Link> */}
                  <Link
                    to="/login"
                    className="btn border border-[#e3d8c2] bg-transparent text-[#dbc187] dark:border-white/70 dark:text-white hover:bg-[#e3d8c2] hover:text-black hover:border-[#e3d8c2] transition-colors"
                  >
                    Login
                  </Link>
                  <Link to="/register">
                    {/* <button className="btn border border-[#e3d8c2] bg-[#e3d8c2] text-[#2f2a22] dark:bg-[#e3d8c2] dark:text-[#2f2a22] hover:bg-transparent hover:text-[#2f2a22] hover:border-[#e3d8c2] dark:hover:bg-[#e3d8c2] dark:hover:text-[#2f2a22] transition-colors duration-300">
                      Sign Up
                    </button> */}
                    <button className="btn  border border-[#e3d8c2] bg-[#e3d8c2] text-black dark:bg-[#e3d8c2] dark:text-white hover:bg-transparent hover:text-[#e3d8c2] hover:border-[#e3d8c2] dark:hover:bg-[#e3d8c2] dark:hover:text-black transition-colors">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <div
        className={`fixed inset-0 z-[150] lg:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar Content */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-10">
              <span className="font-black text-xl dark:text-white">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 rounded-2xl font-bold transition-all ${
                      isActive
                        ? "bg-[#e3d8c2] text-black shadow-lg shadow-[#a08e6a]/30"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto border-t dark:border-gray-800 pt-6">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 px-2">
                    <img
                      src={user.photoURL}
                      className="w-10 h-10 rounded-full border-2 border-blue-500 p-0.5"
                      alt="user"
                    />
                    <div>
                      <p className="font-bold dark:text-white text-sm">
                        {user.displayName}
                      </p>
                      <p className="text-xs text-gray-500 truncate w-32">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full py-3.5 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-2xl font-bold text-sm active:scale-95 transition-all"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {/* <Link onClick={() => setIsMenuOpen (false)} to="/login" className="w-full">
                    <button className="w-full py-3 text-sm font-bold btn border border-[#e3d8c2] bg-[#e3d8c2] text-[#2f2a22] dark:bg-[#e3d8c2] dark:text-[#2f2a22] hover:bg-transparent hover:text-[#2f2a22] hover:border-[#e3d8c2] dark:hover:bg-[#e3d8c2] dark:hover:text-[#2f2a22] transition-colors duration-300">Login</button>
                  </Link> */}
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    to="/login"
                    className="w-full"
                  >
                    <button className="w-full py-3 btn border border-[#e3d8c2] bg-transparent text-[#dbc187]">
                      Login
                    </button>
                  </Link>
                  {/* <Link to="/register" className="w-full">
                    <button onClick={() => setIsMenuOpen (false)} className="w-full py-3 text-sm font-bold btn border border-[#e3d8c2] bg-transparent text-[#2f2a22] dark:border-[#e3d8c2]/70 dark:text-[#e3d8c2] hover:bg-[#e3d8c2] hover:text-[#2f2a22] hover:border-[#e3d8c2] transition-colors duration-300">Sign Up</button>
                  </Link> */}
                  <Link to="/register" className="w-full">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full py-3 btn  border border-[#e3d8c2] bg-[#e3d8c2] text-black"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
