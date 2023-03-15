import { gql } from "apollo-server-micro";

export const schema = gql`
  scalar DateTime
  scalar Json
  type Gym {
    id: Int
    name: String
    logo: String
    created: DateTime
    address: String
    admin: User
    city: City
    price: Int
    isClient: Boolean
  }

  type Mutation {
    addGym(
      name: String
      logo: String
      created: DateTime
      address: String
      cityId: Int
      price: Int
      user: Json
    ): Gym
  }
`;
