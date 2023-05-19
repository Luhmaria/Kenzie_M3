import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-hot-toast";
import { UserContext } from "./UserProvider";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [currentTech, setCurrentTech] = useState(null);
  const [userTechs, setUserTechs] = useState([]);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [registerModalVisibility, setRegisterModalVisibility] = useState(false);

  useEffect(() => {
    if (user != null) {
      setUserTechs(user.techs);
    }
  }, [user]);

  const insertNewTech = async (formData) => {
    try {
      const newTech = await api.post("/users/techs", formData);
      setUserTechs([...userTechs, newTech.data]);
      setRegisterModalVisibility(false);
      toast.success("Tecnologia cadastrada com sucesso", {
        duration: 4000,
        position: "top-right",
      });
    } catch (error) {
      toast.error("Tecnologia já cadastrada", {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  const editTechStatus = async (formData) => {
    try {
      const update = await api.put(`/users/techs/${currentTech.id}`, formData);
      const techIndex = userTechs.findIndex(
        (tech) => tech.id == currentTech.id
      );
      const updatedTechs = userTechs.toSpliced(techIndex, 1, update.data);
      setUserTechs(updatedTechs);
      setEditModalVisibility(false);
      toast.success("Atualização realizada com sucesso", {
        duration: 4000,
        position: "top-right",
      });
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente", {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  const deleteTech = async () => {
    try {
      await api.delete(`/users/techs/${currentTech.id}`);
      setUserTechs(userTechs.filter((tech) => tech.id != currentTech.id));
      setEditModalVisibility(false);
      toast.success("Tecnologia excluida com sucesso", {
        duration: 4000,
        position: "top-right",
      });
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente", {
        duration: 4000,
        position: "top-right",
      });
    }
  };
  return (
    <TechContext.Provider
      value={{
        userTechs,
        editModalVisibility,
        registerModalVisibility,
        setRegisterModalVisibility,
        setEditModalVisibility,
        currentTech,
        setCurrentTech,
        insertNewTech,
        editTechStatus,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
