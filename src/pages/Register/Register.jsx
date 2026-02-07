import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;

        try {
            const result = await createUser(email, password, name, photoUrl);
            console.log('Registered User:', result.user);
            toast.success('Account created successfully!');
            form.reset();
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f7f4ec] px-4">
            <div
                className="
          w-full max-w-md
          bg-white
          rounded-2xl
          border border-[#e5dcc4]
          shadow-[0_20px_50px_rgba(0,0,0,0.08)]
          px-8 py-9
        "
            >
                {/* Title */}
                <h2 className="text-2xl font-semibold text-center text-[#1b1b1b] mb-6">
                    Create your account
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="text-sm font-medium text-[#5c5130]">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter full name"
                            required
                            className="
                                w-full px-4 py-3 border border-gray-300 rounded-md text-black"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#5c5130]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            required
                            className="
                w-full px-4 py-3 border border-gray-300 rounded-md text-black
              "
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-[#5c5130]">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photoUrl"
                            placeholder="Profile image URL"
                            className="
                w-full px-4 py-3 border border-gray-300 rounded-md text-black
              "
                        />
                    </div>

                    {/* Password with Eye Toggle */}
                    <div className="relative">
                        <label className="text-sm font-medium text-[#5c5130]">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter password"
                            required
                            className="
                w-full px-4 py-3 border border-gray-300 rounded-md text-black
              "
                        />

                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="
                absolute right-3 top-[40px]
                text-[#8f7848]
                cursor-pointer
                hover:opacity-80
              "
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className='pt-2'>
                        <button
                            type="submit"
                            className="
              w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition 
            "
                        >
                            Register
                        </button>
                    </div>
                </form>

                {/* OR Divider */}
                <div className="my-5 flex items-center">
                    <div className="flex-grow h-px bg-[#e1d8be]" />
                    <span className="mx-4 text-xs font-medium text-[#7a6a3f]">
                        OR
                    </span>
                    <div className="flex-grow h-px bg-[#e1d8be]" />
                </div>
                <div className="flex justify-center">
                    <SocialLogin />
                </div>
                <p className="mt-6 text-center text-sm text-[#6b5a34]">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="font-medium text-[#8f7848] hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
