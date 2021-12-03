import styled from 'styled-components';

export const DashboardWrapperContainer = styled.div`
  > * {
    margin: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    height: 100%;
  }
`;

export const MainSection = styled.div`
  flex-grow: 1;
  max-width: initial;
  background-color: var(--color-card-divider);
  padding: 3rem 1.25rem 4rem;
  min-height: 100vh;

  @media (min-width: 768px) {
    width: calc(100% - 15.625rem);
    margin-left: auto;
    padding: 4rem 6rem;
  }
`;
