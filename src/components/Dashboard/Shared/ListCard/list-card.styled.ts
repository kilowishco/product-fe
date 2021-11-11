import styled from 'styled-components';

export const ListCardContainer = styled.section`
  position: relative;
  width: 22.5rem;
  padding: 2.5rem 2.5rem 0;

  h3 {
    color: var(--color-card-black);
    font-family: 500;
    font-size: 1.125rem;
    line-height: 1.25rem;
    margin-bottom: 0.625rem;
  }

  p {
    margin-top: 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.01rem;
    color: var(--color-mid-grey);
    margin-bottom: 2.125rem;
  }
`;

export const ListCardControls = styled.div`
  position: absolute;
  right: 1.375rem;
  top: 1.75rem;
  display: inline-block;
`;

export const ListImageContainer = styled.div`
  margin-bottom: 1.5rem;

  .placeholder {
    height: 3.5rem;
    width: 3.5rem;
    background-color: var(--color-light-blue);
    border-radius: 5px;
  }
`;

export const SocialButtonsContainer = styled.div`
  margin-left: -2.5rem;
  margin-right: -2.5rem;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--color-card-divider);

  button + button {
    margin-left: 0.25rem;
  }
`;
