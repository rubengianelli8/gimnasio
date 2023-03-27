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
        admin {
          email
        }
      }
    }
  }
`;

export const GET_GYM = gql`
  query GetGym($id: Int) {
    getGym(id: $id) {
      address
      admin {
        email
        first_name
        last_name
        password
        id
        phone_number
      }
      city {
        id
      }
      created
      id
      isClient
      name
      logo
      price
    }
  }
`;
