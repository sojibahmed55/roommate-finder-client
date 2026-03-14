import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const loaction = useLocation();
  const navigate = useNavigate();

  const from = loaction.state?.from || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          title: "Login Successful 🎉",
          text: "Welcome! You are now logged in with Google.",
          icon: "success",
          confirmButtonColor: "#8f7848",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          // navigate("/");
          navigate(from);
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message.replace("Firebase: Error ", ""),
          confirmButtonColor: "#d33",
        });
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
