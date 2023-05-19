import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export const UserContext = createContext({});

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { resetField } = useForm();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("@TOKEN");
        if (token) {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const userData = await api.get("/profile");
          setUser(userData.data);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem("@TOKEN");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const doLogin = async (formData) => {
    try {
      const userInfo = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", userInfo.data.token);
      api.defaults.headers.common.authorization = `Bearer ${userInfo.data.token}`;
      localStorage.setItem("@USERID", userInfo.data.user.id);
      setUser(userInfo.data.user);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Dados inválidos. Tente novamente", {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  const doRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      toast("Redirecionado a tela de login", {
        duration: 4000,
        position: "top-right",
      });
      toast.success("Conta criada com sucesso!", {
        duration: 4000,
        position: "top-right",
      });
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        doLogin,
        user,
        setUser,
        loading,
        logout,
        doRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
