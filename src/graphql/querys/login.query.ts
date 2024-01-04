import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation($password: String!, $email: String!){
  login(password: $password, email: $email) {
    user {
      id
      name
      phone
      email
    }
    token
  }
}
`
