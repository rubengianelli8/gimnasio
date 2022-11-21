const Button = ({ action, label, disabled, type, color }) => {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={`w-full h-[46px] font-bold rounded-[10px] md:rounded-xl tracking-normal leading-normal  ${
          color === "error"
            ? "bg-error text-white"
            : color === "white"
            ? "bg-white text-primary border-solid border-2 border-primary "
            : color === "primary"
            ? "bg-primary text-white"
            : "text-primary border border-primary"
        } ${disabled && "opacity-50"}   `}
        onClick={() => action && action()}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
