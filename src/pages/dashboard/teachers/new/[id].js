import Layout from "@/components/layout-auth";
import NewTeacher from "@/containers/dashboard/teachers/new";
import { getSession } from "next-auth/react";
import { User } from "@/models/user";

const index = ({ user }) => {
  return (
    <Layout>
      <NewTeacher user={user} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const user = await getSession(ctx);
  let teacher = await User.getUser(
    null,
    {
      id: parseInt(query.id),
      user_type: "teacher",
    },
    { user }
  );
  if (!teacher)
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  return {
    props: { user: teacher },
  };
}

export default index;
