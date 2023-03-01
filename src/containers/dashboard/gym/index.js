import { useState, useEffect } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";

import { GET_USER_LIST } from "src/data/queries/user.gql";
import { AiFillPlusSquare } from "react-icons/ai";

import RowList from "@/components/rowList";
import Loader from "@/components/loader";
import Paginate from "@/components/paginate";

const ListGyms = () => {
  const { data, loading, refetch } = useQuery(GET_USER_LIST, {
    variables: { page: 1, pageSize: 2, type: "client" },
  });

  useEffect(() => {
    refetch({ page: 1, pageSize: 10, type: "client" });
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="flex flex-col w-4/5 mx-auto">
        <div className="flex w-full  border-b-2 border-primary mb-[25px] items-center">
          <h2 className="text-[30px] text-primary">Gimnasio</h2>

          <div className="ml-4">
            <Link href={"/dashboard/clients/add"}>
              <a className="text-[35px] text-primary">
                <AiFillPlusSquare />
              </a>
            </Link>
          </div>
        </div>

        {data?.getUserList?.results?.map((item) => (
          <RowList rows={["first_name", "last_name", "email"]} item={item} />
        ))}
      </div>
      <Paginate
        page={data?.getUserList?.current}
        totalPages={data?.getUserList?.pages}
        onChange={(page) => refetch({ page, pageSize: 10, type: "client" })}
      />
    </>
  );
};

export default ListGyms;
