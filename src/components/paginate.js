import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Paginate = ({ page, totalPages, onChange }) => {
  const changePage = (direction) => {
    let newPage = page;
    if (direction === "left") {
      newPage = page === 1 && totalPages > 0 ? totalPages : page - 1;
    }
    if (direction === "right") {
      newPage = page === totalPages && totalPages > 0 ? 1 : page + 1;
    }
    onChange(newPage);
  };
  return (
    <div className="border border-primary flex justify-between max-w-[100px] lg:max-w-[140px] items-center mx-auto mt-[20px] px-3">
      <span
        className="cursor-pointer text-primary text-[12px] md:text-[16px] lg:text-[20px]"
        onClick={() => changePage("left")}
      >
        <IoIosArrowBack />
      </span>
      <span className="font-semibold text-[9px] md:text-[12px] lg:text-[16px]">
        {totalPages === 0 ? 0 : page} de {totalPages}
      </span>
      <span
        className="cursor-pointer text-primary text-[12px] md:text-[16px] lg:text-[20px]"
        onClick={() => changePage("right")}
      >
        <IoIosArrowForward />
      </span>
    </div>
  );
};

export default Paginate;
