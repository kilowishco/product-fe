import styled from 'styled-components';

export const ListGiversDetailsContainer = styled.section`
  width: 100%;
  padding: 2.5rem 1.25rem 3rem;
  background-color: var(--color-white);

  > h2 {
    font-weight: 500;
    font-size: 1.5rem;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    line-height: 1.875rem;
    letter-spacing: -0.56316px;
    color: var(--color-form-black);
    margin: 0;
    margin-bottom: 1.125rem;
  }

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

    > h2 {
      line-height: 3.5rem;
      margin-bottom: 2.5rem;
      font-size: 2.25rem;
    }

    > p {
      font-size: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

export const ListGiversListItemsContainer = styled.div`
  > * + * {
    margin-top: 1.325rem;
  }

  @media (min-width: 400px) {
    > * + * {
      margin-top: 2.5rem;
    }
  }
`;
