import { useContext } from "react";
import { TechContext } from "../../providers/TechProvider";
import StyledButton from "../../styles/StyledButton";
import Input from "../Input";
import StyledFormModal from "../../styles/StyledFormModal";
import StyledNewModalContainer from "../../styles/StyledModalContainer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSchema from "./FormSchema";

const EditTechModal = ({ tech }) => {
  const { setEditModalVisibility, editTechStatus, deleteTech } =
    useContext(TechContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });
  return (
    <StyledNewModalContainer>
      <StyledFormModal role="dialog" onSubmit={handleSubmit(editTechStatus)}>
        <button
          className="closeButton"
          type="button"
          onClick={() => setEditModalVisibility(false)}
        >
          X
        </button>
        <legend>Tecnologia detalhes</legend>
        <fieldset>
          <Input id="Tecnologia" value={tech.title} disabled />
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            defaultValue={tech.status}
            {...register("status")}
          >
            <option value="">Selecione o status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && <span>{errors.status.message}</span>}
          <div>
            <StyledButton backgroundColor="primary">
              Salvar alterações
            </StyledButton>
            <StyledButton
              backgroundColor="secondary"
              size="50%"
              type="button"
              onClick={() => deleteTech()}
            >
              Excluir
            </StyledButton>
          </div>
        </fieldset>
      </StyledFormModal>
    </StyledNewModalContainer>
  );
};

export default EditTechModal;
