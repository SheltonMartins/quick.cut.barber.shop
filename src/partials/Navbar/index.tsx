import { Link, useNavigate } from "react-router-dom"
import { ButtonNavBar, LinksContainer, NavbarContainer, RegisterContainer } from "./styles"
import { useEffect, useState } from "react"
// import { useNavbar } from "../../graphql/hooks/useNavbar"
import { useQuery } from "@apollo/client"
import { NAVBAR_USER } from "../../graphql/querys/navbar.query"


interface NavbarUserResponse {
    id: string
    name: string
}

export const Navbar = () => {
    const token = sessionStorage.getItem('token')
    const [isLogged, setIsLogged] = useState<boolean>(token != null);
    const navigate = useNavigate();
    
    const { data } = useQuery<{ setUserByToken: NavbarUserResponse }>(NAVBAR_USER, {
        variables: {
            token: token || ''
        }
    })


    console.log(data?.setUserByToken.name)

    const logout = () => {
        sessionStorage.removeItem('token')
        // alert('Voce está deslogado.')
        navigate('/')
    }

    // async function handleSetCurrentUser(token: string) {
        
    //     try {
    //         const { data } = await navbar_response({
    //           variables: {
    //             token: token
    //           },
    //         })
    //         console.log(data)

    //       } catch (erro) {
    //         alert('deu erro')
    //       }

    // }

    useEffect(()=>{
        setIsLogged(!!token)
    },[token])

    return (
        <NavbarContainer>
            <LinksContainer>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/'}>Sobre</Link></li>
                    <li><Link to={'/'}>Contato</Link></li>
                </ul>
            </LinksContainer>
            <RegisterContainer>
                <ul>
                    {isLogged ? (
                        <>
                            <li>Seja bem vindo! </li>
                            <li><Link to={`/Appointments/${data?.setUserByToken.id}`}>Compromissos</Link></li>
                            <ButtonNavBar onClick={logout}>Sair</ButtonNavBar>
                        </>
                    ) : (
                        <>
                            <li>Entre ou cadastre-se!</li>
                            <li><Link to={'/Register'}>Cadastrar</Link></li>
                            <li><Link to={'/Login'}>Entrar</Link></li>
                        </>
                    )}
                </ul>
            </RegisterContainer>
        </NavbarContainer>
    )
}