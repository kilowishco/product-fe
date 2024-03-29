import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-weight: 400;
  cursor: pointer;
  border-radius: 3px;
  letter-spacing: 0.1px;
  display: flex;
  align-items: center;
  transition: transform ease-in 200ms;

  &:hover {
    transform: scale(1.015);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.button-sm {
    height: 2.125rem;
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0 1.125rem;
  }

  &.button-lg {
    height: 3.25rem;
    font-size: 0.875rem;
    line-height: 1.125rem;
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    &.button-sm {
      height: 2.5rem;
      font-size: 0.875rem;
      line-height: 1rem;
      padding: 0 1.5rem;
    }

    &.button-lg {
      height: 3.75rem;
      font-size: 1rem;
      line-height: 1.125rem;
      padding: 0 1.875rem;
    }
  }
`;
