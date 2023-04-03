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

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $updateUserId: Int
    $first_name: String
    $last_name: String
    $email: String
    $phone_number: String
  ) {
    updateUser(
      id: $updateUserId
      first_name: $first_name
      last_name: $last_name
      email: $email
      phone_number: $phone_number
    ) {
      id
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: Int) {
    deleteUser(id: $id) {
      id
    }
  }
`;
