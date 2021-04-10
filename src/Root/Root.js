import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import AppContext from "../context";
import MainTemplate from "../templates/MainTemplate";
import store from "../store";
import Card from "../views/Card";
import { Categories } from "../views/Categories";
import CreateCard from "../views/CreateCard";
import MainMenu from "../views/MainMenu";
import Modal from "../components/Modal/Modal";
import Deck from "../views/DeckView";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      decksPerPage: 9,
      activeDeckIndex: null,
      decks: [
        {
          category: "Math",
          id: 0,
          cards: [
            { question: "Pytanie 1?", cardId: 92211, answer: "Odpowiedź 1" },
            { question: "Pytanie 2?", cardId: 31899, answer: "Odpowiedź 2" },
            { question: "Pytanie 3?", cardId: 37573, answer: "Odpowiedź 3" },
            { question: "Pytanie 4?", cardId: 38583, answer: "Odpowiedź 4" },
            { question: "Pytanie 5?", cardId: 16853, answer: "Odpowiedź 5" },
          ],
          infoData: {
            timesPlayed: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            lastPlayed: "22.10.2020",
          },
        },
        {
          category: "English",
          id: 1,
          cards: [
            { question: "What is 2+2?", cardId: 97190, answer: "4" },
            { question: "What is 20/2?", cardId: 35106, answer: "10" },
            { question: "What is 2*18?", cardId: 60015, answer: "36" },
          ],
          infoData: {
            timesPlayed: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            lastPlayed: "22.10.2020",
          },
        },
        {
          category: "Polish",
          id: 2,
          cards: [
            { question: "What is 2+2?", cardId: 66769, answer: "4" },
            { question: "What is 20/2?", cardId: 40723, answer: "10" },
            { question: "What is 2*18?", cardId: 47773, answer: "36" },
          ],
          infoData: {
            timesPlayed: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            lastPlayed: "22.10.2020",
          },
        },
        {
          category: "Spanish",
          id: 3,
          cards: [
            { question: "What is 2+2?", cardId: 2560, answer: "4" },
            { question: "What is 20/2?", cardId: 43653, answer: "10" },
            { question: "What is 2*18?", cardId: 40805, answer: "36" },
          ],
          infoData: {
            timesPlayed: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            lastPlayed: "22.10.2020",
          },
        },
        {
          category: "Biology",
          id: 4,
          cards: [
            { question: "What is 2+2?", cardId: 67929, answer: "4" },
            { question: "What is 20/2?", cardId: 68434, answer: "10" },
            { question: "What is 2*18?", cardId: 62244, answer: "36" },
          ],
          infoData: {
            timesPlayed: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            lastPlayed: "22.10.2020",
          },
        },
        {
          category: "Chemistry",
          id: 5,
          cards: [
            { question: "What is 2+2?", cardId: 53959, answer: "4" },
            { question: "What is 20/2?", cardId: 2275, answer: "10" },
            { question: "What is 2*18?", cardId: 50383, answer: "36" },
          ],
          infoData: {
            timesPlayed: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            lastPlayed: "22.10.2020",
          },
        },
        {
          category: "Art",
          id: 6,
          cards: [
            { question: "What is 2+2?", cardId: 94766, answer: "4" },
            { question: "What is 20/2?", cardId: 88642, answer: "10" },
            { question: "What is 2*18?", cardId: 34121, answer: "36" },
          ],
          infoData: {
            timesPlayed: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            lastPlayed: "22.10.2020",
          },
        },
        {
          category: "French",
          id: 7,
          cards: [
            { question: "What is 2+2?", cardId: 88006, answer: "4" },
            { question: "What is 20/2?", cardId: 88118, answer: "10" },
            { question: "What is 2*18?", cardId: 31511, answer: "36" },
          ],
          infoData: {
            timesPlayed: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            lastPlayed: "22.10.2020",
          },
        },
        {
          category: "Geography",
          id: 8,
          cards: [
            { question: "What is 2+2?", cardId: 55782, answer: "4" },
            { question: "What is 20/2?", cardId: 68068, answer: "10" },
            { question: "What is 2*18?", cardId: 70301, answer: "36" },
          ],
          infoData: {
            timesPlayed: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            lastPlayed: "22.10.2020",
          },
        },
        {
          category: "History",
          id: 9,
          cards: [
            { question: "What is 2+2?", cardId: 81583, answer: "4" },
            { question: "What is 20/2?", cardId: 67905, answer: "10" },
            { question: "What is 2*18?", cardId: 87946, answer: "36" },
          ],
          infoData: {
            timesPlayed: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            lastPlayed: "22.10.2020",
          },
        },
      ],
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

  paginateRight = () => {
    if (
      Math.ceil(this.state.decks.length / this.state.decksPerPage) ===
      this.state.currentPage
    ) {
      return;
    }
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
  };

  paginateLeft = () => {
    if (this.state.currentPage === 1) {
      return;
    }
    this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }));
  };

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
    this.setState({ decks: newDecks, isModalOpen: false });
  };

  addCardToDeck = (question, answer, category) => {
    const { decks } = this.state;
    const newCard = {
      question: question,
      cardId: Math.floor(Math.random() * 100000),
      answer: answer,
    };

    let indexOfDeck;

    const deckToAddCard = {
      ...decks.find((deck, index) => {
        if (deck.category === category) {
          indexOfDeck = index;
          return deck;
        }
        return null;
      }),
    };

    const updatedCards = [...deckToAddCard.cards, newCard];

    deckToAddCard.cards = updatedCards;

    const decksAfter = [...decks];

    decksAfter[indexOfDeck] = deckToAddCard;

    this.setState({ decks: decksAfter });
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

  setCurrentPage = () => {
    this.setState({ currentPage: 1 });
  };

  updateModalInfo = () => {
    const { index } = this.state.modalInfo;
    const today = new Date();
    const date = `${today.getDate()}.${
      today.getMonth() + 1
    }.${today.getFullYear()}`;

    const decks = [...this.state.decks];
    const updatedDeck = { ...decks[index] };
    const updatedInfo = {
      timesPlayed: updatedDeck.infoData.timesPlayed + 1,
      correctAnswers: updatedDeck.infoData.correctAnswers,
      wrongAnswers: updatedDeck.infoData.wrongAnswers,
      lastPlayed: date,
    };
    updatedDeck.infoData = updatedInfo;
    decks[index] = updatedDeck;
    this.setState({ decks: decks });
  };

  updateAnswersCount = (correctAnswers, wrongAnswers) => {
    const { index } = this.state.modalInfo;
    const decks = [...this.state.decks];
    const updatedDeck = { ...decks[index] };
    const updatedInfo = {
      timesPlayed: updatedDeck.infoData.timesPlayed,
      correctAnswers: updatedDeck.infoData.correctAnswers + correctAnswers,
      wrongAnswers: updatedDeck.infoData.wrongAnswers + wrongAnswers,
      lastPlayed: updatedDeck.infoData.lastPlayed,
    };
    updatedDeck.infoData = updatedInfo;
    decks[index] = updatedDeck;
    this.setState({ decks: decks });
  };

  render() {
    const providerValue = {
      decks: this.state.decks,
      decksPerPage: this.state.decksPerPage,
      currentPage: this.state.currentPage,
      activeDeckIndex: this.state.activeDeckIndex,
      paginateR: this.paginateRight,
      paginateL: this.paginateLeft,
      openModal: this.openModal,
      resetActiveDeck: this.resetActiveDeck,
      addCardToDeck: this.addCardToDeck,
      addDeckWithCard: this.addNewDeckWithCard,
      setCurrentPage: this.setCurrentPage,
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
