import styled from 'styled-components';
import BaseButton from '../base';

export const InvertedButtonContainer = styled(BaseButton)`
  color: var(--color-blue);
  background: var(--color-light-blue);
  border: 1px solid var(--color-light-blue);
  border-radius: 0.625rem;
  min-width: 10rem;
  text-align: center;

  &.button-sm {
    height: 2.125rem;
  }

  @media (min-width: 768px) {
    &.button-sm {
      height: 3rem;
    }
  }
`;
