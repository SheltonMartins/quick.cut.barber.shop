import { gql } from '@apollo/client'

export const NAVBAR_USER = gql`
query($token: String!){
  setUserByToken(token: $token) {
    id
    name
  }
}
`