import Layout from "@/components/layout-auth";
import NewTeacher from "@/containers/dashboard/teachers/new";
import { GET_COUNTRIES } from "src/data/queries/location.gql";
import { client } from "src/pages/_app";

const index = ({}) => {
  return (
    <Layout>
      <NewTeacher />
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default index;
