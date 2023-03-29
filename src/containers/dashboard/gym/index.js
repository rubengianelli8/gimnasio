import { useState, useEffect } from "react";

import { useQuery, useMutation } from "@apollo/client";
import useTranslation from "next-translate/useTranslation";
import dayjs from "dayjs";

import { GET_GYM_LIST } from "src/data/queries/gym.gql";
import { DELETE_GYM } from "src/data/mutations/gym";

import Loader from "@/components/loader";
import Table from "@/components/table";
import Modal from "@/components/modal";
import { toast } from "react-hot-toast";

const ListGyms = () => {
  const { t } = useTranslation("gym");
  const [open, setOpen] = useState(false);
  const [idGym, setIdGym] = useState(false);

  const { data, loading, refetch } = useQuery(GET_GYM_LIST, {
    variables: { page: 1, pageSize: 10, search: "" },
  });

  const [deleteGym] = useMutation(DELETE_GYM);

  useEffect(() => {
    refetch({ page: 1, pageSize: 10 });
  }, []);

  return (
    <>
      <Modal
        openModal={open}
        setOpenModal={setOpen}
        title="Eliminar gimnasio"
        text={"¿Esta seguro que desea eliminar el gimnasio?"}
        accept="Sí, Eliminar"
        cancel={"Cancelar"}
        action={() =>
          deleteGym({ variables: { id: parseInt(idGym) } })
            .then((res) => {
              toast.success("¡Gimnasio eliminado!");
              refetch({ page: 1, pageSize: 10 });
            })
            .catch((err) => toast.error("¡Ha ocurrido un error!"))
        }
      />
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
        deleteAction={(id) => {
          setIdGym(id);
          setOpen(true);
        }}
      />
    </>
  );
};

export default ListGyms;
