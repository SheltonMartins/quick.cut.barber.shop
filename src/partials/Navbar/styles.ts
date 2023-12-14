import { styled } from 'styled-components';

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: center;
    padding: 20px 0;

    ul{
        display: flex;
        list-style: none;
        gap: 20px;
    }

    a{
        text-decoration: none;
        color: black;
    }
`