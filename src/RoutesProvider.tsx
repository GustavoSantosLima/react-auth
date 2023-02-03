import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

const privateComponents = (component: JSX.Element) => {
  return <ProtectedLayout>{component}</ProtectedLayout>;
};

function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={privateComponents(<Home />)} />
      <Route path="/profile" element={privateComponents(<Profile />)} />
      <Route path="/contact" element={privateComponents(<Contact />)} />
      <Route path="/about" element={privateComponents(<About />)} />

      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default RoutesProvider;
