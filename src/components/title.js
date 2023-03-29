import { BiLeftArrowAlt } from "react-icons/bi";
import Router from "next/router";
const Title = ({ title }) => {
  return (
    <div className="flex w-full  border-b-2 border-primary mb-[25px] items-center pb-1">
      <BiLeftArrowAlt
        size={30}
        onClick={() => Router.back()}
        className="text-primary cursor-pointer mt-1 mr-2"
      />
      <h2 className="title-text text-primary">{title}</h2>
    </div>
  );
};

export default Title;
