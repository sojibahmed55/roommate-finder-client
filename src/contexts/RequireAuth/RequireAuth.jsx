import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";

const RequireAuth = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user && !loading) {
      Swal.fire({
        title: "Login Required",
        text: "Please login to access this page.",
        icon: "info",
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
      }).then(() => {
        navigate("/login", { state: { from: location.pathname } });
      });
    }
  }, [user, loading, navigate, location.pathname]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return children;
};

export default RequireAuth;
