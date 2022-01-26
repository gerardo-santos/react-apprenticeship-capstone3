import styled from 'styled-components';

export const NoteInput = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  transition: 0.15s ease-out;

  &:focus {
    border: 1px solid #0d7efd;
  }
`;
