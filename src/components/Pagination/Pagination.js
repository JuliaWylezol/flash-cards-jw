import React from "react";
import styled from "styled-components";
import AppContext from "../../context";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import LeftArrowIcon from "../../icons/leftArrow.svg";
import RightArrowIcon from "../../icons/rightArrow.svg";

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Pagination = () => {
  const pageNumbers = [];
  const { decks, decksPerPage, paginateR, paginateL } = React.useContext(
    AppContext
  );

  for (let i = 1; i <= Math.ceil(decks.length / decksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ArrowWrapper>
      <ButtonIcon onClick={() => paginateL()} icon={LeftArrowIcon} />
      <ButtonIcon onClick={() => paginateR()} icon={RightArrowIcon} />
    </ArrowWrapper>
  );
};

export default Pagination;
