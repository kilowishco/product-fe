import styled from 'styled-components';

export const HomeWrapper = styled.section`
  display: flex;
  flex: 0 0 50%;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const HomeContentWrapper = styled.article`
  h1 {
    font-family: 'ProjektBlackbird', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    font-size: 4.5rem;
    line-height: 5.25rem;
    letter-spacing: -2.50105px;
    text-transform: capitalize;
    color: var(--color-black);
    margin-bottom: 2.125rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #535b63;
    margin-bottom: 3.25rem;
  }

  span {
    color: var(--color-orange);
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.875rem;
    letter-spacing: 0.625rem;
  }

  img {
    margin-top: 2.75rem;
  }
`;

export const HomeImageScroller = styled.article`
  padding: 3.5rem;

  .home__img--control {
    button {
      background: none;
      box-shadow: none;
      cursor: pointer;
      border: none;
      color: var(--color-orange);
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1.125rem;
      letter-spacing: 0.625rem;
    }

    svg {
      margin-right: 1.875rem;
    }
  }
`;
