import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");
  // console.log("Public");

  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
