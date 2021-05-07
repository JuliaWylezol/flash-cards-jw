import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading/Heading";
import Sidebar from "../components/Sidebar/Sidebar";
import MainTemplate from "../templates/MainTemplate";
import ChatIcon from "../icons/chat.svg";
import Icon from "../components/Icon/Icon";

const GreetWrapper = styled.div`
  float: right;
  padding-top: 70px;
  padding-bottom: 170px;
  width: 75%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    width: 65%;
  }
  @media (max-width: 400px) {
    width: 55%;
    padding-right: 30px;
  }
`;

const MainMenu = () => (
  <MainTemplate>
    <Sidebar />
    <GreetWrapper>
      <Heading welcomeText>Welcome to Flash Cards!</Heading>
      <Icon src={ChatIcon} />
    </GreetWrapper>
  </MainTemplate>
);

export default MainMenu;
