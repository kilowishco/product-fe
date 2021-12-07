import styled from 'styled-components';
import { SecondaryButtonContainer } from '../../../Shared/Button/SecondaryButton/secondary-button.styled';

export const WishlistItemContainer = styled.section`
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 0.625rem;
  border: 1px solid var(--color-light-blue);
  box-sizing: border-box;

  h3 {
    font-weight: 500;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    color: var(--color-input-black);
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: 0.01rem;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: var(--color-mid-grey);
    margin-top: 0.5rem;
  }

  ${SecondaryButtonContainer} {
    min-width: auto;
    height: auto;
    padding: 0.625rem 2.125rem;
  }
`;

export const WishlistImageContainer = styled.div`
  .placeholder {
    height: 3.75rem;
    width: 3.75rem;
    background-color: var(--color-light-blue);
    border-radius: 5px;
  }
`;

export const WishlistContentContainer = styled.div`
  margin-left: 2rem;
`;
