import styled from 'styled-components';

export const ListsGridContainer = styled.section`
  background-color: var(--color-card-divider);
  padding: 4rem 6rem;
`;

export const ListsGridHeader = styled.div`
  margin-bottom: 3.75rem;

  h2 {
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 3.5rem;
    letter-spacing: -1.56316px;
    margin: 0;
  }
`;

export const ListsGridWrapper = styled.ul`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(22.5rem, 1fr));
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
