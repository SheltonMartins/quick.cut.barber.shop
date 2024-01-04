import { useEffect, useState } from "react"
import { useAppointment } from "../../graphql/hooks/useAppointment"
import { AppointmentItem, AppointmentItens, AppointmentsContainer } from "./style"
import { useParams } from "react-router-dom"


export interface IAppointment{
    id: string
    name: string
    time: string
    date: string
    createdAt: string
}

export const Appointments = () => {
    const [Appointments, setAppointment] = useState<IAppointment[]>([])
    const [appointment_response] = useAppointment();
    const params = useParams();

    useEffect(() => {
        const handleFindAppointments = async (id: string | undefined) => {
          try {
            const { data } = await appointment_response({
              variables: {
                usersId: id
              }
            })

   
            if (!data?.appointmentsById){
                return
            }else{
                setAppointment(data.appointmentsById)
            }

          } catch (error) {
            console.log('ERRO: '+ error)
          }
        };
    
        handleFindAppointments(params.slug);

      }, [appointment_response, Appointments, params.slug]); 

    return (
        <AppointmentsContainer>
            <h1>Compromissos agendados</h1>
                {Appointments.map(appointment => 
                    <AppointmentItens key={appointment.id}>
                        <AppointmentItem>
                            <label>Data: </label>{appointment.date}
                        </AppointmentItem>
                        <AppointmentItem>
                            <label>Horario: </label>{appointment.time}
                        </AppointmentItem>
                        <AppointmentItem>
                            <label>Criado no dia: </label>{appointment.createdAt}
                        </AppointmentItem>
                        <AppointmentItem>
                            <label>Observações: </label>{appointment.name}
                        </AppointmentItem>
                    </AppointmentItens>
                )}
        </AppointmentsContainer>
    )
}