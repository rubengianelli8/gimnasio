import Link from "next/link";
import { useState } from "react";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";

const Navigation = ({ items = [] }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${
        show ? "w-[250px]" : "w-[80px]"
      } bg-gray-900 text-primary fixed top-20 left-0 h-screen transition-all ease-in-out duration-500 z-100`}
    >
      <div
        onClick={() => setShow(!show)}
        className="cursor-pointer text-[20px] text-white flex justify-center items-center rounded-full bg-primary absolute h-[40px] w-[40px] top-4 -right-6"
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
      <ul
        className={`w-full flex flex-col items-center ${
          show ? "mt-[30px]" : "mt-[70px]"
        } transition-all ease-in-out duration-500`}
      >
        {items.map((item) => (
          <li
            key={item.link}
            className={`rounded-full bg-primary text-white flex justify-center items-center transition-all ease-in-out duration-500 ${
              !show ? "h-[40px] w-[40px] " : "py-2 px-4"
            }`}
          >
            <Link href={item.link}>
              <a className="flex">
                <span className="text-[25px]">{item.icon}</span>
                {show && <span>{item.label}</span>}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
