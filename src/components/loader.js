import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loader = ({ size = 100 }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-primary flex justify-center items-center z-50">
      <AiOutlineLoading3Quarters
        size={size}
        className="animate-spin font-bold text-white cursor-pointer"
      />
    </div>
  );
};

export default Loader;
