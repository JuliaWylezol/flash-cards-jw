import styled from "styled-components";

const SelectInput = styled.select`
  background-color: ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.yellow};
  width: 250px;
  border: none;
  font-size: 20px;
`;

export default SelectInput;
