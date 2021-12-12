import React from 'react';
import { StyledInput } from "./style"

const AInput = (props) => {
    const { inputName, inputType, inputPlaceHolder, ...nativeProps } = props;
    return (
        <StyledInput
            id={inputName}
            type={inputType}
            name={inputName}
            autoComplete="off"
            placeholder={inputPlaceHolder}
            {...nativeProps}
        />
    )
}

export default AInput
