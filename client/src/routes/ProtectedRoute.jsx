import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth, loading } = useAuth();

  if (loading) return null; // or loader
  console.log(isAuth);

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
