import styled from "styled-components";

export const TextLabel = styled.label`
  font-size: 12px;
  text-align: start;
  margin-bottom: 2px;
  margin-left: 2px;
  ${({ active }) =>
        active &&
        `
    color: #068EC8;
  `}
  ${({
            errorLabel
        }) => {
        if (
            errorLabel
        ) {
            return `color: #FF0000;`;
        }
    }}
`;
