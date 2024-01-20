import { useMutation } from '@apollo/client'
import { REGISTER_APPOINTMENT } from '../querys/appointment.query'
import { IAppointment } from '../../interfaces/appointments'

export function useNewAppointment() {
  return useMutation<{createAppointment: IAppointment}>(REGISTER_APPOINTMENT)
}
