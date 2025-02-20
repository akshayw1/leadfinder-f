import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import getUserInfo from "../utils/getUserInfo";
import AdminPage from "./AdminPage";

const AdminProtectedRoute = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Redux authentication state
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  
  // Fetch user info
  const userInfo = getUserInfo();

  useEffect(() => {
    // Check authentication status first
    if (!isAuthenticated) {
      alert("Please log in to access this page");
      navigate("auth/login");
      return;
    }

    // Check if user is an admin
    const checkIsAdmin = 
      userInfo.data?.isAdmin?.admin === true || 
      userInfo.data?.email === "akshaywaghmarecc@gmail.com";

    setIsAdmin(checkIsAdmin);

    // If not admin, we don't need to do anything else here 
    // as the rendering logic will handle it
  }, [isAuthenticated, userInfo, navigate]);

  // If not authenticated or not an admin, render AdminPage
  if (!isAuthenticated || !isAdmin) {
    return <AdminPage />;
  }

  // Render child routes if authenticated and authorized
  return <Outlet />;
};

export default AdminProtectedRoute;