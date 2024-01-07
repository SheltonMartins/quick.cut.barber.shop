import { useNavigate, useParams } from "react-router-dom"
import { useNewAppointment } from "../../graphql/hooks/useNewAppointment"
import { IAppointment } from "../Appointments"
import { NewAppointmentContainer, NewAppointmentWarnig, RegisterInput, RegisterSelect, SubmitButton } from "./styles"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useQuery } from "@apollo/client"
import { ALL_APPOINTMENTS } from "../../graphql/querys/allAppointments.query"
import { useState } from "react"

const NewAppointmentFormSchema = zod.object({
  name: zod.string()
      .min(1, 'Adicione uma observação'),
  time: zod.string()
      .nonempty('Escolha um horário que esteja disponível'),
  date: zod.string()
      .nonempty('Escolha uma data disponível')  
})

interface AllAppointmentsResponse {
  date: string
  time: string
}

const hoursOfDay = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", 
"16:00", "17:00", "18:00"]

export const NewAppointment = () => {
    const {register, handleSubmit, formState: {errors}, watch } = useForm<IAppointment>({
      resolver: zodResolver(NewAppointmentFormSchema),
    })
    const [appointment_response] = useNewAppointment()
    const params = useParams();
    const navigate = useNavigate();
    const [avaliableHours, setAvaliableHours] = useState(["08:00", "09:00", "10:00", 
    "11:00", "13:00", "14:00", "15:00", 
    "16:00", "17:00", "18:00"])

    const { data } = useQuery<{ 
      allAppointments: AllAppointmentsResponse[]
    }>(ALL_APPOINTMENTS);

    const chosenDate = watch('date')

    function checkAvaliableTimes (date: string)  {
      setAvaliableHours(hoursOfDay)
      const processedHours: string[] = [];
      data?.allAppointments.forEach(appointment => {
        if (appointment.date === date){
          processedHours.push(appointment.time)
        }else{
          console.log('Não entrou no if: data do comp'+appointment.date+' e data escolhida: '+date)
        }
      })
          setAvaliableHours(prevAvaliableHours => {
            return prevAvaliableHours.filter(h => !processedHours.includes(h));
          });
    }


    async function handleCreateNewAppointment(args: IAppointment) {
        try {
            const { data } = await appointment_response({
              variables: {
                barberId: params.slug,
                name: args.name,
                time: args.time,
                date: args.date,
              },
            })
            console.log(data?.createAppointment)
            alert(`Compromisso criado dia ${data?.createAppointment.date}`)
            navigate(`/Appointments/${params.slug}`)
          } catch (erro) {
            alert('deu erro')
          }
        
        console.log(args)
    }

    return (
        <NewAppointmentContainer >
            <form onSubmit={handleSubmit(handleCreateNewAppointment)} action="">
            <h2>Escolha o melhor dia e horário pra voce.</h2>
            <label htmlFor="date">Data</label>
            {errors.date && <NewAppointmentWarnig>{errors.date.message}</NewAppointmentWarnig>}
            <RegisterInput 
                title="Data" 
                type="date" 
                {...register('date', {
                  onBlur: () => checkAvaliableTimes(chosenDate),
                  // onChange: () => (aoAlterado),
                })}
            />
            <label htmlFor="Time">Hora</label>
            {errors.time && <NewAppointmentWarnig>{errors.time.message}</NewAppointmentWarnig>}
            <RegisterSelect 
                title="Time" 
                {...register('time')}

            >
              {avaliableHours.map(h => <option value={h}>{h}</option>)}
            </RegisterSelect>
            <label htmlFor="Time">Observações</label>
            {errors.name && <NewAppointmentWarnig>{errors.name.message}</NewAppointmentWarnig>}
            <RegisterInput 
                title="name" 
                placeholder="Observações" 
                {...register('name')}
            />
            <SubmitButton type="submit">Cadastrar</SubmitButton> 
            </form>     
        </NewAppointmentContainer>
    )
}