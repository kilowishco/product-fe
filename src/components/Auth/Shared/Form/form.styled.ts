import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 480px;
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
    line-height: 1.8rem;
    letter-spacing: -0.025em;
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
    }

    svg {
      width: 1.25rem;
      margin-right: 1.25rem;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      text-align: left;
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
      }

      > * + * {
        margin-top: initial;
        margin-left: 0.75rem;
      }
    }
  }
`;

export const InputContainer = styled.div`
  + div {
    margin-top: 1.25rem;
  }
`;

export const FormError = styled.p`
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: var(--color-red);
`;
