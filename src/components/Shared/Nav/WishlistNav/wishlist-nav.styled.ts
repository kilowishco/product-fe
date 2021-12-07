import styled from 'styled-components';
import { SpacedListContainer } from '../../SpacedList/spaced-list.styled';

import BaseNav from '../base';

export const WishlistNavContainer = styled(BaseNav)`
  position: relative;
  padding: 1.5rem;
  background-color: var(--color-purple-main);

  .logo {
    width: 4.5rem;

    path {
      fill: var(--color-white);
    }
  }

  div ${SpacedListContainer} {
    > *:first-child {
      font-size: 0.75rem;
    }

    > * + * {
      margin-left: 1rem;
      min-width: auto;
      padding: 0 2rem;
    }
  }

  @media (min-width: 768px) {
    padding: 1.25rem 3.5rem;

    div ${SpacedListContainer} {
      > *:first-child {
        font-size: 0.875rem;
      }

      > * + * {
        margin-left: 3rem;
      }
    }
  }
`;
