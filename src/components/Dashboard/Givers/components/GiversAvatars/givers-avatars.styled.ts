import styled from 'styled-components';

export const GiversAvatarsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;

  .overflow-number {
    font-weight: 500;
    font-size: 0.5rem;
    line-height: 1rem;
    margin-left: 0.1rem;
    color: var(--color-input-black);
  }

  @media (min-width: 400px) {
    .overflow-number {
      margin-left: 0.125rem;
      font-size: 0.875rem;
    }
  }
`;

export const GiversAvatarItem = styled.li`
  margin: 0;
  padding: 0;
  border-radius: 50%;
  width: 1.75rem;
  height: 1.75rem;
  background: var(--color-light-blue);
  border: 0.125rem solid var(--color-white);

  + li {
    margin-left: -0.75rem;
  }

  &:not(.image) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
    font-weight: 500;
    color: var(--color-card-black);
  }

  @media (min-width: 400px) {
    width: 3.25rem;
    height: 3.25rem;

    + li {
      margin-left: -1.25rem;
    }

    &:not(.image) {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 768px) {
    width: 3.75rem;
    height: 3.75rem;
  }
`;
