import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import plusIcon from "../../icons/plus.svg";
import categoryIcon from "../../icons/category.svg";
import randomIcon from "../../icons/random.svg";
import Paragraph from "../Paragraph/Paragraph";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const SidebarWrapper = styled.div`
  position: absolute;
  width: 25%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  @media (max-width: 600px) {
    justify-content: space-around;
  }
  @media (max-width: 400px) {
    padding-top: 0px;
    justify-content: center;
  }
`;

const NavOptionWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  width: 200px;
  @media (max-width: 815px) {
    width: 80%;
    margin-bottom: 80px;
  }
`;

const Sidebar = () => (
  <SidebarWrapper>
    <NavOptionWrapper>
      <ButtonIcon as={Link} to="/create" icon={plusIcon} />
      <Paragraph>Add new flash card</Paragraph>
    </NavOptionWrapper>
    <NavOptionWrapper>
      <ButtonIcon as={Link} to="/categories" icon={categoryIcon} />
      <Paragraph>Choose from your categories</Paragraph>
    </NavOptionWrapper>
    <NavOptionWrapper>
      <ButtonIcon as={Link} to="/deck" icon={randomIcon} />
      <Paragraph>Start random cards test</Paragraph>
    </NavOptionWrapper>
  </SidebarWrapper>
);

export default Sidebar;
