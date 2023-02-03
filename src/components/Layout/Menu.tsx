import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

const Menu = () => {
  const auth = useAuth();

  return (
    <div className="flex px-2 justify-between items-center bg-blue-700 text-white">
      <div className="px-4">
        <span className="text-gray-300">Logo</span>
      </div>

      <nav className="flex px-2 flex-1 gap-4">
        <Link className="p-2 hover:underline" to="/">
          Home
        </Link>
        <Link className="p-2 hover:underline" to="/profile">
          Profile
        </Link>
        <Link className="p-2 hover:underline" to="/contact">
          Contato
        </Link>
        <Link className="p-2 hover:underline" to="/about">
          Sobre
        </Link>
      </nav>

      <button className="px-4" onClick={() => auth.logout()}>
        Sair
      </button>
    </div>
  );
};

export default Menu;
