import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PrLineButton, PrButton } from "./style";
import { MdOutlineDoneOutline } from "react-icons/md";
import MSetInput from '../../molecules/SetInput';
import AButton from '../../atom/Button';

const PopUp = (props) => {
  const [activeElement, setActiveElement] = useState();
  const [errTitle, setErrTitle] = useState(false);
  const [errDescription, setErrDescription] = useState(false);
  const [errCreatedAt, setErrCreatedAt] = useState(false);
  const [errStatus, setErrStatus] = useState(false);
  const [validate, setValidate] = useState({})
  const [todo, setTodo] = useState({
    id: props.sendData[0].id,
    title: "",
    description: "",
    createdAt: "",
    status: ""
  });

  const deActiveElement = () => {
    setActiveElement("")
  }

  const update = (data) => {
    props.setData(prev => prev.map(item => (item.id === data.id ? data : item)));
    props.setIsPopUpUpdate()
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

    if (data.status === "on") {
      data.status = 1
    } else {
      data.status = 0
    }

    if (Object.keys(errorValidation).length === 0) {
      update(data);
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
    if (name === "status" && value) {
      validate.status = "";
      setErrStatus(false);
    }

    setTodo({
      ...todo,
      [name]: value,
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidate(validationInput(todo));
  }


  return (
    <div>
      <Modal>
        <ModalInner>
          <form onSubmit={handleSubmit}>
            <MSetInput
              title="Title"
              activeInputElement={activeElement}
              isFilledInput={todo.title}
              errorInput={errTitle}
              defaultValue={props.sendData[0].title}
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
              defaultValue={props.sendData[0].description}
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
              // value={props.sendData[0].status}
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
            <MSetInput
              title="Status"
              activeInputElement={activeElement}
              isFilledInput={todo.status}
              // value={props.sendData[0].createdAt}
              errorInput={""}
              validateInputError={false}
              // checked={props.sendData[0].status}
              inputName="status"
              inputType="checkbox"
              // inputPlaceHolder="Input description"
              toggle={false}
              onFocus={() => {
                setActiveElement("status");
              }}
              onBlur={() => {
                deActiveElement();
              }}
              onChange={handleChange}
            />
            <AButton type="submit">Submit</AButton>
          </form>

          {/* <h2>
            {props.sendData[0].title}
          </h2>
          <p>{props.sendData[0].description}</p>
          <p>{props.sendData[0].createdAt}</p>
          <p>{props.sendData[0].status == 1 ? <MdOutlineDoneOutline /> : "Belum Selesai"}</p> */}
          {/* <Form /> */}
          <ButtonFlex>
            <PrLineButton onClick={() => props.setIsPopUpUpdate()}>X</PrLineButton>
            {/* <Link href="/"> */}
            {/* <PrButton>Go Now</PrButton> */}
            {/* </Link> */}
          </ButtonFlex>
        </ModalInner>
      </Modal>
    </div>
  );
};

const Modal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalInner = styled.div`
  position: absolute;
  top: 15%;
  left: 30%;
  right: 30%;
  height: auto;
  width: auto;
  border-radius: 5px;
  background: white;
  text-align: center;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2,
  p {
    margin: 0 auto;
  }
  h2 {
    color: #009fe3;
    margin-bottom: 16px;
  }
  @media only screen and (max-width: 720px) {
    left: 3%;
    right: 3%;
  }
`;

const ButtonFlex = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  margin-top: 1.5rem;
  button {
    width: 8rem;
  }
`;
export default PopUp;
