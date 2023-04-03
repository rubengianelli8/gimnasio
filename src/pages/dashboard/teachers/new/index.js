import Layout from "@/components/layout-auth";
import NewTeacher from "@/containers/dashboard/teachers/new";


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
