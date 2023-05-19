import { z } from "zod";

const FormSchema = z.object({
  title: z.string().nonempty("Digite o nome da tecnologia"),
  status: z.enum(["Iniciante", "Intermediário", "Avançado"], {
    errorMap: () => ({ message: "Selecione um Status" }),
  }),
});

export default FormSchema;
