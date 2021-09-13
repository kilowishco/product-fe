import styled from 'styled-components';

export const JoinWaitlistContainer = styled.div`
  display: flex;

  input {
    padding: 0 0.875rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
    color: var(--color-grey);
    border: 1px solid var(--color-mid-yellow);
    border-radius: 3px 0 0 3px;
    border-right: none;
    flex-grow: 1;

    &::placeholder {
      color: var(--color-grey);
    }
  }

  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media (min-width: 768px) {
    input {
      font-size: 1rem;
      line-height: 1.125rem;
      padding: 0 1.5rem;
    }
  }
`;
