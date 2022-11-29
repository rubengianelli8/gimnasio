import { gql } from "apollo-server-micro";

export const schema = gql`
  type User {
    id: Int
    first_name: String
    last_name: String
    email: String
    password: String
    phone_number: String
  }
  type Query {
    getUser(id: Int): User
  }
  type Mutation {
    addUser(
      first_name: String
      last_name: String
      email: String
      password: String
      phone_number: String
      user_type: String
    ): User
  }
`;
