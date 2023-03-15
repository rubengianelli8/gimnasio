import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries {
    getCountries {
      id
      name
    }
  }
`;

export const GET_CITIES = gql`
  query Cities($idCountry: Int) {
    getCities(id_country: $idCountry) {
      id
      name
    }
  }
`;
