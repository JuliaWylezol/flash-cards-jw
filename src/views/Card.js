import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AppContext from "../context";
import MainTemplate from "../templates/MainTemplate";
import CardFront from "../components/Card/CardFront";
import CardBack from "../components/Card/CardBack";
import Heading from "../components/Heading/Heading";
import Summary from "../components/Summary/Summary";

const ContentWrapper = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const CounterWrapper = styled.div`
  margin-top: 50px;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Card = ({ startDeck }) => {
  let index;
  const initialDeck = [...startDeck.cards];
  const [isFrontActive, setIsFrontActive] = useState(true);
  const [isSummaryActive, setIsSummaryActive] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [activeDeck, setActiveDeck] = useState(initialDeck);
  if (activeDeck === initialDeck) {
    index = Math.floor(Math.random() * activeDeck.length);
  }
  const [randomIndexOfCard, setRandomIndexOfCard] = useState(index);
  const activeCard = activeDeck[randomIndexOfCard];
  const frontView = activeCard.question;
  const backView = activeCard.answer;
  const { updateAnswersCount } = React.useContext(AppContext);

  // function countTestTime() {
  //   if (minutes === 59) {
  //     setHours(hours + 1);
  //     setMinutes(0);
  //   } else if (seconds === 59) {
  //     setMinutes(minutes + 1);
  //     setSeconds(0);
  //   } else {
  //     setSeconds(seconds + 1);
  //   }
  // }

  // function countTest() {
  //   const timer = setInterval(countTestTime, 1000);
  // }

  // countTest();

  const updateDeck = () => {
    if (activeDeck.length > 0) {
      const newDeck = activeDeck.filter(
        (card) => card.cardId !== activeDeck[randomIndexOfCard].cardId
      );
      console.log(newDeck);
      setActiveDeck(newDeck);
      setRandomIndexOfCard(Math.floor(Math.random() * newDeck.length));
      console.log(activeDeck.length);
      console.log(randomIndexOfCard);
    } else if (activeDeck.length === 0) {
      setIsFrontActive(false);
      setIsSummaryActive(true);
      updateAnswersCount(correctAnswers, wrongAnswers);
    }
  };

  const switchToBack = () => {
    setIsFrontActive(false);
  };

  const switchToFront = (result) => {
    if (result === "correct") {
      setCorrectAnswers(correctAnswers + 1);
    } else if (result === "wrong") {
      setWrongAnswers(wrongAnswers + 1);
    }

    updateDeck();
    if (activeDeck.length > 0) {
      setIsFrontActive(true);
    }
  };

  return (
    <MainTemplate>
      <ContentWrapper>
        {isFrontActive && !isSummaryActive && (
          <CardFront card={frontView} switchCard={switchToBack} />
        )}
        {!isFrontActive && !isSummaryActive && (
          <CardBack card={backView} switchCard={switchToFront} />
        )}
        {isSummaryActive && <Summary correctAnswers={correctAnswers} />}
        <CounterWrapper>
          <Heading>Correct answers: {correctAnswers}</Heading>
          <Heading>Wrong answers: {wrongAnswers} </Heading>
        </CounterWrapper>
      </ContentWrapper>
    </MainTemplate>
  );
};

Card.propTypes = {
  startDeck: PropTypes.shape({
    category: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.number,
    infoData: PropTypes.shape({
      correctAnswers: PropTypes.number,
      lastPlayed: PropTypes.string,
      timesPlayed: PropTypes.number,
      wrongAnswers: PropTypes.number,
    }),
  }),
};

export default Card;
