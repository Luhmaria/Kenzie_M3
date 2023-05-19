import { z } from "zod";

export const registerFormValidator = z
  .object({
    name: z.string().nonempty("Digite um nome"),
    email: z
      .string()
      .nonempty("Digite um e-mail")
      .email("O e-mail precisa ser válido"),
    password: z
      .string()
      .min(7, "A senha precisa de ao menos 7 caracteres")
      .regex(/(?=.*?[A-Z])/, "Inlua pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "Inlua pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "Inlua pelo menos um número")
      .regex(
        /(?=.*?[!@#$%^&*()_+={}\[\]|\\;:'",<.>\/?])/,
        "Inlua pelo menos um caractere especial"
      ),
    confirm: z.string().nonempty("Confirme sua senha"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam corresponder",
    path: ["confirm"],
  });
