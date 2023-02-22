import Layout from "@/components/layout-auth";
import AddClient from "@/containers/dashboard/clients/addClient";
import Router from "next/router";

const index = () => {
  const id = Router?.router?.query?.id;
  return (
    <Layout>
      <AddClient edit={true} id={parseInt(id)} />
    </Layout>
  );
};

export default index;
