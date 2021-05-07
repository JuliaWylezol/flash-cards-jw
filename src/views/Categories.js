import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import AppContext from "../context";
import MainTemplate from "../templates/MainTemplate";
import Deck from "../components/Deck/Deck";
import ButtonIcon from "../components/ButtonIcon/ButtonIcon";
import Heading from "../components/Heading/Heading";
import BackIcon from "../icons/back.svg";
import Pagination from "../components/Pagination/Pagination";

const DecksWrapper = styled.div`
  width: 80%;
  padding-top: 30px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-self: flex-start;
`;

const Categories = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [decksPerPage, setDecksPerPage] = useState(9);
  const { decks } = React.useContext(AppContext);
  const indexOfLastDeck = currentPage * decksPerPage;
  const indexOfFirstDeck = indexOfLastDeck - decksPerPage;
  const currentDecks = decks.slice(indexOfFirstDeck, indexOfLastDeck);

  return (
    <MainTemplate>
      <ButtonIcon
        as={Link}
        to="/"
        icon={BackIcon}
        back
        onClick={() => setCurrentPage(1)}
      />
      <Heading>Choose category deck</Heading>
      <DecksWrapper>
        {currentDecks.map((deck, index) => (
          <Deck
            category={deck.category}
            numberOfCards={deck.cards.length}
            index={index}
            key={deck.category}
          />
        ))}
      </DecksWrapper>
      {decks.length > decksPerPage && (
        <Pagination
          currentPage={currentPage}
          decksPerPage={decksPerPage}
          setCurrentPage={setCurrentPage}
          decksLength={decks.length}
        />
      )}
    </MainTemplate>
  );
};

const mapStateToProps = (state) => {
  const { decks } = state;
  return { decks };
};

export default Categories;
