import React from "react";
import Layout from "@/components/layout-auth";
import ListClients from "@/containers/dashboard/clients";

const index = () => {
  return (
    <Layout>
      <ListClients />
    </Layout>
  );
};

export default index;
