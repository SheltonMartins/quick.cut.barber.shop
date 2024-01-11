import { styled } from 'styled-components'

export const LoginContainer = styled.div`
    margin: 60px auto;
    width: 30%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    padding-top: 20px;
    border: 1px solid black;
    border-radius: 5px;

    h2{
        margin: 10px 0;
        text-align: center;
    }
    form{
        width: 80%;

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
    width: 100%;
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