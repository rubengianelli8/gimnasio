import * as Label from "@radix-ui/react-label";
import { useEffect } from "react";

const SelectComponent = ({
  error,
  Controller,
  name,
  control,
  data,
  label,
  select,
  register,
  defaultValue,
  setValue,
  refetch,
  disabled,
}) => {
  useEffect(() => {
    refetch && refetch();
  }, [data]);
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, onChange, ...field } }) => {
          return (
            <>
              <Label.Root
                className={"relative mb-input w-full focus:border-red-500 z-10"}
                htmlFor="formCreate"
              >
                <span
                  className={`text-[10px] md:text-sm 2xl:text-md text-primary font-bold  mb-[18px] ${
                    disabled ? "opacity-50" : ""
                  }`}
                >
                  {label}
                </span>

                <select
                  name={name}
                  {...register(name)}
                  disabled={disabled}
                  value={defaultValue}
                  {...field}
                  className={`mt-[11px] font-roboto  border rounded-[8px] lg:rounded-[12px] text-[9px] md:text-sm 2xl:text-md px-3 focus:outline-none pr-3 py-[9px] md:py-[10px] lg:py-[12px] 2xl:py-[15px]  w-full ${
                    error
                      ? "focus:ring-error border-error"
                      : "focus:ring focus:ring-primary border-primary"
                  } placeholder-font-roboto`}
                >
                  <option value={""} className="rounded-md">
                    {select}
                  </option>
                  {data &&
                    data.map((item, index) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className="first-letter:uppercase"
                      >
                        {item.name}
                      </option>
                    ))}
                </select>
                {error && (
                  <p className=" text-error text-[9px] md:text-xsm 2xl:text-sm">
                    {error.message}
                  </p>
                )}
              </Label.Root>
            </>
          );
        }}
      />
    </>
  );
};

export default SelectComponent;
