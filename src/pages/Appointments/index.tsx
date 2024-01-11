import { useEffect, useState } from "react"
import { useAppointment } from "../../graphql/hooks/useAppointment"
import { AnyAppointmentsAdvice, AppointmentsContainer, AppointmentsTitleContainer } from "./style"
import { Link, useParams } from "react-router-dom"
import INCLUDE_ICON from "/plus-circle.svg"
import { AppointmentItem } from "../../partials/AppointmentItem"

export interface IAppointment{
    id?: string
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
            <AppointmentsTitleContainer>
                <Link to={`/NewAppointment/${params.slug}`}>
                    Marcar compromisso<img src={INCLUDE_ICON} alt="plus" />
                </Link>
            <h1>Compromissos agendados</h1>
            </AppointmentsTitleContainer>
            {Appointments.length == 0 && 
                <AnyAppointmentsAdvice>
                    Voce nao tem nenhum compromisso! 
                    Para marcar conosco,  
                    <Link to={`/NewAppointment/${params.slug}`}> clique aqui</Link>.
                </AnyAppointmentsAdvice> }
            {Appointments.map(appointment => 
                    <AppointmentItem 
                        id={appointment.id}
                        date={appointment.date}
                        time={appointment.time}
                        name={appointment.name} 
                    />
            )}
        </AppointmentsContainer>
    )
}