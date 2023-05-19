import { z } from "zod";

const FormSchema = z
  .object({
    name: z.string().min(1, "Digite um nome"),
    email: z
      .string()
      .min(1, "Informe um endereço de e-mail")
      .email("O e-mail digitado é inválido"),
    password: z
      .string()
      .min(8, {
        message: "A senha precisa de ao menos 8 caracteres",
      })
      .regex(/(?=.*?[A-Z])/, "Inlua pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "Inlua pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "Inlua pelo menos um número")
      .regex(
        /(?=.*?[!@#$%^&*()_+={}\[\]|\\;:'",<.>\/?])/,
        "Inlua pelo menos um caractere especial"
      ),
    passwordConfirm: z.string().min(1, "Confirme sua senha"),
    bio: z.string().min(1, "Escreva uma bio"),
    contact: z.string().min(1, "Informe um contato"),
    course_module: z.enum(
      [
        "Primeiro módulo (Introdução ao Frontend)",
        "Segundo módulo (Frontend Avançado)",
        "Terceiro módulo (Introdução ao Backend)",
        "Quarto módulo (Backend Avançado)",
      ],
      { errorMap: () => ({ message: "Selecione um módulo" }) }
    ),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: "As senhas não correspondem",
    path: ["passwordConfirm"],
  });

export default FormSchema;
