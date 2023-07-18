import useAuth from "@/hooks/useAuth";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const NormalAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth === "Normal" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default NormalAuth;
