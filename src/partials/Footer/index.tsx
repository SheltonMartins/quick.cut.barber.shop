import { Link } from "react-router-dom"
import { FooterContainer } from "./style"

export const Footer = () => {
    return (
        <FooterContainer>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Sobre</Link></li>
                <li><Link to={'/'}>Contato</Link></li>
            </ul>
        </FooterContainer>
    )
}