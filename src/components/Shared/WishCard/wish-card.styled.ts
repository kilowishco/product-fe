import styled from 'styled-components';

export const WishCardContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  border: 1px solid var(--color-light-yellow);
  box-sizing: border-box;
  box-shadow: 0 4px 25px rgba(196, 196, 196, 0.25);
  border-radius: 0.25rem;

  span {
    flex-grow: 1;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 2.5rem;
  }

  img {
    width: 25px;
  }
`;
