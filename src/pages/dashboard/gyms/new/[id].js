import Layout from "@/components/layout-auth";
import NewGym from "@/containers/dashboard/gym/new-gym";
import { Gym } from "@/models/gym";
import { Location } from "@/models/location";
import { getSession } from "next-auth/react";

const index = ({ countries, gym }) => {
  return (
    <Layout>
      <NewGym countries={countries} gym={gym} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const user = await getSession(ctx);
  const countries = await Location.getCountries(null, null, { user });
  let gym = await Gym.getGym(null, { id: parseInt(query.id) }, { user });
  gym = JSON.parse(JSON.stringify(gym));
  return {
    props: { countries, gym },
  };
}

export default index;
