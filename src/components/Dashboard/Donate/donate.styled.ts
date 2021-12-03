import styled from 'styled-components';

export const DonateContainer = styled.section`
  width: 100%;
  padding: 2.5rem 1.875rem 5rem;
  background-color: var(--color-white);

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    line-height: 1.875rem;
    letter-spacing: -0.56316px;
    color: var(--color-form-black);
    margin: 0;
    margin-bottom: 2rem;
  }

  h3 {
    margin-top: 3rem;
    font-family: 'DM Sans', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 3.5rem;
    letter-spacing: -0.56316px;
    color: var(--color-form-black);
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--color-mid-grey);
    margin-top: 0;
    font-weight: 400;
    margin-bottom: 2.25rem;
  }

  @media (min-width: 768px) {
    padding: 4.5rem 4rem 5rem;

    > h2 {
      line-height: 3.5rem;
      margin-bottom: 3.125rem;
      font-size: 1.625rem;
    }

    > h3 {
      font-size: 1.25rem;
    }

    > p {
      font-size: 1rem;
    }
  }
`;

export const DonateImageContainer = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #ffeaba 0%, #ffd87d 100%);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
`;
