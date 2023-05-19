import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TLoginFormValues } from "../../components/Form/LoginForm/loginFormValidator";
import api from "../../services/api";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUser {
  id: string;
  name: string;
  email: string;
}

interface iUserContext {
  user: iUser | null;
  doRegister: (formData: TRegisterFormValues) => Promise<void>;
  doLogin: (formData: TLoginFormValues) => Promise<void>;
  doLogout: () => void;
}

interface iUserResponse {
  accessToken: string;
  user: iUser;
}

export type TRegisterFormValues = {
  name: string;
  email: string;
  password: string;
  confirm?: string;
};

export const userContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID");
        if (token) {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data: userData } = await api.get(`/users/${id}`);
          setUser(userData);
          navigate("/shop");
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        navigate("/");
      }
    };

    loadUser();
  }, []);

  const doRegister = async (formData: TRegisterFormValues) => {
    try {
      const { data: userInfo } = await api.post<iUserResponse>(
        "users",
        formData
      );
      toast.success("Cadastro realizado com sucesso");
      navigate("/");
    } catch (error) {
      const currentError = error as AxiosError<string>;
      if (currentError.response?.data.includes("Email")) {
        toast.error("Email já cadastrado");
      } else {
        console.log(error);
      }
    }
  };

  const doLogin = async (formData: TLoginFormValues) => {
    try {
      const { data: userInfo } = await api.post<iUserResponse>(
        "login",
        formData
      );
      toast.success("Login efetuado com sucesso");
      api.defaults.headers.common.authorization = `Bearer ${userInfo.accessToken}`;
      localStorage.setItem("@TOKEN", userInfo.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(userInfo.user.id));
      setUser(userInfo.user);
      navigate("/shop");
    } catch (error) {
      toast.error("Dados inválidos. Tente novamente");
    }
  };

  const doLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <userContext.Provider value={{ user, doRegister, doLogin, doLogout }}>
      {children}
    </userContext.Provider>
  );
};
