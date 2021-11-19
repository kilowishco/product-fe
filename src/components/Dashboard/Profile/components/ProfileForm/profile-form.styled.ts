import styled from 'styled-components';

export const ProfileFormContainer = styled.form`
  width: 100%;
  padding: 4.5rem 4rem;
  background: var(--color-white);

  h2,
  p {
    margin: 0;
  }

  h2,
  h3 {
    font-weight: 500;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    line-height: 3.5rem;
    letter-spacing: -0.56316px;
    color: var(--color-form-black);
    margin: 0;
  }

  h2 {
    font-size: 2.25rem;
    margin-bottom: 3.75rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.125rem;
  }

  .divider-lg {
    height: 1px;
    width: calc(100% + 6rem);
    margin: 2.75rem 0 3rem;
    background-color: var(--color-light-blue);
    margin-left: -3rem;
    margin-right: -3rem;
  }

  .account-info {
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-top: 0.75rem;
    color: var(--color-mid-grey);
    margin-bottom: 0;
  }
`;

export const ProfileFooter = styled.div`
  margin-top: 2.875rem;
  display: flex;
  justify-content: flex-start;
`;
