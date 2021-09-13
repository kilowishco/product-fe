import styled from 'styled-components';

export const HomeWrapper = styled.section`
  min-height: 100vh;
  padding: 7.5rem 0 5rem;
  background-color: var(--color-lighter-yellow);

  > article {
    flex-basis: 50%;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 7.5rem 0 2.5rem;
    flex-direction: row-reverse;
  }
`;

export const HomeContentWrapper = styled.article`
  padding: 0 2rem;

  > h1 {
    font-family: 'ProjektBlackbird', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: capitalize;
    color: var(--color-black);
    font-size: 3.5rem;
    line-height: 3.75rem;
    margin-bottom: 1.125rem;
    margin-top: 0.75rem;
  }

  > p {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: #535b63;
    margin-bottom: 2.25rem;
  }

  > span {
    color: var(--color-orange);
    font-weight: 500;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.5rem;
    letter-spacing: 0.5rem;
    font-family: 'DM Mono', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
  }

  .join-waitlist {
    margin-bottom: 1.75rem;
  }

  @media (min-width: 768px) {
    padding: 0 3.5rem;

    > h1 {
      font-size: 4.5rem;
      letter-spacing: -0.50105px;
      line-height: 5.25rem;
      margin-bottom: 2.125rem;
      margin-top: 1rem;
    }

    > p {
      font-size: 1rem;
      line-height: 1.5rem;
      margin-bottom: 3.25rem;
    }

    > span {
      font-size: 0.875rem;
      line-height: 1.875rem;
      letter-spacing: 0.625rem;
    }

    .join-waitlist {
      margin-bottom: 2.75rem;
    }
  }
`;

export const HomeImageScroller = styled.article`
  margin: 2rem 0 5.5rem;

  .home__phone-img-wrapper {
    width: 75%;
    margin: 0 auto;
  }

  .wish-card {
    margin: 0 auto;
  }

  .home__img--control {
    text-align: center;

    button {
      background: none;
      box-shadow: none;
      cursor: pointer;
      border: none;
      color: var(--color-orange);
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1.125rem;
      text-transform: uppercase;
      letter-spacing: 0.625rem;
    }

    svg {
      margin-right: 1.875rem;
    }
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;
