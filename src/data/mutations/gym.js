import { gql } from "@apollo/client";

export const ADD_GYM = gql`
  mutation AddGym(
    $name: String
    $logo: String
    $created: DateTime
    $address: String
    $cityId: Int
    $user: Json
    $price: Int
    $isClient: Boolean
  ) {
    addGym(
      name: $name
      logo: $logo
      created: $created
      address: $address
      cityId: $cityId
      user: $user
      price: $price
      isClient: $isClient
    ) {
      id
    }
  }
`;

export const UPDATE_GYM = gql`
  mutation UpdateGym(
    $id: Int
    $name: String
    $logo: String
    $created: DateTime
    $address: String
    $cityId: Int
    $user: Json
    $price: Int
    $isClient: Boolean
  ) {
    updateGym(
      id: $id
      name: $name
      logo: $logo
      created: $created
      address: $address
      cityId: $cityId
      user: $user
      price: $price
      isClient: $isClient
    ) {
      id
    }
  }
`;

export const DELETE_GYM = gql`
  mutation DeleteGym($id: Int) {
    deleteGym(id: $id) {
      id
    }
  }
`;
