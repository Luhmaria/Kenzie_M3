import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import StyledLink from "../../styles/StyledLink";
import StyledMain from "../../styles/StyledMain";

const RegisterPage = () => {
  return (
    <StyledMain>
      <Header
        styleType="centered"
        children={<StyledLink to={"/login"}>Voltar</StyledLink>}
      ></Header>
      <RegisterForm />
    </StyledMain>
  );
};
export default RegisterPage;
