import React from 'react';
import { StyledButton } from "./style"

const AButton = (props) => {
    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}

export default AButton
