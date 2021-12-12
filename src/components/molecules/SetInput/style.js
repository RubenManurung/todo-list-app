import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  ${({ active }) =>
        active &&
        `
    box-shadow: 0 0 0 2px #068EC8;
  `}
  ${({
            errorDivContainer,
        }) => {
        if (
            errorDivContainer
        )
            return `box-shadow: 0 0 0 2px #FF0000;`;
    }}
  justify-content: center;
  height: 48px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  margin-bottom: 1rem;
  transition: 0.3s linear;
`;