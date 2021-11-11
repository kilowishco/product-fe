import styled from 'styled-components';

export const DashboardWrapperContainer = styled.div`
  display: flex;
  height: 100%;

  > * {
    margin: 0;
  }
`;

export const MainSection = styled.div`
  flex-grow: 1;
  max-width: initial;
  background-color: var(--color-card-divider);
  padding: 4rem 6rem;
`;
