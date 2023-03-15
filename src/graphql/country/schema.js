import { gql } from "apollo-server-micro";

export const schema = gql`
  type Country {
    id: Int
    name: String
  }

  type Query {
    getCountries: [Country]
  }
`;
