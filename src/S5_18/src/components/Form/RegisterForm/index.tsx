import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { useContext } from "react";
import {
  TRegisterFormValues,
  userContext,
} from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerFormValidator } from "./registerFormValidator";

const RegisterForm = () => {
  const { doRegister } = useContext(userContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormValidator),
  });

  const registerUser: SubmitHandler<TRegisterFormValues> = (formData) => {
    delete formData.confirm;
    doRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(registerUser)}>
      <Input
        type="name"
        id="name"
        label="Nome"
        {...register("name")}
        error={errors.name}
      />
      <Input
        type="email"
        id="email"
        label="Email"
        {...register("email")}
        error={errors.email}
      />
      <Input
        type="password"
        id="password"
        label="Senha"
        {...register("password")}
        error={errors.password}
      />
      <Input
        type="password"
        id="confirmPassword"
        label="Confirmação de senha"
        {...register("confirm")}
        error={errors.confirm}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
