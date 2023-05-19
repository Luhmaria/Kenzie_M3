import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { userContext } from "../../../providers/UserContext";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input";
import { LoginFormValidator, TLoginFormValues } from "./loginFormValidator";

const LoginForm = () => {
  const { doLogin } = useContext(userContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(LoginFormValidator),
  });

  const loginUser: SubmitHandler<TLoginFormValues> = (formData) => {
    doLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(loginUser)}>
      <Input
        id="Email"
        type="email"
        label="Email"
        {...register("email")}
        error={errors.email}
      />
      <Input
        id="senha"
        type="password"
        label="Senha"
        {...register("password")}
        error={errors.password}
      />
      <StyledButton $buttonSize="default" $buttonStyle="green">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
