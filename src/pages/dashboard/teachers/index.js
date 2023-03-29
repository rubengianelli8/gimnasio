import Layout from "@/components/layout-auth";
import ListTeachers from "@/containers/dashboard/teachers";

const index = () => {
  return (
    <Layout>
      <ListTeachers />
    </Layout>
  );
};

export default index;
