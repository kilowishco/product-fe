import styled from 'styled-components';

export const WishCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid var(--color-light-yellow);
  box-sizing: border-box;
  box-shadow: 0 4px 25px rgba(196, 196, 196, 0.25);
  border-radius: 0.25rem;
  width: fit-content;

  span {
    flex-grow: 1;
    display: inline-block;
    margin: 0 2rem;
    font-weight: 500;
    text-align: center;
    color: var(--color-mid-grey);
    font-size: 1rem;
    line-height: 1;
  }

  .wish-card__img-wrapper {
    background: var(--color-orange);
    padding: 3px 4px;
    border-radius: 5px;
    width: 1.725rem;
  }

  @media (min-width: 768px) {
    span {
      margin: 0 2.5rem;
      font-weight: 600;
      font-size: 1.125rem;
    }

    .wish-card__img-wrapper {
      width: 2.125rem;
    }
  }
`;
