import { Link } from "react-router-dom"
import { NavbarContainer } from "./styles"

export const Navbar = () => {
    return (
        <NavbarContainer>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Sobre</Link></li>
                <li><Link to={'/'}>Contato</Link></li>
            </ul>
        </NavbarContainer>
    )
}