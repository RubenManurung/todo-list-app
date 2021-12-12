import React from 'react'
import AErrorText from '../../atom/ErrorText'
import AInput from '../../atom/Input'
import ALabel from '../../atom/Label'
import MInputContainer from './InputContainer'

const MSetInput = (props) => {
    const {
        title,
        activeInputElement,
        isFilledInput,
        errorInput,
        validateInputError,
        inputName,
        inputType,
        inputPlaceHolder,
        toggle,
        setTogglePwdType,
        setToggleConfPwdType,
        ...nativeProps
    } = props;
    return (
        <>
            {activeInputElement === inputName ||
                isFilledInput?.length > 0 ||
                errorInput ? (
                <ALabel
                    title={title}
                    filled={activeInputElement === inputName ||
                        isFilledInput?.length > 0}
                    inputName={inputName}
                    activeInputElement={activeInputElement === inputName}
                    errorLabel={errorInput}
                />
            ) : null}
            <MInputContainer active={activeInputElement === inputName}
                errorInput={errorInput}>
                <AInput
                    inputType={inputType}
                    inputName={inputName}
                    inputPlaceHolder={inputPlaceHolder}
                    {...nativeProps}
                />
            </MInputContainer>
            {validateInputError && <AErrorText>{validateInputError}</AErrorText>}
        </>
    )
}

export default MSetInput
