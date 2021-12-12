import styled from "styled-components";

export const PrLineButton = styled.button`
  border: 1px solid #009FE3;
  border-radius: 5px;
  background-color: #FFFFFF;
  padding: 0.75rem 1.75rem;
  width: 12rem;
  font-family: "Avenir Next LT Pro";
  font-size: 1rem;
  color: #009FE3;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #009FE320;
  }
`
export const PrButton = styled.button`
  background-color: #009FE3;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-family: "Avenir Next LT Pro";
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;
  padding: 0.75rem 1.5rem;

  &:hover {
    background-color: #068EC8;
    transform: translateY(-3px);
  }
`