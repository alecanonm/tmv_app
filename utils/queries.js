import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query {
    brands {
      id
      code
      name
      color
      image {
        id
        title
      }
    }
  }
`
