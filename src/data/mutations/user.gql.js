import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser(
    $first_name: String
    $last_name: String
    $email: String
    $password: String
    $phone_number: String
    $user_type: String
  ) {
    addUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      password: $password
      phone_number: $phone_number
      user_type: $user_type
    ) {
      id
    }
  }
`;
