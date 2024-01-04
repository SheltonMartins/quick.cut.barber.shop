import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../querys/login.query' 

export function useLogin() {
  return useMutation(LOGIN_USER)
}
