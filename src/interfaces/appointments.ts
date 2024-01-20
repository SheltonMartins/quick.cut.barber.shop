export interface AllAppointmentsResponse {
    date: string
    time: string
}

export interface IAppointment{
    barberId: string
    userId?: string
    name: string
    time: string
    date: string
    createdAt: string
}