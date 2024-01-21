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
export const ALL_APPOINTMENTS = gql`
query{
  allAppointments {
    date
    time
  }
}
`

export const REGISTER_APPOINTMENT = gql`
mutation($barberId: String!, $userId: String!, $date: String!, $time: String!, $name: String!){
  createAppointment(barberId: $barberId, userId: $userId, date: $date, time: $time, name: $name) {
    id
    date
    time
    name
    createdAt
  }
}
`

export const APPOINTMENT_BARBER = gql`
mutation($barberId: String!){
  appointmentsByBarber(barberId: $barberId) {
    id
    date
    time
    name
    createdAt
  }
}
`