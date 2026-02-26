import React, { use, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
   px-4"
    >
      <div
        className="
      w-full max-w-md
      bg-white
      dark:bg-slate-900
      rounded-2xl
      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      
      px-8 py-9
    "
      >
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-[#1b1b1b] dark:text-white mb-6">
          Login to your account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-sm font-medium text-[#5c5130] dark:text-gray-300 transition-colors duration-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="
          w-full px-4 py-3 border border-gray-300 rounded-md text-black  bg-white dark:border-gray-600 dark:text-white dark:bg-slate-800 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300  
          "
              required
            />
          </div>

          <div className="relative">
            <label className="text-sm font-medium text-[#5c5130] dark:text-gray-300 transition-colors duration-300">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-black bg-white dark:border-gray-600 dark:text-white dark:bg-slate-800 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="
                          absolute right-3 top-10
                          text-[#8f7848] dark:text-white
                          cursor-pointer
                          hover:opacity-80
                        "
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="
          w-full py-3 bg-[#e3d8c2] text-black rounded-md font-semibold cursor-pointer text-sm hover:bg-[#d6c8aa] hover:shadow-[0_14px_40px_rgba(143,120,72,0.4)] transition-all dark:hover:shadow-[0_20px_60px_rgba(214,192,138,0.45)] dark:hover:scale-[1.02] duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center">
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
          <span className="mx-4 text-xs font-medium text-gray-500 dark:text-gray-400">
            OR
          </span>
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Social Login (Component only) */}
        <div className="flex justify-center">
          <SocialLogin />
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="font-medium text-[#8f7848] hover:underline dark:text-[#caaa65]  transition-colors duration-300"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
