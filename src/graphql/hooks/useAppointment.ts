import { useMutation } from '@apollo/client'
import { APPOINTMENTS_USER } from '../querys/appointment.query'
import { IAppointment } from '../../pages/Appointments'

export function useAppointment() {
  return useMutation<{appointmentsById: IAppointment[]}>(APPOINTMENTS_USER)
}
