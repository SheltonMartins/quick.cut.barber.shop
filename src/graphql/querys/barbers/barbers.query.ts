import { gql } from '@apollo/client'

export const ALL_BARBERS_WITH_APPOINTMENTS = gql`
query{
  allBarbers {
    data {
      barber {
        id
        name
      }
      appointments {
        id
        date
        time
        name
        createdAt
      }
    }
  }
}
`