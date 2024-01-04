import { useQuery } from '@apollo/client'
import { NAVBAR_USER } from '../querys/navbar.query'

export function useNavbar() {
  return useQuery(NAVBAR_USER)
}
