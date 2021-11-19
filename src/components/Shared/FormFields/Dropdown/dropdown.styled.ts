import styled from 'styled-components';

export const DropdownLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-light-grey);
  display: block;
  font-weight: 500;
  margin: 0;
`;

export const DropdownWrapper = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  width: 100%;
  color: var(--color-input-black);

  > div > div:first-of-type {
    padding: 0.75rem 1.25rem;
    border: 0.7px solid var(--color-light-grey);
    border-radius: 5px;
    background: transparent;

    > div {
      padding: 0;
    }

    > div > span {
      display: none;
    }

    > div > div {
      padding: 0;
    }
  }

  &.error {
    border-color: var(--color-red);
  }
`;

export const DropdownFieldError = styled.p`
  color: var(--color-red);
  font-size: 0.75rem;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;
