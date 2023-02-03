import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { getUserLocalStorage } from "../../contexts/AuthProvider/util";
import Menu from "../Layout/Menu";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.token) {
    return <Navigate to="/login" />;
  }

  return (
    <main id="main">
      <Menu />

      <div>{children}</div>
    </main>
  );
};
