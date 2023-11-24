import { gql } from '@apollo/client'

export const GET_COVERS = gql`
  query {
    brands(filter: { status: { _eq: "published" } }, sort: ["sort"]) {
      id
      code
      name
      sort
      color
      image {
        id
        title
      }
    }
  }
`
