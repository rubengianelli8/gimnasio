import * as yup from "yup";

export const validationSchema = () => {
  return yup
    .object({
      email: yup.string().required(),
      password: yup.string().required(),
    })
    .required();
};
