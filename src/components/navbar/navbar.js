import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
const Navbar = ({ items = [{ label: "Inicio", link: "/" }], session }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav className="max-h-[80px] h-[80px] max-w-screen px-[20px] bg-[rgb(73,33,184)] shadow-lg text-white flex items-center fixed top-0 w-full z-100">
      {!session && (
        <Link href={"/auth/signin"}>
          <a className="bg-white text-black p-2 font-semibold rounded-md">
            Iniciar sesión
          </a>
        </Link>
      )}
      <ul className="hidden md:flex h-full gap-x-6 items-center ml-auto justify-end text-[18px] font-medium">
        {items.map((i) => (
          <li
            className="hover:bg-blackTransparent p-3 cursor-pointer"
            key={i.link}
          >
            <Link href={i.link}>
              <a>{i.label}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul
        className={`${
          showNavbar ? "translate-x-0" : "translate-x-[200px] opacity-0"
        }
             transtion-all ease-in-out duration-500 bg-primary fixed top-0 right-0 flex flex-col md:hidden h-screen gap-y-4  w-[200px] justify-start text-[17px] font-medium pl-[10px] z-50`}
      >
        <div className="flex w-full border-b-2 items-center  mt-[10px]">
          <h3 className="text-[20px] uppercase font-semibold ">Menu</h3>
          <span
            className="ml-auto text-[25px] mr-2 cursor-pointer"
            onClick={() => setShowNavbar(false)}
          >
            <IoIosCloseCircle />
          </span>
        </div>
        {items.map((i) => (
          <li
            className="hover:text-primary hover:underline cursor-pointer"
            key={i.link}
          >
            <Link href={i.link}>
              <a>{i.label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <span
        className="ml-auto text-[30px] hover:text-primary hover:underline cursor-pointer hover:text-[34px] md:hidden"
        onClick={() => setShowNavbar(true)}
      >
        <GiHamburgerMenu />
      </span>
    </nav>
  );
};

export default Navbar;