import React from "react";
import AppContext from "../context";
import Card from "./Card";

const DeckView = () => {
  const { decks, activeDeckIndex } = React.useContext(AppContext);
  let indexOfDeck;
  if (activeDeckIndex === null) {
    indexOfDeck = Math.floor(Math.random() * decks.length);
  } else {
    indexOfDeck = activeDeckIndex;
  }

  const activeDeck = decks[indexOfDeck];

  return <Card startDeck={activeDeck} />;
};

export default DeckView;
