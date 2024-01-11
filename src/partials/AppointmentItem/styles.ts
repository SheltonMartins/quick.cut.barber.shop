import styled from 'styled-components';

// Container para os itens do agendamento
export const AppointmentItensContainer = styled.div`
  border: 1px solid #ccc; 
  border-radius: 8px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  padding: 16px; 
  margin-bottom: 16px; 
  width: 80%;
`;


export const StyledAppointmentItem = styled.div`
  margin-bottom: 8px;

  label {
    font-weight: bold;
    margin-right: 8px;
  }
`;