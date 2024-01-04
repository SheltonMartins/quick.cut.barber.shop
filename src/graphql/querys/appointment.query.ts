import { gql } from '@apollo/client'

export const APPOINTMENTS_USER = gql`
mutation($usersId: String!){
  appointmentsById(usersId: $usersId) {
    name
    id
    date
    time
    createdAt
  }
}
`