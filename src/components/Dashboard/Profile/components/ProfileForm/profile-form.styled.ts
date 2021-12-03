import styled from 'styled-components';
import { SpacedListContainer } from '../../../../Shared/SpacedList/spaced-list.styled';

export const ProfileFormContainer = styled.form`
  width: 100%;
  padding: 3rem 1.875rem 5rem;
  background: var(--color-white);

  h2,
  p {
    margin: 0;
  }

  h2,
  h3 {
    font-weight: 500;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    line-height: 3.5rem;
    letter-spacing: -0.56316px;
    color: var(--color-form-black);
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }

  h3 {
    font-size: 1.325rem;
    margin-bottom: 1.125rem;
  }

  .divider-lg {
    height: 1px;
    width: 100%;
    margin: 2.325rem 0 2.25rem;
    background-color: var(--color-light-blue);
  }

  .account-info {
    font-size: 0.875rem;
    line-height: 1.125rem;
    margin-top: 1.625rem;
    color: var(--color-mid-grey);
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    ${SpacedListContainer} {
      flex-direction: column;
      align-items: stretch;

      > * + * {
        margin-left: 0;
        margin-top: 1.325rem;
      }
    }

    .profile-item-button {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    padding: 4.5rem 4rem 5rem;

    h2 {
      font-size: 2.25rem;
      margin-bottom: 3.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    .divider-lg {
      width: calc(100% + 6rem);
      margin: 2.75rem 0 3rem;
      margin-left: -3rem;
      margin-right: -3rem;
    }

    .account-info {
      margin-top: 1.25rem;
    }
  }
`;

export const ProfileFooter = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;

  @media (min-width: 768px) {
    margin-top: 2.875rem;
  }
`;
