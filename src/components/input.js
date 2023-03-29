import * as Label from "@radix-ui/react-label";

const Input = ({
  type,
  name,
  label,
  placeholder,
  register,
  icon,
  secondIcon,
  clickableIcon = false,
  clickableAction,
  toolTipLabel,
  disabled = false,
  error,
  ...rest
}) => {
  return (
    <>
      <div
        className={
          error
            ? `flex flex-col w-full relative `
            : `flex flex-col w-full relative`
        }
      >
        {label && (
          <Label.Root
            htmlFor={name}
            className="relative w-full focus:border-red-500 z-auto"
          >
            <span
              className={`text-[10px] md:text-sm 2xl:text-md text-primary font-bold  mb-[18px] ${
                disabled ? "opacity-50" : ""
              }`}
            >
              {label}
            </span>
          </Label.Root>
        )}
        {icon && (
          <span
            className="absolute right-4 top-[52px] md:top-12 text-primary cursor-pointer"
            onClick={clickableAction}
          >
            {type !== "password" && icon}
            {type === "password" && secondIcon}
          </span>
        )}

        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="off"
          step="any"
          className={`bg-[#f5f5f5] mt-[11px] py-[9px] px-[21px] text-[9px] rounded-[8px] lg:rounded-[12px] text-primary md:text-sm 2xl:text-md md:font-regular md:py-[10px] lg:py-[12px] md:pl-[20px] md:pr-[21px] 2xl:py-[15px] w-full ${
            !error
              ? "border border-primary placeholder focus:border-2 focus:border-primary focus:outline-none"
              : "border border-error placeholder focus:border-2 focus:border-error focus:outline-none"
          }
          ${disabled ? "opacity-50" : ""}`}
          {...register(name)}
          {...rest}
        />

        {error && (
          <p className=" text-error text-[9px] md:text-xsm 2xl:text-sm">
            {error.message}
          </p>
        )}
      </div>
    </>
  );
};

export default Input;
