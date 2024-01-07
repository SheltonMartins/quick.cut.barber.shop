import { gql } from '@apollo/client'

export const ALL_APPOINTMENTS = gql`
query{
  allAppointments {
    date
    time
  }
}
`