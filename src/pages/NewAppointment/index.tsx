import { useNavigate, useParams } from "react-router-dom"
import { useNewAppointment } from "../../graphql/hooks/useNewAppointment"
import { NewAppointmentContainer, NewAppointmentWarnig, RegisterInput, RegisterSelect, SubmitButton } from "./styles"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useQuery } from "@apollo/client"
import { useState } from "react"
import { AllAppointmentsResponse, IAppointment } from "../../interfaces/appointments"
import { AllBarbersIdResponse, AllBarbersWithAppointmentsResponse } from "../../interfaces/barbers"
import { ALL_APPOINTMENTS } from "../../graphql/querys/appointment.query"
import { ALL_BARBERS_WITH_APPOINTMENTS } from "../../graphql/querys/barbers/barbers.query"

const NewAppointmentFormSchema = zod.object({
  name: zod.string()
      .min(1, 'Adicione uma observação'),
  time: zod.string()
      .nonempty('Escolha um horário que esteja disponível'),
  date: zod.string()
      .nonempty('Escolha uma data disponível'),
  barberId: zod.string()
      .nonempty('Escolha um horário que esteja disponível')
})
const hoursOfDay = ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", 
"16:00", "17:00", "18:00"]

export const NewAppointment = () => {
    const {register, handleSubmit, formState: {errors}, watch } = useForm<IAppointment>({
      resolver: zodResolver(NewAppointmentFormSchema),
    });
    const [appointment_response] = useNewAppointment();
    const params = useParams();
    const navigate = useNavigate();
    const [avaliableHours, setAvaliableHours] = useState(["08:00", "09:00", "10:00", 
    "11:00", "13:00", "14:00", "15:00", 
    "16:00", "17:00", "18:00"]);
    const [chosenBarber, setChosenBarber] = useState('');

    const { data } = useQuery<{ 
      allBarbers: AllBarbersWithAppointmentsResponse
    }>(ALL_BARBERS_WITH_APPOINTMENTS);

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
      console.log(args.barberId)
        try {
            const { data } = await appointment_response({
              variables: {
                userId: params.slug,
                barberId: args.barberId,
                name: args.name,
                time: args.time,
                date: args.date,
              },
            })
            console.log(data?.createAppointment)
            alert(`Compromisso criado dia ${data?.createAppointment.date}`)
            navigate(`/Appointments/${params.slug}`)
          } catch (erro) {
            alert(`deu erro ${erro}`)
            console.log(erro)
          }
    }

    console.log(data)


    return (
        <NewAppointmentContainer >
            <form onSubmit={handleSubmit(handleCreateNewAppointment)} action="">
            <h2>Escolha o melhor dia e horário pra voce.</h2>
            <label htmlFor="baberId">Barbeiro</label>
            {/* {errors.name && <NewAppointmentWarnig>{errors.name.message}</NewAppointmentWarnig>} */}
            <RegisterSelect
              title="barberId"
              {...register('barberId')} 
            >
              {data?.allBarbers?.barber?.map(o => 
                <option 
                  key={o.id} 
                  onChange={}>{o.name}
                </option>)}
            </RegisterSelect>

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
            <label htmlFor="time">Hora</label>
            {errors.time && <NewAppointmentWarnig>{errors.time.message}</NewAppointmentWarnig>}
            <RegisterSelect 
                title="time" 
                {...register('time')}
            >
              {avaliableHours.map(h => <option value={h}>{h}</option>)}
            </RegisterSelect>
            <label htmlFor="name">Observações</label>
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