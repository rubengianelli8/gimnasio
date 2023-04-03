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

  type ListUser {
    results: [User]
    pages: Int
    current: Int
    total: Int
  }

  type Query {
    getUser(id: Int): User
    getUserList(
      type: String
      page: Int
      page_size: Int
      search: String
    ): ListUser
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
    updateUser(
      id: Int
      first_name: String
      last_name: String
      email: String
      phone_number: String
    ): User
    deleteUser(id: Int): User
  }
`;
