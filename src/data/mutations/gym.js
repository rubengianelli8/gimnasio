import { gql } from "@apollo/client";

export const ADD_GYM = gql`
  mutation AddGym(
    $name: String
    $logo: String
    $created: DateTime
    $address: String
    $cityId: Int
    $user: Json
  ) {
    addGym(
      name: $name
      logo: $logo
      created: $created
      address: $address
      cityId: $cityId
      user: $user
    ) {
      id
    }
  }
`;
