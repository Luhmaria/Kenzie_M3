import StyledSection from "./style";

const UserSection = ({ username, userModule }) => {
  return (
    <StyledSection>
      <div>
        <h2>Olá, {username}</h2>
        <small>{userModule}</small>
      </div>
    </StyledSection>
  );
};

export default UserSection;
