import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {

  const { signInUser } = use(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    signInUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })

  }

  return (
    //     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
    //   <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-yellow-400/40">

    //     <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
    //       Login
    //     </h2>

    //     <form onSubmit={handleSubmit} className="space-y-5">

    //       <div>
    //         <label className="text-gray-700 font-medium">Email</label>
    //         <input
    //           type="email"
    //           name='email'
    //           className="w-full mt-2 px-4 py-3 rounded-lg border border-yellow-300/60 focus:border-yellow-500 outline-none"
    //           placeholder="Enter email"
    //         />
    //       </div>

    //       <div>
    //         <label className="text-gray-700 font-medium">Password</label>
    //         <input
    //           type="password"
    //           name='password'
    //           className="w-full mt-2 px-4 py-3 rounded-lg border border-yellow-300/60 focus:border-yellow-500 outline-none"
    //           placeholder="Enter password"
    //         />
    //       </div>

    //       <button className="w-full py-3 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition">
    //         Login
    //       </button>
    //     </form>
    //     <SocialLogin></SocialLogin>

    //     <p className="text-center mt-4 text-gray-700">
    //       Don't have an account?{" "}
    //       <a href="/register" className="text-yellow-700 font-medium hover:underline">
    //         Register
    //       </a>
    //     </p>

    //   </div>
    // </div>
    <div className="min-h-screen flex items-center justify-center 
   px-4">

      <div
        className="
      w-full max-w-md
      bg-white
      rounded-2xl
      shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      border border-[#e5dcc4]
      px-8 py-9
    "
      >
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-[#1b1b1b] mb-6">
          Login to your account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">

          <div>
            <label className="text-sm font-medium text-[#5c5130]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="
          w-full px-4 py-3 border border-gray-300 rounded-md text-black  
          "
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#5c5130]">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          <div className='pt-2'>
            <button
            type="submit"
            className="
          w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition
        "
          >
            Login
          </button>
          </div>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center">
          <div className="flex-grow h-px bg-[#e1d8be]" />
          <span className="mx-4 text-xs font-medium text-[#7a6a3f]">
            OR
          </span>
          <div className="flex-grow h-px bg-[#e1d8be]" />
        </div>

        {/* Social Login (Component only) */}
        <div className="flex justify-center">
          <SocialLogin />
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-[#6b5a34]">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="font-medium text-[#8f7848] hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>

  );
};

export default Login;