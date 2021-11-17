import styled from 'styled-components';

import BaseNav from '../../../Shared/Nav/base';

export const AuthNavContainer = styled(BaseNav)`
  padding: 1rem 1.75rem 0.75rem;
  background-color: var(--color-purple-main);

  .auth-switch {
    display: none;
  }

  svg path {
    fill: white;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 3.5rem;
    background-color: transparent;

    .auth-switch {
      display: block;
    }
  }
`;
