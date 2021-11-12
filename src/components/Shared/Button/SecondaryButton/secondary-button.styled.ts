import styled from 'styled-components';
import BaseButton from '../base';

export const SecondaryButtonContainer = styled(BaseButton)`
  color: var(--color-white);
  background: var(--color-purple-secondary);
  border: 1px solid var(--color-purple-secondary);
  border-radius: 0.625rem;
  width: 10rem;
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
