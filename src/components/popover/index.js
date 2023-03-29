import * as Pop from "@radix-ui/react-popover";
import style from "./arrow-style.module.css";

const Popover = ({ children, content }) => {
  return (
    <Pop.Root className="mr-10">
      <Pop.Trigger className=" sm:ml-3 font-roboto font-regular text-14 flex items-center">
        {children}
      </Pop.Trigger>

      <Pop.Content sideOffset={10} align="end" className="">
        {content}
        <Pop.Arrow className={style.colorArrow} />
      </Pop.Content>
    </Pop.Root>
  );
};

export default Popover;
