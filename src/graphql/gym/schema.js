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

  type ListGym {
    results: [Gym]
    pages: Int
    current: Int
    total: Int
  }

  type Query {
    getGymList(page: Int, page_size: Int, search: String): ListGym
    getGym(id: Int): Gym
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
      isClient: Boolean
    ): Gym
    updateGym(
      id: Int
      name: String
      logo: String
      created: DateTime
      address: String
      cityId: Int
      price: Int
      user: Json
      isClient: Boolean
    ): Gym
    deleteGym(id: Int): Gym
  }
`;
