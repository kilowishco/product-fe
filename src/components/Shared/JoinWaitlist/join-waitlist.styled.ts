import styled from 'styled-components';

export const JoinWaitlistContainer = styled.div`
  display: flex;

  input {
    font-size: 1rem;
    line-height: 1.125rem;
    color: var(--color-grey);
    border: 1px solid var(--color-mid-yellow);
    border-radius: 3px 0 0 3px;
    flex-grow: 1;

    &::placeholder {
      color: var(--color-grey);
    }
  }

  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
