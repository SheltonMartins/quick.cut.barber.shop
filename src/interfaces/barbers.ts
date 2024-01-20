interface baber {
    id: string
    name: string
}

interface appointment {
    date: string
    time: string
    name: string
    createdAt: string
}


export interface AllBarbersWithAppointmentsResponse {
    barber: baber[]
    appointments: appointment[]
}