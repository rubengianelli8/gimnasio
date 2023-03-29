import React from "react";

const Error = ({ message }) => {
  return (
    <div className="w-full flex mb-[10px]">
      {message && (
        <span className="p-2 text-error bg-red-200 font-medium text-[14px] w-full text-center ">
          {message}
        </span>
      )}
    </div>
  );
};

export default Error;
