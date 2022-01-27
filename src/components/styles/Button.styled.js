import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ cancel, secondary }) =>
    cancel ? '#fff' : secondary ? secondary : '#ffc107'};
  border-radius: 4px;
  border-style: none;
  border: 2px solid ${({ secondary }) => (secondary ? '#b8b8b8' : '#ffc107')};
  cursor: pointer;
  margin-right: 15px;
  outline: none;
  padding: 10px 16px;
  transition: 0.4s ease-in;

  &:hover {
    background-color: ${({ cancel }) => (cancel ? '#fff9c4' : '#fdd835')};
  }
  &:focus {
    background-color: ${({ cancel }) => (cancel ? '#fff9c4' : '#fdd835')};
  }
`;
