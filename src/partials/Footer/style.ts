import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    gap: 20px;
    display: flex;
  }

  a {
    text-decoration: none;
    color: white;
  }

  /* Adicione estas propriedades para tornar a navbar responsiva */
  max-height: 200px;
  overflow-y: auto;
`;