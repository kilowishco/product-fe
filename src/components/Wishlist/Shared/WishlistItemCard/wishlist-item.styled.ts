import styled from 'styled-components';
import { SecondaryButtonContainer } from '../../../Shared/Button/SecondaryButton/secondary-button.styled';
import { SpacedListContainer } from '../../../Shared/SpacedList/spaced-list.styled';

export const WishlistItemContainer = styled.section`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.625rem;
  border: 1px solid var(--color-light-blue);
  box-sizing: border-box;

  ${SpacedListContainer} {
    flex-direction: column;
    align-items: flex-start;

    > * + * {
      margin-top: 1rem;
      margin-left: 0;
    }
  }

  h3 {
    font-weight: 500;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    color: var(--color-input-black);
    font-size: 1.125rem;
    line-height: 1.75rem;
    letter-spacing: 0.01rem;
    margin: 0;
    margin-top: -0.375rem;
  }

  p {
    margin: 0;
    color: var(--color-mid-grey);
    font-size: 0.75rem;
    line-height: 1rem;
    margin-top: 0.25rem;
  }

  ${SecondaryButtonContainer} {
    min-width: auto;
    height: auto;
    padding: 0.625rem 2.125rem;
  }

  @media (min-width: 576px) {
    padding: 1.5rem 2rem;

    ${SpacedListContainer} {
      flex-direction: row;
      align-items: center;

      > * + * {
        margin-top: 0;
        margin-left: 1rem;
      }
    }

    h3 {
      font-size: 1.25rem;
      line-height: 1.75rem;
      margin-top: 0;
    }

    p {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }
`;

export const WishlistImageContainer = styled.div`
  margin-right: 1.5rem;

  .placeholder {
    height: 2.5rem;
    width: 2.5rem;
    background-color: var(--color-light-blue);
    border-radius: 5px;
  }

  @media (min-width: 576) {
    margin-right: 2rem;

    .placeholder {
      height: 3.75rem;
      width: 3.75rem;
    }
  }
`;

export const WishlistContentContainer = styled.div`
  display: block;
`;
