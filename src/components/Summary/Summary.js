import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

const ContentWrapper = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Summary = ({ correctAnswers, hours, minutes, seconds }) => {
  let index;

  return (
    <ContentWrapper>
      <Heading>
        Congratualtions! You have made {correctAnswers} correct answers.
      </Heading>
      <Paragraph>
        Your time is {hours}H:{minutes}M:{seconds}S
      </Paragraph>
      <Button as={Link} to="/" finish>
        Finish test
      </Button>
    </ContentWrapper>
  );
};

Summary.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
};

export default Summary;
