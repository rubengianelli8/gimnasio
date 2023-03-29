import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import Router from "next/router";

const RowList = ({ rows = [{ key: "first_name" }], item, grid }) => {
  return (
    <div className={`grid grid-cols-${4} py-3 border-b border-gray-400`}>
      {rows.map((row) => (
        <div className={`flex w-full `}>
          <p>{row.format ? row.format(item[row.key]) : item[row.key]}</p>
        </div>
      ))}
      <div className="flex text-[12px] md:text-[16px] lg:text-[20px] text-primary gap-x-2  w-[30px] ml-auto mr-[50px]">
        <button
          className="hover:text-primary-hover"
          onClick={() => Router.push(`/dashboard/clients/edit/${item.id}`)}
        >
          <AiFillEdit />
        </button>
        <button>
          <MdDelete className="hover:text-primary-hover" />
        </button>
      </div>
    </div>
  );
};

export default RowList;
