import { useState, useEffect } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import useTranslation from "next-translate/useTranslation";
import { GET_GYM_LIST } from "src/data/queries/gym.gql";
import { AiFillPlusSquare } from "react-icons/ai";

import RowList from "@/components/rowList";
import Loader from "@/components/loader";
import Paginate from "@/components/paginate";
import dayjs from "dayjs";
import Table from "@/components/table";

const ListGyms = () => {
  const { t } = useTranslation("gym");
  const { data, loading, refetch } = useQuery(GET_GYM_LIST, {
    variables: { page: 1, pageSize: 2 },
  });

  useEffect(() => {
    refetch({ page: 1, pageSize: 10 });
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Table
        route={"/dashboard/gyms"}
        title={t("gym")}
        data={data?.getGymList.results}
        rows={[
          { key: "name" },
          { key: "admin", format: (value) => value.email },
          {
            key: "created",
            format: (value) => dayjs(value).format("DD/MM/YYYY"),
          },
          {
            key: "price",
            format: (value) => (value > 0 ? `$${value}` : "-"),
          },
        ]}
        headers={[
          t("table.name"),
          t("table.email"),
          t("table.date"),
          t("table.price"),
        ]}
        current={data?.getGymList.current}
        totalPages={data?.getGymList.pages}
        onSortedChange={refetch}
      />
    </>
  );
};

export default ListGyms;
