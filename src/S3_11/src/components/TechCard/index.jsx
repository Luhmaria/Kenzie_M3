import { useContext, useState } from "react";
import { TechContext } from "../../providers/TechProvider";

const TechCard = ({ tech }) => {
  const { setEditModalVisibility, userTechs, setCurrentTech, CurrentTech } =
    useContext(TechContext);

  const openEditModal = (event) => {
    const techIndex = event.target.id;
    const tech = userTechs.find((tech) => tech.id == techIndex);
    setCurrentTech(tech);
    setEditModalVisibility(true);
  };
  return (
    <li onClick={(event) => openEditModal(event)} id={tech.id}>
      <h3>{tech.title}</h3>
      <small>{tech.status}</small>
    </li>
  );
};

export default TechCard;
