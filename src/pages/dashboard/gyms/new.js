import Layout from "@/components/layout-auth";
import NewGym from "@/containers/dashboard/gym/new-gym";
import { GET_COUNTRIES } from "src/data/queries/location.gql";
import { client } from "src/pages/_app";

const index = ({ countries }) => {
  return (
    <Layout>
      <NewGym countries={countries} />
    </Layout>
  );
};

export async function getStaticProps() {
  const {
    data: { getCountries: countries },
  } = await client.query({
    query: GET_COUNTRIES,
  });

  return {
    props: { countries },
  };
}

export default index;
