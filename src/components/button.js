const Button = ({ action, label, disabled, type, color }) => {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={`stand-text font-semibold uppercase rounded-[10px] md:rounded-xl p-2  ${
          color === "error"
            ? "bg-error text-white border-solid border-2 border-error"
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
