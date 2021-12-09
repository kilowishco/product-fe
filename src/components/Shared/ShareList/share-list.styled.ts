import styled from 'styled-components';

export const ShareListContainer = styled.div`
  margin-top: 2.5rem;

  h4 {
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    width: 100%;
    line-height: 1.875rem;
    letter-spacing: -1px;
    color: var(--color-input-black);
    margin: 0;
    margin-bottom: 1.325rem;
  }

  @media (min-width: 768px) {
    h4 {
      font-size: 1.25rem;
      line-height: 2rem;
      letter-spacing: -1px;
    }
  }
`;

export const CopyLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.25rem;

  > * + * {
    margin-top: 1rem;
  }

  input {
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-weight: 500;
    color: var(--color-input-black);
    background: transparent;
    padding: 0.5rem 1.5rem;
    width: 100%;
    outline: none;
    border: 0.7px solid var(--color-light-grey);
    border-radius: 0.25rem;

    &::-ms-input-placeholder {
      color: var(--color-placeholder-grey);
      letter-spacing: 0;
    }

    &:focus {
      border-color: transparent;
      outline: 3px solid var(--color-light-blue);
      outline-offset: -3px;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px white inset !important;
    }

    &::placeholder {
      color: var(--color-placeholder-grey);
      letter-spacing: 0;
      opacity: 1;
    }
  }

  button {
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    flex-direction: row;

    > * + * {
      margin-left: 1rem;
      margin-top: 0;
    }

    input {
      padding: 0.5rem 1.5rem;
      flex-grow: 1;
      margin-bottom: 0;
      width: auto;
    }

    button {
      width: auto;
    }
  }

  @media (min-width: 768px) {
    > * + * {
      margin-left: 0;
      margin-top: 1rem;
    }

    input {
      font-size: 1rem;
      padding: 0.875rem 1.5rem;
      line-height: 1.125rem;
    }
  }

  @media (min-width: 1020px) {
    flex-direction: row;

    > * + * {
      margin-left: 1rem;
      margin-top: 0;
    }

    input {
      flex-grow: 1;
      margin-bottom: 0;
      width: auto;
    }

    button {
      width: auto;
    }
  }
`;

export const SocialShareContainer = styled.div`
  border-top: 0.5px solid var(--color-light-blue);
  padding-top: 2rem;

  h4 {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    display: flex;
    align-items: center;
    padding: 0;
  }

  li + li {
    margin-left: 1.25rem;
  }

  svg {
    height: 1rem;
  }
`;
