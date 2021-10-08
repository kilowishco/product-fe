import styled from 'styled-components';

import BaseNav from '../../../Shared/Nav/base';

export const AuthNavContainer = styled(BaseNav)`
  padding: 2rem;

  .auth-switch {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 3.5rem;

    .auth-switch {
      display: block;
    }
  }
`;
