import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { signInWithGoogle } = use(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="
    w-full
    cursor-pointer flex items-center justify-center gap-3
    py-3.5
    rounded-2xl
    border border-[#e6dcc2]
    text-[#1b1b1b] dark:text-white
    font-medium text-sm
    
  "
    >
      <span
        className="
      flex items-center justify-center
      w-6 h-6
      rounded-full
      bg-white

      shadow-sm
    "
      >
        <FcGoogle className="text-2xl" />
      </span>

      <span className="tracking-wide">Continue with Google</span>
    </button>
  );
};

export default SocialLogin;
