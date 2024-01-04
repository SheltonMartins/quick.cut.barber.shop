import { gql } from '@apollo/client'

export const REGISTER_USER = gql`
mutation($password: String!, $phone: String!, $email: String!, $name: String!){
  createUser(password: $password, phone: $phone, email: $email, name: $name) {
    id
    name
    email
    phone
  }
}
`
