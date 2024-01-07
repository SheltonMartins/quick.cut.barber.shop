import { gql } from '@apollo/client'

export const REGISTER_APPOINTMENT = gql`
mutation($barberId: String!, $date: String!, $time: String!, $name: String!){
  createAppointment(barberId: $barberId, date: $date, time: $time, name: $name) {
    id
    date
    time
    name
    createdAt
  }
}
`