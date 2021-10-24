import styled from 'styled-components';

export const JoinWaitlistContainer = styled.div`
  > div {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 0.875rem;
    font-size: 0.875rem;
    font-weight: 400;
    width: 100%;
    line-height: 1.125rem;
    color: var(--color-grey);
    border: 1px solid var(--color-mid-yellow);
    border-radius: 3px;
    flex-grow: 1;
    margin-bottom: 0.5rem;

    &::placeholder {
      color: var(--color-grey);
    }

    &.error {
      border-color: var(--color-red);
    }
  }

  button {
    width: 100%;
    justify-content: center;
  }

  .waitlist--error {
    margin-top: 0.5rem;
    color: var(--color-red);
    font-size: 0.75rem;
    text-align: left;
  }

  &.join-waitlist__confirmation-modal {
    > * {
      width: 100%;
    }

    input {
      max-width: 100%;
    }

    button {
      flex: 0 0 auto;
    }
  }

  @media (min-width: 400px) and (max-width: 768px) {
    > div {
      flex-direction: row;
    }

    input {
      padding: 0 0.875rem;
      border-radius: 3px 0 0 3px;
      border-right: none;
      flex-grow: 1;
      margin-bottom: 0;
      width: auto;
    }

    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      width: auto;
    }
  }

  @media (min-width: 768px) {
    input {
      font-size: 1rem;
      line-height: 1.125rem;
    }
  }

  @media (min-width: 1020px) {
    > div {
      flex-direction: row;
    }

    input {
      border-radius: 3px 0 0 3px;
      border-right: none;
      flex-grow: 1;
      margin-bottom: 0;
      width: auto;
    }

    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      width: auto;
    }
  }
`;
