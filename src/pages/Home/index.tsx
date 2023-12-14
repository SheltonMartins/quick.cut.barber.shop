import HOME_IMAGE from '../../../public/home.image.jpg'
import { HomeContainer, InitialsWords } from './styles'

export const Home = () => {
    return (
        <HomeContainer>
            <img src={HOME_IMAGE} alt='barbearia' />
            <InitialsWords>
                <h1>Bem vindo a barbearia Corte Rápido</h1>
                <h3>Agende um horario com a gente! Somos os 
                    melhores profissionais da região!</h3>
                <p>There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected 
                    humour, or randomised words which don't look even slightly believable. 
                  </p>
            </InitialsWords>

        </HomeContainer>
        
        

    )
}