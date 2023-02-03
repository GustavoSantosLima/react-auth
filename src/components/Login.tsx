import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider/useAuth";
import { getUserLocalStorage } from "../contexts/AuthProvider/util";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      navigate("/");
    }
  }, []);

  const onFinish = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await auth.authenticate(email, password);

      navigate("/profile");
    } catch (e) {
      console.error("E-mail ou senha incorretos!");
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center bg-gray-100">
      <form
        onSubmit={onFinish}
        className="p-8 flex flex-col gap-6 shadow-sm bg-white rounded-md"
      >
        <div className="flex w-96 justify-end items-center gap-1">
          <label htmlFor="email" className="w-16 text-right">
            Email:
          </label>
          <input
            value={email}
            type="email"
            name="email"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
            className="w-full px-2 py-1 bg-gray-100 rounded-md"
          />
        </div>
        <div className="flex justify-end items-center gap-1">
          <label htmlFor="password" className="w-16 text-right">
            Senha:
          </label>
          <input
            value={password}
            type="password"
            name="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            className="w-full px-2 py-1 bg-gray-100 rounded-md"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
