import { useMutation } from "@apollo/client";
import { ADD_GYM } from "src/data/mutations/gym";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validationSchema } from "./validation-schema";
import Input from "@/components/input";
import SelectComponent from "@/components/select";
import Checkbox from "@/components/checkbox";
import Button from "@/components/button";

const NewGym = () => {
  const [addGym] = useMutation(ADD_GYM);

  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(validationSchema()),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section>
      <h2 className="w-full text-center mb-4 title-text">
        Agregar nuevo Gimnasio
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[90vw] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[15px] md:gap-3">
          <div>
            <h3>Gimnasio</h3>
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
                label="Dirección(*)"
                placeholder="Dirección*"
                name="address"
                register={register}
                error={errors.address}
              />
              <SelectComponent
                data={[{ id: 1, name: "prueba" }]}
                register={register}
                name="country"
                Controller={Controller}
                control={control}
                label={"País"}
                select={"Seleccioná un país"}
                setValue={setValue}
                error={errors.city}
              />
              <SelectComponent
                data={[{ id: 1, name: "prueba" }]}
                register={register}
                name="city"
                Controller={Controller}
                control={control}
                label={"Ciudad"}
                select={"Seleccioná una ciudad"}
                setValue={setValue}
                error={errors.city}
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
          <Button type="submit" label="Crear gimnasio" color="primary" />
        </div>
      </form>
    </section>
  );
};

export default NewGym;
