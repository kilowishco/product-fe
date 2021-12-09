import styled from 'styled-components';
import { InputWrapper } from '../../../Shared/FormFields/InputField/input-field.styled';

export const GiversModalContainer = styled.div`
  h2 {
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 2rem;
    width: 100%;
    line-height: 2.5rem;
    letter-spacing: -1.56316px;
    color: var(--color-form-black);
    margin: 0;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    width: 100%;
    line-height: 1.875rem;
    letter-spacing: -1px;
    color: var(--color-input-black);
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-mid-grey);
  }

  .top-section {
    padding-bottom: 1.5rem;
    border-bottom: 0.5px solid var(--color-placeholder-grey);

    h4 {
      margin-bottom: 0.875rem;
    }
  }

  .bottom-section {
    padding: 1.875rem 0 2.25rem;

    h4 {
      margin-bottom: 1rem;
    }
  }

  ${InputWrapper} {
    label {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1rem;
      display: block;
      margin-bottom: 1rem;
      color: var(--color-input-black);
    }

    p {
      margin-top: 0.5rem;
      font-size: 0.875rem;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.25rem;
      line-height: 3rem;
      letter-spacing: -1.56316px;
      margin-bottom: 0.75rem;
    }

    h4 {
      font-size: 1.25rem;
      line-height: 2rem;
      letter-spacing: -1px;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    .top-section {
      padding-bottom: 1.7rem;

      h4 {
        margin-bottom: 1rem;
      }
    }

    .bottom-section {
      padding: 2.25rem 0 3rem;

      h4 {
        margin-bottom: 2rem;
      }
    }
  }
`;
