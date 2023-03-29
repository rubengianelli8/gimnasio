import { useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";

import toast from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation-schema";

import { ADD_USER, UPDATE_USER } from "src/data/mutations/user.gql";

import Input from "@/components/input";
import SelectComponent from "@/components/select";
import Checkbox from "@/components/checkbox";
import Button from "@/components/button";
import Router from "next/router";
import Title from "@/components/title";

const NewTeacher = ({ countries, user }) => {
  const [addUser] = useMutation(ADD_USER);
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const {
    handleSubmit,
    register,
    watch,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(validationSchema(user ? true : false)),
    defaultValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      phone_number: user?.phone_number,
    },
  });

  useEffect(() => {
    if (error?.message === "userExist")
      setError("email", {
        type: "string",
        message: "El email ingresado ya existe",
      });
  }, [error]);
  const onSubmit = async (data) => {
    const newData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      phone_number: data.phone_number,
    };
    try {
      if (!user)
        await addUser({
          variables: { ...newData, user_type: "teacher" },
        });
      if (user) {
        await updateUser({
          variables: { id: user.id, ...newData },
        });
      }
      toast.success("Profesor cargado");
      Router.push("/dashboard/teachers");
    } catch (e) {
      console.log(e);
      toast.error("ha ocurrido un error");
    }
  };
  return (
    <section className="">
      <div className="w-[90vw] flex mx-auto">
        <Title
          title={
            user
              ? "Editar profesor " + user.first_name
              : "Agregar nuevo Profesor"
          }
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-[90vw] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[15px] md:gap-3">
          <div className="">
            <div className="grid grid-cols-2 gap-3">
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
                disabled={user ? true : false}
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
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <Button
            type="submit"
            label={user ? "Actualizar profesor" : "Crear profesor"}
            color="primary"
          />
        </div>
      </form>
    </section>
  );
};

export default NewTeacher;
