import styled from 'styled-components';

export const WaitlistVerifyContainer = styled.div`
  > div {
    display: flex;
    flex-direction: column;
  }

  > * {
    width: 100%;
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
    max-width: 100%;

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
    flex: 0 0 auto;
  }

  .waitlist--error {
    margin-top: 0.5rem;
    color: var(--color-red);
    font-size: 0.75rem;
    text-align: left;
  }

  h4 {
    margin-top: 0;
    color: var(--color-purple-main);
    font-size: 0.875rem;
  }

  @media (min-width: 400px) {
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
      padding: 0 1.5rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;

export const ResendCodeWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  text-align: center;

  p {
    color: var(--color-light-grey);
    font-size: 0.875rem;
    margin: 0;
  }

  button {
    cursor: pointer;
    padding: 0;
    box-shadow: none;
    background: none;
    border: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: var(--color-blue);
    font-size: 0.875rem;
  }
`;
