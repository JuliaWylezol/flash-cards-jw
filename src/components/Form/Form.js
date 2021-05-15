import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import Paragraph from "../Paragraph/Paragraph";
import SelectInput from "../SelectInput/SelectInput";
import Button from "../Button/Button";
import AppContext from "../../context";

const InputWrapper = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RadioWrapper = styled.div`
  width: 70%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const types = {
  newCategory: "new",
  existCategory: "exist",
};

class Form extends React.Component {
  state = {
    activeOption: types.newCategory,
    choosenDeck: null,
  };

  handleRadioBtnChange = (type) => {
    this.setState({ activeOption: type });
  };

  newCardInfo = (addCardFunc, addDeckFunc) => {
    const question = document.getElementById("question");
    const answer = document.getElementById("answer");
    const category = document.getElementById("category");

    if (question.value === "" || answer.value === "" || category.value === "") {
      window.alert("You have to fill all inputs.");
    } else {
      if (this.state.activeOption === "exist") {
        addCardFunc(question.value, answer.value, category.value);
      } else {
        addDeckFunc(question.value, answer.value, category.value);
      }

      question.value = "";
      answer.value = "";
      category.value = "";
    }
  };

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <>
            <RadioWrapper>
              <Input
                id={types.newCategory}
                type="radio"
                checked={this.state.activeOption === types.newCategory}
                onChange={() => this.handleRadioBtnChange(types.newCategory)}
                radio
              />
              <label htmlFor={types.newCategory}>New category</label>
              <Input
                id={types.existCategory}
                type="radio"
                checked={this.state.activeOption === types.existCategory}
                onChange={() => this.handleRadioBtnChange(types.existCategory)}
                radio
              />
              <label htmlFor={types.existCategory}>Exist category</label>
            </RadioWrapper>
            <InputWrapper>
              <Paragraph>Question:</Paragraph>
              <Input id="question" />
            </InputWrapper>
            <InputWrapper>
              <Paragraph>Answer:</Paragraph>
              <Input id="answer" />
            </InputWrapper>
            <InputWrapper>
              <Paragraph>Category:</Paragraph>
              {this.state.activeOption === types.newCategory && (
                <Input id="category" />
              )}
              {this.state.activeOption === types.existCategory && (
                <SelectInput id="category">
                  {this.props.decks.map((deck, index) => (
                    <option
                      value={deck.category}
                      id={index}
                      key={deck.category}
                    >
                      {deck.category}
                    </option>
                  ))}
                </SelectInput>
              )}
            </InputWrapper>
            <Button
              onClick={() =>
                this.newCardInfo(context.addCardToDeck, context.addDeckWithCard)
              }
            >
              Create new card
            </Button>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
