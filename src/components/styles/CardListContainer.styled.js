import styled from 'styled-components';

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  flex-wrap: wrap-reverse;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
