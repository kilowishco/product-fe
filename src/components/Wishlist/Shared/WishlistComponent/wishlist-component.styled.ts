import styled from 'styled-components';

export const WishlistComponentContainer = styled.div`
  width: 100%;
  padding: 2.5rem 1.25rem 3rem;

  > p {
    font-size: 0.875rem;
    line-height: 1.325rem;
    color: var(--color-mid-grey);
    margin-top: 0;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    padding: 4.5rem 4rem 5rem;

    > p {
      font-size: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

export const WishlistHeaderContainer = styled.div`
  margin-bottom: 2.875rem;

  .wishlist__header {
    margin-left: 1.25rem;
  }

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    line-height: 1.875rem;
    letter-spacing: -0.56316px;
    color: var(--color-form-black);
    margin: 0;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.325rem;
    color: var(--color-mid-grey);
    margin: 0;
    font-weight: 400;
    margin-bottom: 0;
  }

  img {
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    h2 {
      line-height: 3.5rem;
      font-size: 2.25rem;
    }

    > p {
      font-size: 0.95rem;
    }
  }
`;

export const WishlistItemsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  > * + * {
    margin-top: 1.325rem;
  }

  @media (min-width: 400px) {
    > * + * {
      margin-top: 2.5rem;
    }
  }

  @media (min-width: 800px) {
    background-color: var(--color-white);
    padding: 5rem 4rem;
    border-radius: 1rem;
  }

  @media (min-width: 1024px) {
    padding: 7rem 6rem;
  }
`;
