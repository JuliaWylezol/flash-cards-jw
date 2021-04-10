import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import Paragraph from "../Paragraph/Paragraph";
import AppContext from "../../context";

const DeckWrapper = styled.div`
  width: 280px;
  height: 130px;
  margin: 20px;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Deck = ({ category, numberOfCards }) => {
  const { openModal } = React.useContext(AppContext);

  return (
    <DeckWrapper onClick={() => openModal(category)}>
      <Paragraph>{category}</Paragraph>
      <Paragraph>{numberOfCards} cards</Paragraph>
    </DeckWrapper>
  );
};

Deck.propTypes = {
  category: PropTypes.string.isRequired,
  numberOfCards: PropTypes.number.isRequired,
};

export default Deck;
