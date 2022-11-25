import { useState } from "react";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${
        show ? "w-[250px]" : "w-[80px]"
      } bg-gray-900 text-primary fixed top-20 left-0 h-screen transition-all ease-in-out duration-500 `}
    >
      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer text-[20px] text-white flex justify-center items-center rounded-full bg-primary absolute h-[60px] w-[60px] top-4 -right-8"
      >
        {show ? (
          <span>
            <BsArrowBarLeft />
          </span>
        ) : (
          <span>
            <BsArrowBarRight />
          </span>
        )}
      </div>
    </div>
  );
};

export default Navigation;
