import React from "react";
import { ErrorText } from "./style";

const AErroText = (props) => {
    const { children } = props;
    return <ErrorText>{children}</ErrorText>;
};

export default AErroText;
