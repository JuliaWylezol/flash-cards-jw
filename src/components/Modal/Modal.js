import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import exitIcon from "../../icons/close.svg";
import trashIcon from "../../icons/trash.svg";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";

const ModalContentWrapper = styled.div`
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 30vw;
  height: 60vh;
  background-color: ${({ theme }) => theme.yellow};
  box-shadow: 0 10px 40px -15px rgba(#818181, 0.5);
  border-radius: 5px;
  position: fixed;
  z-index: 2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(199, 196, 196, 0.83);
  backdrop-filter: blur(3px);
  transition: 0.5s;
  pointer-events: none;
  user-select: none;
`;

const AllInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Modal = ({
  closeModalFn,
  startDeckFn,
  modalInfo,
  deleteCategory,
  updateModalInfoFn,
}) => {
  const {
    category,
    numberOfCards,
    timesPlayed,
    correctAnswers,
    wrongAnswers,
    lastPlayed,
  } = modalInfo;

  const openDeckCards = (startDeck, updateModalInfo) => {
    updateModalInfo();
    startDeck();
  };
  return (
    <>
      <Overlay />
      <ModalContentWrapper>
        <ButtonIcon onClick={closeModalFn} exit icon={exitIcon} />
        <ButtonIcon onClick={deleteCategory} icon={trashIcon} trash />
        <AllInfosWrapper>
          <Paragraph category>{category}</Paragraph>
          <InfoWrapper>
            <Paragraph>Cards:</Paragraph>
            <Paragraph>{numberOfCards}</Paragraph>
          </InfoWrapper>
          <InfoWrapper>
            <Paragraph>Times played:</Paragraph>
            <Paragraph>{timesPlayed}</Paragraph>
          </InfoWrapper>
          <InfoWrapper>
            <Paragraph>Correct answers:</Paragraph>
            <Paragraph>{correctAnswers}</Paragraph>
          </InfoWrapper>
          <InfoWrapper>
            <Paragraph>Wrong answers:</Paragraph>
            <Paragraph>{wrongAnswers}</Paragraph>
          </InfoWrapper>
          <InfoWrapper>
            <Paragraph>Last played:</Paragraph>
            <Paragraph>{lastPlayed}</Paragraph>
          </InfoWrapper>
          <Button
            as={Link}
            to="/deck"
            onClick={() => openDeckCards(startDeckFn, updateModalInfoFn)}
            start
          >
            Start flash cards
          </Button>
        </AllInfosWrapper>
      </ModalContentWrapper>
    </>
  );
};

export default Modal;
