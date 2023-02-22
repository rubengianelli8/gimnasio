import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import Router from "next/router";

const RowList = ({ rows = ["first_name"], item }) => {
  return (
    <div
      className={`flex justify-between py-3  text-[9px] md:text-[12px] lg:text-[16px] border-b border-gray-500`}
    >
      {rows.map((row, index) => (
        <div className="flex w-full">{item[row]}</div>
      ))}
      <div className="flex text-[12px] md:text-[16px] lg:text-[20px] text-primary gap-x-2 pr-4">
        <button
          className="hover:text-colorbase"
          onClick={() => Router.push(`/dashboard/clients/edit/${item.id}`)}
        >
          <AiFillEdit />
        </button>
        <button>
          <MdDelete className="hover:text-colorbase" />
        </button>
      </div>
    </div>
  );
};

export default RowList;
