import { gql } from "@apollo/client";

export const GET_GYM_LIST = gql`
  query GetGymList($page: Int, $pageSize: Int) {
    getGymList(page: $page, page_size: $pageSize) {
      current
      pages
      total
      results {
        id
        name
        price
        isClient
        created
        city {
          name
        }
      }
    }
  }
`;
