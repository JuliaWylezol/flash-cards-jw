import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import AppContext from "../../context";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import CloseIcon from "../../icons/close.svg";

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
`;

const CardFront = ({ card, switchCard, category }) => {
  const { resetActiveDeck } = React.useContext(AppContext);
  return (
    <>
      <Heading>{category}</Heading>
      <CardWrapper>
        <ButtonIcon
          as={Link}
          to="/"
          icon={CloseIcon}
          onClick={() => resetActiveDeck()}
          exit
        />
        <Paragraph>{card}</Paragraph>
        <Button onClick={() => switchCard()}>Show answer</Button>
      </CardWrapper>
    </>
  );
};

CardFront.propTypes = {
  card: PropTypes.string.isRequired,
  switchCard: PropTypes.func.isRequired,
};

export default CardFront;
