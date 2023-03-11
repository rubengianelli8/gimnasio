import * as Label from "@radix-ui/react-label";
import * as CheckboxComponent from "@radix-ui/react-checkbox";
import { BoxIcon } from "@radix-ui/react-icons";

const Checkbox = ({ error, label, Controller, name, control, id }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div className="flex flex-col justify-between">
            <div className="flex flex-row items-center">
              <CheckboxComponent.Root
                name={name}
                {...field}
                className={
                  "flex items-center justify-center w-6 h-6 border border-primary rounded-[3px] focus:border-lightBlue "
                }
                checked={field.value}
                onCheckedChange={field.onChange}
                id={id}
              >
                <CheckboxComponent.Indicator className="bg-white">
                  <BoxIcon className="bg-primary text-primary w-4 h-4 rounded" />
                </CheckboxComponent.Indicator>
              </CheckboxComponent.Root>
              <Label.Root
                className={"ml-2 text-primary font-roboto text-12"}
                htmlFor="formCreate"
              >
                {label && <span>{label}</span>}
              </Label.Root>
            </div>
            {error && (
              <div className="mt-2 z-20 font-roboto text-left w-9/16 ml-1 font-regular text-12 text-white flex relative justify-items-start">
                <span className="bg-error inline-block z-20 w-auto p-1">
                  {error.message}
                </span>
                <div className="absolute -top-2 z-5 w-0 h-0 border border-b-error border-b-16 border-r-8 border-l-8 border-x-transparent"></div>
              </div>
            )}
          </div>
        );
      }}
    />
  );
};

export default Checkbox;
