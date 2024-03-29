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
    vapes(
      filter: { status: { _eq: "published" }, brand: { id: { _eq: $brandId } } }
      sort: ["sort"]
    ) {
      id
      description
      images {
        vapes_images_id {
          image {
            id
            width
            height
          }
          width
          height
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
    prices(
      filter: { status: { _eq: "published" }, brand: { id: { _eq: $brandId } } }
      sort: ["sort"]
    ) {
      id
      quantity
      unit_price
      brand {
        id
      }
    }
  }
`
