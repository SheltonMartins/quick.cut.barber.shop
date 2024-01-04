import {
    Arg,
    Ctx,
    Mutation,
    Resolver,
    Query,
  } from 'type-graphql'
  import { Context } from '../../context'
  import { Appointments } from '../models/Appointments'

// @ObjectType()
//  class AppointmentWithUser {
//     @Field()
//     appointments: Appointments
  
//     @Field()
//     user: User
// }

  
@Resolver()
export class AppointmentsResolver {

    @Mutation(() => Appointments)
    async createAppointment(
        @Arg('name') name: string,
        @Arg('time') time: string,
        @Arg('date') date: string,
        @Arg('barberId') barberId: string,
        @Ctx() ctx: Context,
    ):Promise<Appointments | null> {
        const user = await ctx.prisma.users.findUnique({
            where: { id: barberId },
        })

        if (!user) return null

        return ctx.prisma.appointments.create({
            data: { name, time, date, user: { connect: { id: user.id } } },
        },)

    }

    @Mutation(() => [Appointments])
    async appointmentsById (
        @Arg('usersId') usersId: string,  
        @Ctx() ctx: Context,
    ): Promise<Appointments[] | null> {
        const appointments = await ctx.prisma.appointments.findMany({
            where: { usersId }
        })

        if (!appointments) return null

        return appointments
    }
}