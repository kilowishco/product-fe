import styled from 'styled-components';

export const GiversGridContainer = styled.section`
  width: 100%;
`;

export const GiversGridHeader = styled.div`
  margin-bottom: 3.75rem;

  h2 {
    font-weight: 600;
    font-size: 1.625rem;
    line-height: 3.5rem;
    letter-spacing: -0.56316px;
    margin: 0;
  }
`;

export const GiversGridWrapper = styled.ul`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, 22.5rem);
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
