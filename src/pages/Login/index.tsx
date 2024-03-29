import { useLogin } from "../../graphql/hooks/useLogin"
import { useForm } from "react-hook-form"
import { LoginContainer, StyledLoginInput, SubmitButton } from "./styles"
import { useNavigate } from "react-router-dom"

interface LoginProps {
    email: string
    password: string
}

export const Login = () => {
    const {register, handleSubmit} = useForm<LoginProps>();
    const [register_response] = useLogin();
    const navigate = useNavigate();

    async function handleCreateNewUser(args: LoginProps) {
        
        try {
            const { data } = await register_response({
              variables: {
                email: args.email,
                password: args.password
              },
            })
            console.log(data.login.token)
            sessionStorage.setItem('token', data.login.token)
            navigate(`/`)
          } catch (erro) {
            alert('deu erro')
          }
        
        console.log(args)
    }

    return (
        <LoginContainer >
            <form onSubmit={handleSubmit(handleCreateNewUser)} action="">
              <h2>Faça login</h2>
            <label htmlFor="email">Email</label>
            <StyledLoginInput
                title="Email" 
                placeholder="joao@email.com" 
                {...register('email')}
            />
            <label htmlFor="password">Senha</label>
            <StyledLoginInput 
                title="Senha" 
                placeholder="********" 
                type="password"
                {...register('password')}
            />
            <SubmitButton disabled={false} type="submit">Entrar</SubmitButton> 
            </form>     
        </LoginContainer>
    )
}