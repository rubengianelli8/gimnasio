import { gql } from "@apollo/client";

export const GET_USER_LIST = gql`
  query GetUserList($type: String, $page: Int, $pageSize: Int) {
    getUserList(type: $type, page: $page, page_size: $pageSize) {
      current
      pages
      total
      results {
        id
        email
        first_name
        last_name
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($userId: Int) {
    getUser(id: $userId) {
      email
      first_name
      last_name
      password
      phone_number
    }
  }
`;
