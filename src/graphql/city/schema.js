import { gql } from "apollo-server-micro";

export const schema = gql`
  type City {
    id: Int
    name: String
    countryId: Int
    country: Country
  }

  type Query {
    getCities(id_country: Int): [City]
  }
`;
