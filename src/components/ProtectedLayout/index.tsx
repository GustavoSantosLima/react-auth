import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import Menu from "../Layout/Menu";

export const ProtectedLayout = () => {
  const auth = useAuth();

  if (!auth.token) {
    return <Navigate to="/login" />;
  }

  return (
    <main id="main">
      <Menu />
      <Outlet />
    </main>
  );
};
