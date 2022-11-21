import * as Label from "@radix-ui/react-label";
import { GoTriangleDown } from "react-icons/go";

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
  ...rest
}) => {
  return (
    <>
      <div
        className={
          error
            ? `flex flex-col w-full relative md:mt-4 xl:mt-0`
            : `flex flex-col w-full`
        }
      >
        {label && (
          <Label.Root
            htmlFor={name}
            className="relative w-full focus:border-red-500 z-auto"
          >
            <span
              className={`text-sm md:text-[19px] ${
                border
                  ? "text-primary font-bold"
                  : "text-grayCustom font-medium"
              }  mb-[18px]`}
            >
              {label}
            </span>
            {toolTipLabel ? (
              <span className="absolute right-4 top-4 text-black z-50">
                <TooltipComponent text={toolTipLabel} />
              </span>
            ) : null}

            {icon && (
              <span
                className="absolute right-4 top-4 text-lightBlue cursor-pointer"
                onClick={clickableAction}
              >
                {type !== "password" && icon}
                {type === "password" && secondIcon}
              </span>
            )}
          </Label.Root>
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
          {error && !errorPopover ? (
            <p className=" text-error text-sm">{error.message}</p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Input;
