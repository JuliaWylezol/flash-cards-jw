import React from "react";
import styled from "styled-components";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import LeftArrowIcon from "../../icons/leftArrow.svg";
import RightArrowIcon from "../../icons/rightArrow.svg";

const ArrowWrapper = styled.div`
  position: relative;
  bottom: 5px;
  left: 0;
  right: 0;
  margin: auto;
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Pagination = ({
  currentPage,
  decksPerPage,
  setCurrentPage,
  decksLength,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(decksLength / decksPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateRight = () => {
    if (Math.ceil(decksLength / decksPerPage) === currentPage) {
      console.log(currentPage);
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const paginateLeft = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  return (
    <ArrowWrapper>
      <ButtonIcon onClick={() => paginateLeft()} icon={LeftArrowIcon} />
      <ButtonIcon onClick={() => paginateRight()} icon={RightArrowIcon} />
    </ArrowWrapper>
  );
};

export default Pagination;
