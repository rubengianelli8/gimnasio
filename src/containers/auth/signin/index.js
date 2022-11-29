import { useState } from "react";
import Router from "next/router";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { validationSchema } from "./validation-schema";
import Input from "@/components/input";
import Button from "@/components/button";
import Error from "@/components/error";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ ok: true, message: "" });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema()),
  });

  const onSubmit = (data) => {
    setLoading(true);
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`,
    }).then((res) => {
      console.log(res);
      if (!res.ok) {
        setError({ ok: res.ok, message: "Email o Contraseña incorrectos" });
        setLoading(false);
      } else Router.push(res.url);
    });
  };
  return (
    <div className="flex flex-col items-center my-[50px]">
      <h2 className="text-[35px] font-bold  text-primary text-center">
        Iniciar Sesión
      </h2>
      <h3 className="text-[18px] font-medium text-primary text-center ">
        Bienvenido, por favor ingresá tus credenciales
      </h3>
      <form
        className="w-11/12 max-w-[400px] mt-[30px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Error message={error.message} />
        <Input
          type="text"
          name="email"
          label="Email"
          register={register}
          placeholder="tudireccion@mail.com"
          error={errors.email}
        />
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          label="Contraseña"
          register={register}
          placeholder="************"
          error={errors.password}
          icon={<AiFillEye size={20} />}
          secondIcon={<AiFillEyeInvisible size={20} />}
          clickableAction={() => setShowPassword(!showPassword)}
        />
        <div className="text-[20px]">
          <Button
            label="Ingresar"
            color="primary"
            type="submit"
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};

export default Signin;
