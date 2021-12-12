import React from "react";
import { TextLabel } from "./style";

const ALabel = (props) => {
    const { title, inputName, activeInputElement, errorLabel } = props;
    return (
        <TextLabel
            htmlFor={inputName}
            active={activeInputElement}
            errorLabel={errorLabel}
        >
            {title}
        </TextLabel>
    );
};

export default ALabel;
