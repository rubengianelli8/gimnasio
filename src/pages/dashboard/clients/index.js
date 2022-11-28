import React from "react";
import Layout from "@/components/layout-auth";

import { AiOutlineUserAdd } from "react-icons/ai";
const index = () => {
  return (
    <Layout
      navigationItems={[
        {
          label: "Agregar cliente",
          link: "/dashboard/clients/add",
          icon: <AiOutlineUserAdd />,
        },
      ]}
    >
      index
    </Layout>
  );
};

export default index;
