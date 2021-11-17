import styled from 'styled-components';

export const ListsGridContainer = styled.section`
  width: 100%;
`;

export const ListsGridHeader = styled.div`
  margin-bottom: 3.75rem;

  h2 {
    font-weight: 600;
    font-size: 1.625rem;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    line-height: 3.5rem;
    letter-spacing: -0.56316px;
    color: var(--color-form-black);
    margin: 0;
  }

  svg {
    margin-right: 0.325rem;
  }
`;

export const ListsGridWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 476px) {
    > * + * {
      margin-top: 1.25rem;
    }
  }

  @media (min-width: 476px) {
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(auto-fill, 22.5rem);
    justify-content: space-between;
  }
`;
