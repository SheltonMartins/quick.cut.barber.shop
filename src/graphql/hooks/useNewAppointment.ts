import { useMutation } from '@apollo/client'
import { REGISTER_APPOINTMENT } from '../querys/newAppointment'
import { IAppointment } from '../../pages/Appointments'

export function useNewAppointment() {
  return useMutation<{createAppointment: IAppointment}>(REGISTER_APPOINTMENT)
}
