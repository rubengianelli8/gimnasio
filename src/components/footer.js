import Image from "next/image";
import Logo from "@/assets/images/logo-gym.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsFillHouseDoorFill, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="grid gap-y-[20px] md:gap-y-0 grid-cols-1 md:grid-cols-3 bg-black text-white  py-[30px] place-content-center text-[14px] mt-auto">
      <div className="flex flex-col justify-center">
        <p className="mx-auto">Copyright &copy; 2022 por Rubén Gianelli</p>
        <div className="mt-3 flex justify-center gap-x-4">
          <span className="text-[20px] p-[10px] rounded-full bg-gray-800 border hover:text-primary hover:border-primary cursor-pointer">
            <FaFacebookF />
          </span>
          <span className="text-[20px] p-[10px] rounded-full bg-gray-800 border hover:text-primary hover:border-primary cursor-pointer">
            <FaInstagram />
          </span>
          <span className="text-[20px] p-[10px] rounded-full bg-gray-800 border hover:text-primary hover:border-primary cursor-pointer">
            <FaTwitter />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <div className="flex items-center gap-x-2 ">
          <span className="text-[20px] p-[10px] text-white bg-primary rounded-full">
            <BsFillHouseDoorFill />
          </span>
          <p>La valle 779, San Cristobal, Santa Fe</p>
        </div>
        <div className="flex items-center gap-x-2 ">
          <span className="text-[20px] p-[10px] text-white bg-primary rounded-full">
            <BsFillTelephoneFill />
          </span>
          <p>3408 67-0960</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={Logo} width={250} height={180} alt="Gimnasio en Santa Fe" />
      </div>
    </footer>
  );
};

export default Footer;
