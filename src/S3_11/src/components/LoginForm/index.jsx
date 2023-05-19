import { useForm } from "react-hook-form";
import StyledButton from "../../styles/StyledButton";
import StyledLink from "../../styles/StyledLink";
import Input from "../Input";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const LoginForm = () => {
  const { doLogin } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            background: " #343B41",
            color: "#F8F9FA",
          },
        }}
      />
      <form onSubmit={handleSubmit(doLogin)}>
        <fieldset>
          <legend>Login</legend>
          <Input
            id="Email"
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && <span>Digite seu e-mail</span>}
          <Input
            id="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <span>Digite sua senha</span>
          )}
          <StyledButton backgroundColor="primary" type="submit">
            Entrar
          </StyledButton>
          <small>Ainda não possui uma conta?</small>
          <StyledLink type="large" to={"/register"}>
            Cadastre-se
          </StyledLink>
        </fieldset>
      </form>
    </>
  );
};
export default LoginForm;
