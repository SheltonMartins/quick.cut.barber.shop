import { useMutation } from '@apollo/client'
import { APPOINTMENTS_USER } from '../querys/appointment.query'
import { IAppointment } from '../../interfaces/appointments'


export function useAppointment() {
  return useMutation<{appointmentsById: IAppointment[]}>(APPOINTMENTS_USER)
}

export function useAppointmentByBarber() {
  return useMutation<{appointmentsByBarber: IAppointment[]}>(APPOINTMENTS_USER)
}