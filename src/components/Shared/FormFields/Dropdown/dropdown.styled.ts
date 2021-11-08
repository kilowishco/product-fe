import styled from 'styled-components';

export const DropdownLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--color-light-grey);
  display: block;
  margin: 0;
`;

export const DropdownWrapper = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  width: 100%;
  color: #252525;
  > div > div {
    padding: 0.2rem;
    border-radius: 1px;
  }

  &.error {
    border-color: var(--color-red);
  }
`;

export const DropdownFieldError = styled.p`
  color: var(--color-red);
  font-size: 1.125rem;
  line-height: 1.5rem;
`;
