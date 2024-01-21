import { styled } from 'styled-components'

export const NewAppointmentContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding-top: 20px;

    form{
        width: 50%;

        h2{
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
        }
    }


`
export const OptionBarber = styled.option`
    background-color: lightblue;
    padding: 5px;
    color: white;
`


export const RegisterSelect = styled.select`
    border: 1px solid #ccc;
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
    overflow: hidden;
    

    &::placeholder {
      font-style: italic;
      color: ${(props) => props.theme['black']};
      font-family: serif;
      font-size: 18px;
    }
`

export const RegisterInput = styled.input`
    border: 1px solid #ccc;
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
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        background-color: red;
        color: white;
    }
`

export const NewAppointmentWarnig = styled.p`
    font-style: italic;
    font-size: 10px;
    color: red;
`