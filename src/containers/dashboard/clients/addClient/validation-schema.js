import * as yup from "yup";

export const validationSchema = () => {
  return yup
    .object({
      email: yup
        .string()
        .email("Ingrese un email valido")
        .required("Este campo es requerido"),
      password: yup
        .string()
        .min(6, "La contraseña debe tener 6 caracteres como minimo")
        .required("Este campo es requerido"),
      first_name: yup.string().required("Este campo es requerido"),
      last_name: yup.string().required("Este campo es requerido"),
      phone_number: yup.string().notRequired(),
    })
    .required();
};
