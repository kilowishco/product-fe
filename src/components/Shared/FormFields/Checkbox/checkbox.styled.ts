import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: var(--color-input-black);
  display: block;
  margin-bottom: 0.625rem;
`;

export const CheckboxWrapper = styled.div`
  position: relative;

  input {
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--color-input-black);
    background: transparent;
    padding: 1rem 1.5rem;
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

    &.error {
      border-color: var(--color-red);
    }
  }
`;

export const CheckboxError = styled.p`
  color: var(--color-red);
  font-size: 1rem;
  line-height: 1.125rem;
  margin-top: 0.5rem;
`;
