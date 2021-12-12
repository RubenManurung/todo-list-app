import styled from "styled-components";

export const StyledInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
  font-size: 16px;
  line-height: 24px;
  ::placeholder {
    color: #b4b4b4;
  }

  &:focus ::placeholder {
    color: transparent;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: ${({ error }) => (error ? "#FF0000" : "#232933")};
  }
`;