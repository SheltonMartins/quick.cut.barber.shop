import { styled } from 'styled-components';

export const NavbarContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    ul{
        display: flex;
        list-style: none;
        gap: 35px;
    }

    a{
        text-decoration: none;
        color: black;
        

        &:hover{
            border-bottom: 2px solid red;
        }
    }
`

export const LinksContainer = styled.div`
    margin-left: 20px;
`

export const RegisterContainer = styled.div`
right: 0;
position: absolute;
padding-right: 30px;
`

export const ButtonNavBar = styled.button`
    border: 1px solid red;
    width: 100px;
    height: 40px;
    border-radius: 8px;
    background-color: transparent;
    transition: 0.2s;
    cursor: pointer;
    &:hover{
        background-color: red;
        color: white;
    }
`