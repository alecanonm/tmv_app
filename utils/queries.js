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
export const GET_VAPES = gql`
  query ($brandId: String!) {
    vapes(filter: { brand: { id: { _eq: $brandId } } }) {
      id
      description
      images {
        vapes_images_id {
          image {
            id
          }
        }
      }
      brand {
        id
        code
        name
        color
        info
        image {
          id
          title
        }
      }
      flavor {
        id
        code
        name
      }
    }
  }
`
