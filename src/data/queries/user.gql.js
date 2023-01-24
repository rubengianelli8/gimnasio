import { gql } from "@apollo/client";

export const GET_USER_LIST = gql`
  query GetUserList($type: String, $page: Int, $pageSize: Int) {
    getUserList(type: $type, page: $page, page_size: $pageSize) {
      current
      pages
      total
      results {
        email
        first_name
        last_name
      }
    }
  }
`;
