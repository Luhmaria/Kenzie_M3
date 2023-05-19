import { z } from "zod";

const FormSchema = z.object({
  status: z.enum(["Iniciante", "Intermediário", "Avançado"], {
    errorMap: () => ({ message: "Selecione um Status" }),
  }),
});

export default FormSchema;
