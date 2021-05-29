import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import CloseIcon from "../../icons/close.svg";
import AppContext from "../../context";

const CardWrapper = styled.div`
  width: 700px;
  height: 450px;
  margin: 0 auto;
  position: relative;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    width: 600px;
    height: 400px;
  }
  @media (max-width: 600px) {
    width: 500px;
    height: 35vh;
  }
  @media (max-width: 470px) {
    width: 400px;
  }
  @media (max-width: 370px) {
    width: 300px;
    height: 25vh;
  }
`;

const ButtonWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardBack = ({ card, switchCard }) => {
  const { resetActiveDeck } = React.useContext(AppContext);

  return (
    <CardWrapper>
      <ButtonIcon
        as={Link}
        to="/"
        icon={CloseIcon}
        onClick={() => resetActiveDeck()}
        exit
      />
      <Paragraph>{card}</Paragraph>
      <ButtonWrapper>
        <Button onClick={() => switchCard("correct")}>Mark as correct</Button>
        <Button onClick={() => switchCard("wrong")}>Mark as incorrect</Button>
      </ButtonWrapper>
    </CardWrapper>
  );
};

CardBack.propTypes = {
  card: PropTypes.string.isRequired,
  switchCard: PropTypes.func.isRequired,
};

export default CardBack;
