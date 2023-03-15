import * as yup from "yup";

export const validationSchema = (edit) => {
  const yupObject = {
    //usuario

    email: yup
      .string()
      .email("Ingrese un email valido")
      .required("Este campo es requerido"),
    password: !edit
      ? yup
          .string()
          .min(6, "La contraseña debe tener 6 caracteres como minimo")
          .required("Este campo es requerido")
      : yup.string().notRequired(),
    first_name: yup.string().required("Este campo es requerido"),
    last_name: yup.string().required("Este campo es requerido"),
    phone_number: yup.string().notRequired(),

    //gimnasio
    name: yup.string().required("Este campo es requerido"),
    address: yup.string().notRequired(),
    country: yup.string().required("Este campo es requerido"),
    city: yup.string().required("Este campo es requerido"),
    isClient: yup.boolean().notRequired(),
  };

  return yup.object(yupObject).required();
};
