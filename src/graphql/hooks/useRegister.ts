import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '../querys/register.query' 

export function useRegister() {
  return useMutation(REGISTER_USER)
}
