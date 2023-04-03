import { useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";

import toast from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation-schema";

import { ADD_GYM, UPDATE_GYM } from "src/data/mutations/gym";
import { GET_CITIES } from "src/data/queries/location.gql";

import Input from "@/components/input";
import SelectComponent from "@/components/select";
import Checkbox from "@/components/checkbox";
import Button from "@/components/button";
import Router from "next/router";
import Title from "@/components/title";

const NewGym = ({ countries, gym }) => {
  const [addGym, { error: errorAdd }] = useMutation(ADD_GYM);
  const [updateGym, { error }] = useMutation(UPDATE_GYM);

  const [getCities, { data }] = useLazyQuery(GET_CITIES);
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    control,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(validationSchema(gym ? true : false)),
    defaultValues: {
      name: gym?.name,
      address: gym?.address,
      country: gym?.city.countryId,
      city: gym?.city.id,
      price: gym?.price,
      isClient: gym?.isClient,
      first_name: gym?.admin.first_name,
      last_name: gym?.admin.last_name,
      email: gym?.admin.email,
      phone_number: gym?.admin.phone_number,
    },
  });

  useEffect(() => {
    const id_country = getValues("country");
    if (id_country) {
      getCities({
        variables: {
          idCountry: parseInt(id_country),
        },
      });
    }
  }, [watch("country")]);

  useEffect(() => {
    if ([error?.message, errorAdd?.message].includes("userExist"))
      setError("email", {
        type: "string",
        message: "El email ingresado ya existe",
      });
  }, [error, errorAdd]);
  const onSubmit = async (data) => {
    //addGym({ variables: {} });
    const newData = {
      name: data.name,
      address: data.address,
      country: parseInt(data.country),
      cityId: parseInt(data.city),
      isClient: data.isClient ? true : false,
      price: parseInt(data.price),
      user: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        phone_number: data.phone_number,
      },
    };
    try {
      if (!gym)
        await addGym({
          variables: newData,
        });
      if (gym) {
        await updateGym({
          variables: { id: gym.id, ...newData },
        });
      }
      toast.success("Gimnasio cargado");
      Router.push("/dashboard/gyms");
    } catch (e) {
      toast.error("ha ocurrido un error");
    }
  };
  return (
    <section className="">
      <div className="w-[90vw] flex mx-auto">
        <Title
          title={gym ? "Editar gimnasio " + gym.name : "Agregar nuevo Gimnasio"}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-[90vw] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[15px] md:gap-3">
          <div>
            <h3>Gimnasio</h3>
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="text"
                label="Nombre(*)"
                placeholder="Nombre*"
                name="name"
                register={register}
                error={errors.name}
              />
              <Input
                type="text"
                label="Dirección"
                placeholder="Dirección"
                name="address"
                register={register}
                error={errors.address}
              />
              <SelectComponent
                data={countries}
                register={register}
                name="country"
                Controller={Controller}
                control={control}
                label={"País"}
                select={"Seleccioná un país"}
                setValue={setValue}
                error={errors.country}
              />
              <SelectComponent
                data={data?.getCities}
                register={register}
                disabled={!watch("country", false)}
                name="city"
                Controller={Controller}
                control={control}
                label={"Ciudad"}
                select={"Seleccioná una ciudad"}
                setValue={setValue}
                error={errors.city}
              />
              <Input
                type="number"
                label="Precio"
                placeholder="Precio"
                name="price"
                register={register}
                error={errors.price}
              />
              <div className="md:mt-[50px]">
                <Checkbox
                  Controller={Controller}
                  control={control}
                  register={register}
                  label={"¿Es un prospecto?"}
                  name={"isClient"}
                />
              </div>
            </div>
          </div>
          <div className="">
            <h3>Usuario administrador</h3>
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
                disabled={gym ? true : false}
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
            label={gym ? "Actualizar gimnasio" : "Crear gimnasio"}
            color="primary"
          />
        </div>
      </form>
    </section>
  );
};

export default NewGym;
