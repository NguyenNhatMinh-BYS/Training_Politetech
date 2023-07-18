import useAuth from "@/hooks/useAuth";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const AdminAuth = () => {
  const { auth } = useAuth();
  console.log(auth);

  const location = useLocation();
  return auth === "Admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default AdminAuth;
