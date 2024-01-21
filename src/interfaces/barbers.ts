import { IAppointment } from "./appointments"

interface barber {
    id: string
    name: string
}

export interface AllBarbersWithAppointmentsResponse {
    data: AllBarbersWithAppointmentsResponseData[]
}

export interface AllBarbersWithAppointmentsResponseData {
    barber: barber
    appointments: IAppointment[]
}

