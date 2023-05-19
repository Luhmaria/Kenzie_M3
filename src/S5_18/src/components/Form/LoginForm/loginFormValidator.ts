import { z } from "zod";

export const LoginFormValidator = z.object({
  email: z
    .string()
    .nonempty("Digite um e-mail")
    .email("O e-mail precisa ser válido"),
  password: z.string().nonempty("Digite sua senha"),
});

export type TLoginFormValues = z.infer<typeof LoginFormValidator>;
