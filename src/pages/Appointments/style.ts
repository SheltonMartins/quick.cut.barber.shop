import { styled } from 'styled-components'

export const AppointmentsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h1{
        margin: 20px;
    }
`

export const AppointmentItem = styled.div`

`

export const AppointmentItens = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 90%;
    height: 50px;
    border: 2px solid red;
    background-color: transparent;
    border-radius: 5px;
    margin-top: 10px;
    gap: 30px;
`