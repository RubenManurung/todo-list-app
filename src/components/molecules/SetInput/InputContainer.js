import React from "react";
import { Container } from "./style";

const M_InputContainer = (props) => {
    const { active, errorInput, children } = props;
    return <Container active={active} errorDivContainer={errorInput}>{children}</Container>;
};

export default M_InputContainer;
