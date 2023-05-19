import { useContext } from "react";
import { TechContext } from "../../providers/TechProvider";
import StyledButton from "../../styles/StyledButton";
import Input from "../Input";
import StyledFormModal from "../../styles/StyledFormModal";
import StyledNewModalContainer from "../../styles/StyledModalContainer";
import FormSchema from "./FormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster } from "react-hot-toast";

const NewTechModal = () => {
  const { setRegisterModalVisibility, insertNewTech } = useContext(TechContext);
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
      <StyledNewModalContainer>
        <StyledFormModal role="dialog" onSubmit={handleSubmit(insertNewTech)}>
          <button
            className="closeButton"
            type="button"
            onClick={() => setRegisterModalVisibility(false)}
          >
            X
          </button>
          <legend>Cadastrar Tecnologia</legend>
          <fieldset>
            <Input
              id="Nome"
              placeholder="Titulo da tecnologia"
              {...register("title")}
            />
            {errors.title && <span>{errors.title.message}</span>}
            <label htmlFor="status">Status</label>
            <select name="status" id="status" {...register("status")}>
              <option value="">Selecione o status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            {errors.status && <span>{errors.status.message}</span>}
            <div>
              <StyledButton backgroundColor="primary" type="submit">
                Cadastrar Tecnologia
              </StyledButton>
            </div>
          </fieldset>
        </StyledFormModal>
      </StyledNewModalContainer>
    </>
  );
};

export default NewTechModal;
