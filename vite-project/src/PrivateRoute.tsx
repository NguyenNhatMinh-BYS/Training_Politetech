import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = (prop: any) => {
  const token = localStorage.getItem("token");
  // console.log("Private");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
