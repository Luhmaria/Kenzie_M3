import { useForm } from "react-hook-form";
import StyledButton from "../../styles/StyledButton";
import Input from "../Input";
import { Toaster } from "react-hot-toast";
import FormSchema from "./FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const RegisterForm = () => {
  const { doRegister } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

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
      <form onSubmit={handleSubmit(doRegister)}>
        <fieldset>
          <legend>Crie sua conta</legend>
          <small>Rapido e grátis, vamos nessa</small>
          <Input
            id="Nome"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Input
            id="Email"
            type="email"
            placeholder="Digite aqui seu e-mail"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <Input
            id="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <Input
            id="Confirme a Senha"
            type="password"
            placeholder="Confirme a senha escolhida"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && (
            <span>{errors.passwordConfirm.message}</span>
          )}
          <Input
            id="Bio"
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          {errors.bio && <span>{errors.bio.message}</span>}
          <Input
            id="Contato"
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact && <span>{errors.contact.message}</span>}
          <label htmlFor="course_module">Selecionar Módulo</label>
          <select
            name="course_module"
            id="course_module"
            {...register("course_module")}
          >
            <option value="">Selecione o módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </select>
          {errors.course_module && <span>{errors.course_module.message}</span>}

          <StyledButton backgroundColor="primary" type="submit">
            Cadastrar
          </StyledButton>
        </fieldset>
      </form>
    </>
  );
};

export default RegisterForm;
