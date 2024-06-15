import { z } from "zod";

const signUpValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    email: z.string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    }),
    password: z.string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    }),
    phone: z.string({
      required_error: "Phone is required",
      invalid_type_error: "Phone must be a string",
    }),
    role: z.enum(["user", "admin"]),
    address: z.string({
      required_error: "Address is required",
      invalid_type_error: "Address must be a string",
    }),
  }),
});

const logInValidationSchema = z.object({
  body:z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      }),
      password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      }),
  })
});

export const AuthValidation = {
  signUpValidationSchema,
  logInValidationSchema,
};
