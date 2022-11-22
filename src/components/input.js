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
            ? `flex flex-col w-full relative md:mt-4 xl:mt-0 `
            : `flex flex-col w-full relative`
        }
      >
        {label && (
          <Label.Root
            htmlFor={name}
            className="relative w-full focus:border-red-500 z-auto"
          >
            <span
              className={`text-sm md:text-[19px] text-primary font-bold  mb-[18px]`}
            >
              {label}
            </span>
            {toolTipLabel ? (
              <span className="absolute right-4 top-4 text-black z-50">
                <TooltipComponent text={toolTipLabel} />
              </span>
            ) : null}
          </Label.Root>
        )}
        {icon && (
          <span
            className="absolute right-4 top-[52px] md:top-16 text-primary cursor-pointer"
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
          className={`bg-[#f5f5f5] mt-[11px] py-[13px] px-[21px] text-sm rounded-[10px] text-primary md:text-18 md:font-regular md:py-[19px] md:pl-[26px] md:pr-[21px] w-full ${
            !error
              ? "border border-primary placeholder focus:border-2 focus:border-primary focus:outline-none"
              : "border border-error placeholder focus:border-2 focus:border-error focus:outline-none"
          }`}
          {...register(name)}
          {...rest}
        />

        <div className="h-[30px]">
          {error && <p className=" text-error text-sm">{error.message}</p>}
        </div>
      </div>
    </>
  );
};

export default Input;
