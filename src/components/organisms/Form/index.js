import React from 'react';
import { useEffect, useState } from "react";
import AButton from '../../atom/Button';
import MSetInput from '../../molecules/SetInput';
import { StyledForm } from './style';

const Form = (props) => {
    const [activeElement, setActiveElement] = useState();
    const [errTitle, setErrTitle] = useState(false);
    const [errDescription, setErrDescription] = useState(false);
    const [errCreatedAt, setErrCreatedAt] = useState(false);
    const [validate, setValidate] = useState({})
    const [todo, setTodo] = useState({
        id: props.data?.length + 1,
        title: "",
        description: "",
        createdAt: "",
        status: 0
    });

    const deActiveElement = () => {
        setActiveElement("")
    }

    const validationInput = (data) => {
        let errorValidation = {};
        if (!data.title) {
            errorValidation.title = "Title can't be empty.";
            setErrTitle(true);
        }

        if (!data.description) {
            errorValidation.description = "Description can't be empty.";
            setErrDescription(true);
        }

        if (!data.createdAt) {
            errorValidation.createdAt = "Time can't be empty.";
            setErrCreatedAt(true);
        }

        if (Object.keys(errorValidation).length === 0) {
            props.saveTodoList(todo)
        }


        return errorValidation;
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "title" && value) {
            validate.title = "";
            setErrTitle(false);
        }

        if (name === "description" && value) {
            validate.description = "";
            setErrDescription(false);
        }

        if (name === "createdAt" && value) {
            validate.createdAt = "";
            setErrCreatedAt(false);
        }

        setTodo({
            ...todo,
            [name]: value,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidate(validationInput(todo));
        props.setIsFinish(0)
    }


    return (
        <div>
            <StyledForm onSubmit={handleSubmit}>
                <MSetInput
                    title="Title"
                    activeInputElement={activeElement}
                    isFilledInput={todo.title}
                    errorInput={errTitle}
                    validateInputError={validate.title}
                    inputName="title"
                    inputType="text"
                    inputPlaceHolder="Input your title"
                    onFocus={() => {
                        setActiveElement("title");
                    }}
                    onBlur={() => {
                        deActiveElement();
                    }}
                    onChange={handleChange}
                />
                <MSetInput
                    title="Description"
                    activeInputElement={activeElement}
                    isFilledInput={todo.description}
                    errorInput={errDescription}
                    validateInputError={validate.description}
                    inputName="description"
                    inputType="text"
                    inputPlaceHolder="Input description"
                    onFocus={() => {
                        setActiveElement("description");
                    }}
                    onBlur={() => {
                        deActiveElement();
                    }}
                    onChange={handleChange}
                />
                <MSetInput
                    title="Time"
                    activeInputElement={activeElement}
                    isFilledInput={todo.createdAt}
                    errorInput={errCreatedAt}
                    validateInputError={validate.createdAt}
                    inputName="createdAt"
                    inputType="datetime-local"
                    inputPlaceHolder="Input description"
                    toggle={false}
                    onFocus={() => {
                        setActiveElement("createdAt");
                    }}
                    onBlur={() => {
                        deActiveElement();
                    }}
                    onChange={handleChange}
                />
                <AButton type="submit">Submit</AButton>
            </StyledForm>
        </div>
    )
}

export default Form
