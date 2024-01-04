import { styled } from 'styled-components'

export const LoginContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 100px;
    padding-top: 20px;

    form{
        width: 25%;

    }


`

export const StyledLoginInput = styled.input`
    border: 1px solid red;
    height: 50px;
    width: 100%;
    background-color: transparent;
    border-radius: 3px;
    outline: none;
    padding-left: 15px;
    font-style: italic;
    font-family: serif;
    font-size: 18px;
    transition: 0.5s;
    margin-top: 5px;
    margin-bottom: 15px;

    &::placeholder {
      font-style: italic;
      color: ${(props) => props.theme['black']};
      font-family: serif;
      font-size: 18px;
    }


`


export const SubmitButton = styled.button`
    border: 1px solid red;
    width: 150px;
    height: 50px;
    margin: 10px 0;
    border-radius: 20px;
    background-color: transparent;
    margin-left: auto;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        background-color: red;
        color: white;
    }
`