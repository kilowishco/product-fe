import styled from 'styled-components';

export const CardContainer = styled.li`
  padding: 0;
  background: var(--color-white);
  border-radius: 0.625rem;
  width: max-content;
  margin: 0;
  list-style-type: none;

  h3 {
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: var(--color-card-black);
  }

  &.full {
    width: 100%;
  }
`;
