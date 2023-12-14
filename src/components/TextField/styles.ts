import { styled } from 'styled-components'

export const TextFieldContainer = styled.div`
    margin-top: 20px;
    width: 90%;
`
export const TextFieldInput = styled.input`
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

    &::placeholder {
      font-style: italic;
      color: ${(props) => props.theme['black']};
      font-family: serif;
      font-size: 18px;
    }


`