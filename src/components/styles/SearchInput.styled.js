import styled from 'styled-components';

export const SearchInput = styled.input`
  margin: 3% auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  max-width: 600px;
  height: 50px;
  transition: 0.15s ease-out;

  &:focus {
    border: 1px solid #0d7efd;
  }
`;
