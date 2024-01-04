import { useRegister } from "../../graphql/hooks/useRegister"
import { NewUserContainer, RegisterInput, SubmitButton } from "./styles"
import { useForm } from "react-hook-form"

interface newUserProps {
    name: string
    email: string
    phone: string
    password: string
}

export const Register = () => {
    const {register, handleSubmit} = useForm<newUserProps>()
    const [register_response] = useRegister()

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
          } catch (erro) {
            alert('deu erro')
          }
        
        console.log(args)
    }

    return (
        <NewUserContainer >
            <form onSubmit={handleSubmit(handleCreateNewUser)} action="">
            <label htmlFor="name">Nome</label>
            <RegisterInput 
                title="Nome" 
                placeholder="Joao da silva..." 
                {...register('name')}
            />
            <label htmlFor="email">Email</label>
            <RegisterInput 
                title="Email" 
                placeholder="joao@email.com" 
                {...register('email')}
            />
            <label htmlFor="phone">Telefone/Whatsapp</label>
            <RegisterInput 
                title="Telefone/WhatsApp" 
                placeholder="31999999999" 
                {...register('phone')}
            />
            <label htmlFor="password">Senha</label>
            <RegisterInput 
                title="Senha" 
                placeholder="********" 
                {...register('password')}
            />
            <SubmitButton type="submit">Cadastrar</SubmitButton> 
            </form>     
        </NewUserContainer>
    )
}