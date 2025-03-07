import styled from "styled-components";
export const Title = styled.h1`
  color: ${(props) =>
    props.isRed ? "red" : "blue"}; // o color tem : pois estou passando uma função
  small {
    font-size: 50pt;
  }
`;
export const Teste = styled.p`
  background-color: green;
`;
