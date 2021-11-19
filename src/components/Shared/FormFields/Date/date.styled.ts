import styled from 'styled-components';

export const DateLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: var(--color-light-grey);
  display: block;
  margin: 0;
`;

export const DatePickerWrapper = styled.div`
  width: 100%;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  color: var(--color-input-black);
  background: transparent;
  padding: 1rem 1.5rem;
  outline: none;
  border: 0.7px solid var(--color-light-grey);
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.active {
    border-color: var(--color-secondary);
  }

  &.error {
    border-color: var(--color-red);
  }

  .react-time-picker__wrapper,
  .react-date-picker__wrapper {
    align-items: center;
    border: none;

    button {
      margin-top: 0;
      padding: 0;
    }
  }

  .date-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .react-date-picker__inputGroup {
    display: none;
  }
`;

export const DateFieldError = styled.p`
  color: var(--color-red);
  font-size: 0.75rem;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;
