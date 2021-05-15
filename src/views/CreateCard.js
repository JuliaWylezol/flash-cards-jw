import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../context";
import Heading from "../components/Heading/Heading";
import ButtonIcon from "../components/ButtonIcon/ButtonIcon";
import MainTemplate from "../templates/MainTemplate";
import BackIcon from "../icons/back.svg";
import Form from "../components/Form/Form";

const ContentWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CardWrapper = styled.div`
  width: 600px;
  height: 400px;
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 5px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 650px) {
    width: 500px;
  }
  @media (max-width: 530px) {
    width: 450px;
  }
  @media (max-width: 470px) {
    width: 400px;
  }
  @media (max-width: 420px) {
    width: 300px;
  }
`;

const CreateCard = () => {
  const { decks } = React.useContext(AppContext);

  return (
    <MainTemplate>
      <ButtonIcon as={Link} to="/" icon={BackIcon} back />
      <ContentWrapper>
        <Heading>Add new flash card</Heading>
        <CardWrapper>
          <Form decks={decks} />
        </CardWrapper>
      </ContentWrapper>
    </MainTemplate>
  );
};

export default CreateCard;
