import Layout from "@/components/layout-auth";
import { getSession } from "next-auth/react";

import { User } from "@/models/user";
import NewClient from "@/containers/dashboard/clients/new";

const index = ({ user }) => {
  return (
    <Layout>
      <NewClient user={user} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const user = await getSession(ctx);
  let client = await User.getUser(null, {
    id: parseInt(query.id),
    user_type: "client",
  });
  if (!client)
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  return {
    props: { user: client },
  };
}

export default index;
