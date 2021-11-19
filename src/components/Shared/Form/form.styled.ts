import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 540px;
  width: 100%;
  margin: 0 auto;

  > h2,
  > p {
    margin: 0;
  }

  h2 {
    text-align: center;
    color: var(--color-purple);
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 1.75rem;
    line-height: 2.25rem;
    letter-spacing: -0.025em;
  }

  span {
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
  }

  > p {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-dark);
    margin-bottom: 0;
    text-align: center;
  }

  > button {
    margin-top: 3.125rem;
    text-align: center;
    width: 100%;
  }

  .social_login--buttons {
    margin-top: 1.25rem;

    > div {
      display: block;
    }

    > div > * + * {
      margin-top: 1.25rem;
      margin-left: 0;
    }

    button {
      font-size: 0.875rem;
      width: 100%;
      height: 3.75rem;
      font-weight: 400;
      font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    }

    svg {
      width: 1.25rem;
      margin-right: 1.25rem;
    }
  }

  .signup-button {
    margin-top: 2rem;
  }

  .fp-button {
    margin: 1.25rem auto 0;
    width: auto;
    height: auto;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      text-align: left;
      margin-bottom: 3.25rem;
    }

    > p {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      text-align: left;
    }

    .social_login--buttons > div {
      display: flex;

      button {
        width: auto;
        min-width: 16rem;
      }

      > * + * {
        margin-top: initial;
      }
    }
  }
`;

export const InputContainer = styled.div`
  + div,
  &.mt-6 {
    margin-top: 1.5rem;
  }

  &.mt-0 {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    + div,
    &.mt-6 {
      margin-top: 1.25rem;
    }
  }
`;

export const CheckboxContainer = styled.div`
  padding-top: 1rem;

  &.mt-6 {
    margin-top: 1.5rem;
  }

  @media (min-width: 768px) {
    padding-top: 0.5rem;

    &.mt-6 {
      margin-top: 1.25rem;
    }
  }
`;

export const FormError = styled.p`
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: var(--color-red);
`;
