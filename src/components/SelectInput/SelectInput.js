import styled from "styled-components";

const SelectInput = styled.select`
  background-color: ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.yellow};
  width: 250px;
  border: none;
  font-size: 20px;
  @media (max-width: 420px) {
    height: 30px;
    width: 170px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export default SelectInput;
