import { useState } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validationSchema } from "./validation-schema";
import { ADD_USER } from "src/data/mutations/user.gql";

import Input from "@/components/input";
import Button from "@/components/button";
import Error from "@/components/error";
import Modal from "@/components/modal";

const AddClient = () => {
  const [error, setError] = useState({ message: "" });
  const [openModal, setOpenModal] = useState(false);
  const [addUser] = useMutation(ADD_USER);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(validationSchema()),
  });

  const onSubmit = (data) => {
    addUser({
      variables: {
        ...data,
        user_type: "client",
      },
    })
      .then(() => setOpenModal(true))
      .catch((err) => {
        console.log(err);
        if (err.message === "userExist")
          setError({ message: "El email ingresado ya existe" });
      });
  };
  return (
    <>
      <Modal
        title="Cliente creado"
        text="El cliente fue creado correctamente"
        accept="ACEPTAR"
        action={() => Router.push("/dashboard/clients")}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <div>
        <h2 className="text-center text-[30px] font-bold text-primary underline mb-[10px]">
          Agregar cliente
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full md:w-3/5 mx-auto"
        >
          <div className="px-3 w-full">
            <Error message={error.message} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 w-full">
            <Input
              type="text"
              label="Nombre(*)"
              placeholder="Nombre*"
              name="first_name"
              register={register}
              error={errors.first_name}
            />
            <Input
              type="text"
              label="Apellido(*)"
              placeholder="Apellido*"
              name="last_name"
              register={register}
              error={errors.last_name}
            />
            <Input
              type="text"
              label="Email(*)"
              placeholder="Email*"
              name="email"
              register={register}
              error={errors.email}
            />
            <Input
              type="password"
              label="Password(*)"
              placeholder="Password*"
              name="password"
              register={register}
              error={errors.password}
            />
            <Input
              type="number"
              label="Numero de telefono"
              placeholder="3408 45-6572"
              name="phone_number"
              register={register}
              error={errors.phone_number}
            />
          </div>
          <div>
            <Button type="submit" label="Agregar cliente" color="primary" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClient;
