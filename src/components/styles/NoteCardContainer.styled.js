import styled from 'styled-components';

export const NoteCardContainer = styled.div`
  background-color: ${({ color }) => color};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  height: 200px;
  width: 320px;
  min-width: 300px;
  margin: 20px 30px 0 0;
`;
