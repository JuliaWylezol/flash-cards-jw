import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import AppContext from "../context";
import MainTemplate from "../templates/MainTemplate";
import store from "../store";
import Card from "../views/Card";
import Categories from "../views/Categories";
import CreateCard from "../views/CreateCard";
import MainMenu from "../views/MainMenu";
import Modal from "../components/Modal/Modal";
import Deck from "../views/DeckView";
import decks from "../data";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDeckIndex: null,
      decks: decks,
      isModalOpen: false,
      modalInfo: {
        category: "None",
        numberOfCards: 0,
        timesPlayed: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        lastPlayed: "never",
      },
    };
  }

  openModal = (categoryOfDeck) => {
    const activeDeck = this.state.decks.find((deck) => {
      if (deck.category === categoryOfDeck) {
        return deck;
      }
      return null;
    });

    const index = activeDeck.id;
    this.setState({ isModalOpen: true });
    this.setState({ activeDeckIndex: index });
    const deck = this.state.decks[index];
    const { category } = deck;
    const numberOfCards = deck.cards.length;
    const {
      timesPlayed,
      correctAnswers,
      wrongAnswers,
      lastPlayed,
    } = deck.infoData;

    this.setState({
      modalInfo: {
        index: index,
        category: category,
        numberOfCards: numberOfCards,
        timesPlayed: timesPlayed,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers,
        lastPlayed: lastPlayed,
      },
      activeDeck: {
        id: null,
        activeCard: 0,
        cardsPlayed: [9383, 328324],
      },
    });
  };

  resetActiveDeck = () => {
    this.setState({ activeDeckIndex: null });
  };

  startDeck = (category) => {
    this.setState({ isModalOpen: false });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    this.resetActiveDeck();
  };

  deleteCategory = () => {
    const currentDecks = this.state.decks;
    const indexToRemove = this.state.modalInfo.index;

    if (indexToRemove === 0 && currentDecks.length > 9) {
      this.paginateLeft();
    }
    const firstPart = currentDecks.slice(0, indexToRemove);
    const secondPart = currentDecks.slice(
      indexToRemove + 1,
      currentDecks.length
    );
    const newDecks = firstPart.concat(secondPart);
    this.setState({
      isModalOpen: false,
      decks: newDecks,
      modalInfo: {
        category: "None",
        numberOfCards: 0,
        timesPlayed: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        lastPlayed: "never",
      },
    });
  };

  addCardToDeck = (question, answer, category) => {
    const allDecks = this.state.decks;
    const newCard = {
      question: question,
      cardId: Math.floor(Math.random() * 100000),
      answer: answer,
    };

    let indexOfDeck;

    const deckToAddCard = {
      ...allDecks.find((deck, index) => {
        if (deck.category === category) {
          indexOfDeck = index;
          return deck;
        }
        return null;
      }),
    };

    const updatedCards = [...deckToAddCard.cards, newCard];

    deckToAddCard.cards = updatedCards;

    const decksAfter = [...allDecks];

    decksAfter[indexOfDeck] = deckToAddCard;

    this.setState({ decks: decksAfter });
    // window.localStorage.setItem("decks", JSON.stringify(decksAfter));
  };

  addNewDeckWithCard = (question, answer, category) => {
    const newDeck = {
      category: category,
      id: this.state.decks.length,
      cards: [
        {
          question: question,
          cardId: Math.floor(Math.random() * 100000),
          answer: answer,
        },
      ],
      infoData: {
        timesPlayed: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        lastPlayed: "Never",
      },
    };

    const decksAfter = [...this.state.decks, newDeck];

    this.setState({ decks: decksAfter });
    // window.localStorage.setItem("decks", JSON.stringify(decksAfter));
    // console.log(this.state.decks);
  };

  setActiveDeck = (deck) => {
    this.setState({
      activeDeck: {
        cards: deck,
        activeCard: null,
        cardsPlayed: [],
        cardsUnplayed: [],
      },
    });
  };

  setActiveCard = () => {
    const index = Math.floor(
      Math.random() * this.state.activeDeck.cards.length
    );
    const activeDeck = { ...this.state.activeDeck };
    activeDeck.activeCard = index;
    this.setState({ activeDeck });
  };

  updateModalInfo = () => {
    const { index } = this.state.modalInfo;
    const today = new Date();
    const date = `${today.getDate()}.${
      today.getMonth() + 1
    }.${today.getFullYear()}`;

    const allDecks = [...this.state.decks];
    const updatedDeck = { ...allDecks[index] };
    const updatedInfo = {
      timesPlayed: updatedDeck.infoData.timesPlayed + 1,
      correctAnswers: updatedDeck.infoData.correctAnswers,
      wrongAnswers: updatedDeck.infoData.wrongAnswers,
      lastPlayed: date,
    };
    updatedDeck.infoData = updatedInfo;
    allDecks[index] = updatedDeck;
    this.setState({ decks: allDecks });
    // window.localStorage.setItem("decks", JSON.stringify(decks));
  };

  updateAnswersCount = (correctAnswers, wrongAnswers) => {
    const { index } = this.state.modalInfo;
    const allDecks = [...this.state.decks];
    const updatedDeck = { ...allDecks[index] };
    const updatedInfo = {
      timesPlayed: updatedDeck.infoData.timesPlayed,
      correctAnswers: updatedDeck.infoData.correctAnswers + correctAnswers,
      wrongAnswers: updatedDeck.infoData.wrongAnswers + wrongAnswers,
      lastPlayed: updatedDeck.infoData.lastPlayed,
    };
    updatedDeck.infoData = updatedInfo;
    allDecks[index] = updatedDeck;
    this.setState({ decks: allDecks });
    // window.localStorage.setItem("decks", JSON.stringify(decks));
  };

  render() {
    const providerValue = {
      decks: this.state.decks,
      activeDeckIndex: this.state.activeDeckIndex,
      openModal: this.openModal,
      resetActiveDeck: this.resetActiveDeck,
      addCardToDeck: this.addCardToDeck,
      addDeckWithCard: this.addNewDeckWithCard,
      updateAnswersCount: this.updateAnswersCount,
    };

    return (
      <Provider store={store}>
        <MainTemplate>
          <BrowserRouter>
            <AppContext.Provider value={providerValue}>
              <Switch>
                <Route exact path="/" component={MainMenu} />
                <Route path="/card" component={Card} />
                <Route path="/deck" component={Deck} />
                <Route exact path="/categories" component={Categories} />
                <Route path="/create" component={CreateCard} />
              </Switch>
              {this.state.isModalOpen && (
                <Modal
                  closeModalFn={() => this.closeModal()}
                  startDeckFn={() => this.startDeck()}
                  modalInfo={this.state.modalInfo}
                  deleteCategory={() => this.deleteCategory()}
                  updateModalInfoFn={() => this.updateModalInfo()}
                />
              )}
            </AppContext.Provider>
          </BrowserRouter>
        </MainTemplate>
      </Provider>
    );
  }
}

export default Root;
