import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { PrLineButton, PrButton } from "./style";
import { MdOutlineDoneOutline } from "react-icons/md"

const PopUp = (props) => {

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
  }, [])

  const handleClick = (e) => {
    if (
      e.target.className != "sc-furwcr" &&
      e.target.className != "sc-pVTFL"
    ) {
      return props.setIsPopUp()
    }
  };

  return (
    <div>
      <Modal>
        <ModalInner>
          <h2>
            {props.sendData[0].title}
          </h2>
          <p>{props.sendData[0].description}</p>
          <p>{props.sendData[0].createdAt}</p>
          <p>{props.sendData[0].status == 1 ? <MdOutlineDoneOutline /> : "Belum Selesai"}</p>
          {/* <Form /> */}
          <ButtonFlex>
            <PrLineButton onClick={() => props.setIsPopUp()}>X</PrLineButton>
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
