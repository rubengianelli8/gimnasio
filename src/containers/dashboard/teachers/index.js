import { useState, useEffect } from "react";

import { useQuery, useMutation } from "@apollo/client";
import dayjs from "dayjs";

import { GET_USER_LIST } from "src/data/queries/user.gql";
import { DELETE_USER } from "src/data/mutations/user.gql";

import Loader from "@/components/loader";
import Table from "@/components/table";
import Modal from "@/components/modal";
import { toast } from "react-hot-toast";

const ListTeachers = () => {
  const [open, setOpen] = useState(false);
  const [idTeacher, setidTeacher] = useState(false);

  const { data, loading, refetch } = useQuery(GET_USER_LIST, {
    variables: { page: 1, pageSize: 10, type: "teacher", search: "" },
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
        title="Eliminar profesor"
        text={"¿Esta seguro que desea eliminar el profesor?"}
        accept="Sí, Eliminar"
        cancel={"Cancelar"}
        action={() =>
          deleteUser({ variables: { id: parseInt(idTeacher) } })
            .then((res) => {
              toast.success("Profesor eliminado!");
              refetch({ page: 1, pageSize: 10 });
            })
            .catch((err) => toast.error("¡Ha ocurrido un error!"))
        }
      />
      {loading && <Loader />}

      <Table
        route={"/dashboard/teachers"}
        title={"Profesores"}
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
          setidTeacher(id);
          setOpen(true);
        }}
      />
    </>
  );
};

export default ListTeachers;
