import { useState, useEffect } from "react";

import { useQuery, useMutation } from "@apollo/client";

import { GET_USER_LIST } from "src/data/queries/user.gql";
import { DELETE_USER } from "src/data/mutations/user.gql";

import Loader from "@/components/loader";
import Table from "@/components/table";
import Modal from "@/components/modal";
import { toast } from "react-hot-toast";

const ListClients = () => {
  const [open, setOpen] = useState(false);
  const [idClient, setidClient] = useState(false);

  const { data, loading, refetch } = useQuery(GET_USER_LIST, {
    variables: { page: 1, pageSize: 10, type: "client", search: "" },
  });

  const [deleteUser] = useMutation(DELETE_USER);

  useEffect(() => {
    refetch({ page: 1, pageSize: 10 });
  }, []);

  return (
    <>
      <Modal
        openModal={open}
        setOpenModal={setOpen}
        title="Eliminar Cliente"
        text={"¿Esta seguro que desea eliminar el Cliente?"}
        accept="Sí, Eliminar"
        cancel={"Cancelar"}
        action={() =>
          deleteUser({ variables: { id: parseInt(idClient) } })
            .then((res) => {
              toast.success("Cliente eliminado!");
              refetch({ page: 1, pageSize: 10 });
            })
            .catch((err) => toast.error("¡Ha ocurrido un error!"))
        }
      />
      {loading && <Loader />}

      <Table
        route={"/dashboard/clients"}
        title={"Clientes"}
        data={data?.getUserList.results}
        rows={[
          { key: "first_name" },
          { key: "last_name" },
          {
            key: "email",
          },
        ]}
        headers={["Nombre", "Apellido", "Email"]}
        current={data?.getUserList.current}
        totalPages={data?.getUserList.pages}
        onSortedChange={refetch}
        deleteAction={(id) => {
          setidClient(id);
          setOpen(true);
        }}
      />
    </>
  );
};

export default ListClients;
