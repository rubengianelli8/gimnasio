import { useMutation } from "@apollo/client";
import { ADD_GYM } from "src/data/mutations/gym";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validationSchema } from "./validation-schema";

const NewGym = () => {
  const [addGym] = useMutation(ADD_GYM);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(validationSchema(edit)),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      NewGym
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
};

export default NewGym;
