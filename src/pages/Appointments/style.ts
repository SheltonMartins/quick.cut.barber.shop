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
export const AnyAppointmentsAdvice = styled.p`
    margin: 100px;
`

export const AppointmentsTitleContainer = styled.div`
    width: 90%;
    display: flex;

    a{
        left: 0;
        text-decoration: none;
        display: flex;
        align-items: center;
        color: black;
        position: absolute;
        margin: 20px 60px;
        background-color:#d3d3d3;
        padding: 5px;
        border-radius: 5px;
        transition: 0.2s;
    }

    img{
        color: white;
    }
    h1{
        position: ;
        margin-right: auto;
        margin-left: auto;
    }
`
export const AppointmentsTitleButton = styled.button`

    position: relative;
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
    margin: 10px;
    gap: 30px;
`