import { AppointmentItensContainer, StyledAppointmentItem } from "./styles"

interface AppointmentItemProps {
    id?: string
    date: string
    time: string
    name: string
}

export const AppointmentItem = ({id, date, time, name}:AppointmentItemProps) => {
    return(
        <AppointmentItensContainer key={id}>
            <StyledAppointmentItem>
                <label>Data: </label>{date}
            </StyledAppointmentItem>
            <StyledAppointmentItem>
                <label>Horario: </label>{time}
            </StyledAppointmentItem>
            <StyledAppointmentItem>
                <label>Observações: </label>{name}
            </StyledAppointmentItem>
        </AppointmentItensContainer>
    )
}