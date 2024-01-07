import { useNavigate } from "react-router-dom"
import { useRegister } from "../../graphql/hooks/useRegister"
import { AdviceFromValidation, NewUserContainer, RegisterInput, SubmitButton } from "./styles"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

interface newUserProps {
    name: string
    email: string
    phone: string
    password: string
}

const registerNewUserFormSchema = zod.object({
    name: zod.string()
        .min(1, 'O Nome é obrigatório')
        .toUpperCase(),
    email: zod.string()
        .nonempty('O email é obrigatório')
        .email('Formato de email inválido').toLowerCase(),
    phone: zod.string()
        .min(1, 'O Telefone é orbigatório')
        .trim(),
    password: zod.string()
        .min(3, 'Informe uma senha')
        .max(10),
})

export const Register = () => {
    const {register, handleSubmit, formState: {errors} } = useForm<newUserProps>({
        resolver: zodResolver(registerNewUserFormSchema),
    })
    const [register_response] = useRegister()
    const navigate = useNavigate();

    console.log(errors)

    async function handleCreateNewUser(args: newUserProps) {
        
        try {
            const { data } = await register_response({
              variables: {
                name: args.name,
                email: args.email,
                phone: args.phone,
                password: args.password
              },
            })
            console.log(data)
            alert('Usuario criado com sucesso!')
            navigate('/')
          } catch (erro) {
            alert('deu erro')
          }
        
        console.log(args)
    }

    return (
        <NewUserContainer >
            <form onSubmit={handleSubmit(handleCreateNewUser)} action="">
            <h2>Registre-se e marque um horário com a gente!</h2>
            <label htmlFor="name">Nome</label>
            {errors.name && <AdviceFromValidation>{errors.name?.message}</AdviceFromValidation>}
            <RegisterInput 
                title="Nome" 
                type="text"
                placeholder="Joao da silva..." 
                {...register('name')}
            />
            <label htmlFor="email">Email</label>
            {errors.email && <AdviceFromValidation>{errors.email?.message}</AdviceFromValidation>}
            <RegisterInput 
                title="Email" 
                type="text"
                placeholder="joao@email.com" 
                {...register('email')}
            />
            <label htmlFor="phone">Telefone/Whatsapp</label>
            {errors.phone && <AdviceFromValidation>{errors.phone?.message}</AdviceFromValidation>}
            <RegisterInput
                type="number"
                title="Telefone/WhatsApp" 
                placeholder="31999999999" 
                {...register('phone')}
            />
            <label htmlFor="password">Senha</label>
            {errors.password && <AdviceFromValidation>{errors.password?.message}</AdviceFromValidation>}
            <RegisterInput 
                title="Senha"
                type="password"
                placeholder="********" 
                {...register('password')}
            />
            <SubmitButton disabled={false} type="submit">Cadastrar</SubmitButton> 
            </form>     
        </NewUserContainer>
    )
}