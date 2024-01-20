import { gql } from '@apollo/client'

export const ALL_BARBERS_WITH_APPOINTMENTS = gql`
query{
  allBarbers {
    barber {
      id
      name
    }
    appointments {
      date
      time
      name
      createdAt
    }
  }
}
`