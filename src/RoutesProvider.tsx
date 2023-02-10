import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default RoutesProvider;
