import Header from "../../components/Header";
import UserSection from "../../components/UserSection";
import StyledButton from "../../styles/StyledButton";
import StyledDashboardMain from "./StyledDashboardMain";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Navigate } from "react-router-dom";
import plus from "../../assets/images/plus.svg";
import { TechContext } from "../../providers/TechProvider";
import TechCard from "../../components/TechCard";
import EditTechModal from "../../components/EditTechModal";
import NewTechModal from "../../components/NewTechModal";

const DashboardPage = () => {
  const { user, loading, logout } = useContext(UserContext);
  const {
    userTechs,
    editModalVisibility,
    registerModalVisibility,
    setRegisterModalVisibility,
    currentTech,
  } = useContext(TechContext);

  if (loading) {
    return <div>Carregando...</div>;
  }
  if (user == null) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header
        styleType="fullPage"
        children={
          <StyledButton onClick={logout} size="small">
            Sair
          </StyledButton>
        }
      ></Header>
      <UserSection username={user.name} userModule={user.course_module} />
      <StyledDashboardMain>
        <section>
          <h2>Tecnologias</h2>
          <StyledButton
            size="small"
            onClick={() => setRegisterModalVisibility(true)}
          >
            <img src={plus} alt="" />
          </StyledButton>
        </section>
        <ul>
          {userTechs.length == 0 ? (
            <li>
              <h3>
                Você não possui nenhuma tecnologia cadastrada. Cadastre clicando
                no botão "+"
              </h3>
            </li>
          ) : (
            userTechs.map((tech) => <TechCard key={tech.id} tech={tech} />)
          )}
        </ul>
      </StyledDashboardMain>
      {editModalVisibility ? <EditTechModal tech={currentTech} /> : null}
      {registerModalVisibility ? <NewTechModal /> : null}
    </>
  );
};

export default DashboardPage;
