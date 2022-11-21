import { useState } from "react";
import { useForm } from "react-hook-form";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Input from "@/components/input";
import Button from "@/components/button";

const Signin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center mt-[30px]">
      <h2 className="text-[35px] font-bold  text-primary">Iniciar Sesión</h2>
      <h3 className="text-[18px] font-medium text-primary ">
        Bienvenido, por favor ingresa tus credenciales
      </h3>
      <form className="w-[400px] mt-[30px]">
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
        <div className="text-[20px] mb-[20px]">
          <Button
            label="Ingresar"
            color="primary"
            type="submit"
            disabled={true}
          />
        </div>
      </form>
    </div>
  );
};

export default Signin;
