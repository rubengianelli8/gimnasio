import Layout from "@/components/layout-noauth";
import Signin from "@/containers/auth/signin";

const index = () => {
  return (
    <Layout>
      <Signin />
    </Layout>
  );
};

export default index;
