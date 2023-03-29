import Paginate from "@/components/paginate";
import Link from "next/link";
import { AiFillEdit, AiFillPlusSquare } from "react-icons/ai";
import Router from "next/router";
import { MdDelete } from "react-icons/md";

const Table = ({
  data,
  headers,
  title,
  route,
  rows,
  onSortedChange,
  current,
  totalPages,
  deleteAction,
}) => {
  return (
    <>
      <div className="flex flex-col w-4/5 mx-auto">
        <div className="flex w-full  border-b-2 border-primary mb-[25px] items-center pb-1">
          <h2 className="text-[30px] text-primary">{title}</h2>

          <div className="ml-4">
            <Link href={route + "/new"}>
              <a className="text-[35px] text-primary">
                <AiFillPlusSquare />
              </a>
            </Link>
          </div>
          <div className="ml-auto">
            <input
              placeholder="Buscar"
              onChange={(e) =>
                onSortedChange({
                  page: 1,
                  pageSize: 10,
                  search: e.target.value,
                })
              }
              className="border border-gray-400 rounded-[8px] p-2 stand-text"
            />
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                {headers.map((header, i) => (
                  <th
                    className="text-left font-semibold uppercase px-4 py-2 stand-text"
                    key={i}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, i) => (
                <tr
                  key={i}
                  className="border-t border-primary rounded-[8px] hover:bg-grayCustom cursor-pointer"
                >
                  {rows.map((row, j) => (
                    <td
                      className="px-4 py-2 stand-text truncate "
                      key={j}
                      onClick={() => Router.push(`${route}/new/${item.id}`)}
                    >
                      {row.format ? row.format(item[row.key]) : item[row.key]}
                    </td>
                  ))}
                  <td className="px-4 py-2 stand-text">
                    <div className="flex text-[12px] md:text-[16px] lg:text-[20px] text-primary gap-x-2  w-[30px] ml-auto mr-[50px]">
                      <Link href={`${route}/new/${item.id}`}>
                        <a>
                          <AiFillEdit className="hover:text-primary-hover" />
                        </a>
                      </Link>
                      <button
                        onClick={() => deleteAction && deleteAction(item.id)}
                      >
                        <MdDelete className="hover:text-primary-hover" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Paginate
        page={current}
        totalPages={totalPages}
        onChange={(page) => onSortedChange({ page, pageSize: 10 })}
      />
    </>
  );
};

export default Table;
