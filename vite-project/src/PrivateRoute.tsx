import { Navigate, Outlet } from "react-router-dom";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./pages/LoginPage/Login";

const PrivateRoute = (prop: any) => {
  const token = localStorage.getItem("token");
  console.log("Private");

  return token ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateRoute;
