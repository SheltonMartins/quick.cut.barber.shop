import { useNavigate, useParams } from "react-router-dom"
import { useNewAppointment } from "../../graphql/hooks/useNewAppointment"
import { NewAppointmentContainer, NewAppointmentWarnig, OptionBarber, RegisterInput, RegisterSelect, SubmitButton } from "./styles"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useQuery } from "@apollo/client"
import { useState } from "react"
import { ALL_BARBERS_WITH_APPOINTMENTS } from "../../graphql/querys/barbers/barbers.query"
import { AllBarbersWithAppointmentsResponse } from "../../interfaces/barbers"
import { IAppointment } from "../../interfaces/appointments"

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
    const {register, handleSubmit, formState: {errors}, watch, setValue } = useForm<IAppointment>({
      resolver: zodResolver(NewAppointmentFormSchema),
    });
    const [appointment_response] = useNewAppointment();
    const params = useParams();
    const navigate = useNavigate();
    const [avaliableHours, setAvaliableHours] = useState(["08:00", "09:00", "10:00", 
    "11:00", "13:00", "14:00", "15:00", 
    "16:00", "17:00", "18:00"]);
    const [chosenBarberId, setChosenBarberId] = useState('');

    const { data, refetch } = useQuery<{ 
      allBarbers: AllBarbersWithAppointmentsResponse
    }>(ALL_BARBERS_WITH_APPOINTMENTS);

    const chosenDate = watch('date')

    function checkAvaliableTimes (date: string, barber: string)  {
      console.log(date, barber)
      setAvaliableHours(hoursOfDay)
      const processedHours: string[] = [];

      data?.allBarbers?.data?.map(d => {
        console.log(d.barber.id)
        console.log(barber)
        if (d.barber.id == barber){
          console.log(`Chegou no barbeiro selecionado: ${d.barber.name}, agora vamos excluir horarios indisponiveis.`)
          d.appointments.map(appointment => {
            if (appointment.date == date){
              console.log(`Agora esta percorrendo os agendamentos do ${d.barber.name}`)
              console.log(`Data do agendamento: ${appointment.date} e hora: ${appointment.time}`)
              processedHours.push(appointment.time)
            }
          })
        }else{
          console.log('Nao Entrou: data do compromisso  e data escolhida: ')
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
                userId: params.slug,
                barberId: args.barberId,
                name: args.name,
                time: args.time,
                date: args.date,
              },
            });
            setValue('date', '')
            alert(`Compromisso criado dia ${data?.createAppointment.date}`)
            await refetch();
            navigate(`/Appointments/${params.slug}`)
          } catch (erro) {
            alert(`Erro ${erro}`)
          }
    }
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
              <option value="" disabled selected>Selecione um de nossos barbeiros</option>
              {data?.allBarbers.data.map(o => 
                <OptionBarber
                  value={o.barber.id} 
                  key={o.barber.id}
                  onClick={() => setChosenBarberId(o.barber.id)}
                >{o.barber.name}
                </OptionBarber>)
              }
            </RegisterSelect>

            <label htmlFor="date">Data</label>
            {errors.date && <NewAppointmentWarnig>{errors.date.message}</NewAppointmentWarnig>}
            <RegisterInput 
                title="Data" 
                type="date" 
                {...register('date', {
                  onBlur: () => checkAvaliableTimes(chosenDate, chosenBarberId),
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