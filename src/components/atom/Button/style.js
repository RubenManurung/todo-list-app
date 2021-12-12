import styled from "styled-components";

export const StyledButton = styled.button`
  ${'' /* margin-top: 50px; */}
  ${'' /* margin-bottom: 20px; */}
  height: 40px;
  border-radius: 4px;
  background-color: #009fe3;
  color: white;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: none;
  transition: 0.4s ease all;

  &:hover {
    background-color: #068ec8;
    cursor: pointer;
  }
`;