import { FC } from 'react';
import AuthNav from './Shared/AuthNav';
import { AuthContainer, AuthFormContainer, AuthLeft } from './auth.styled';

type AuthWrapperProps = {
  loginState?: boolean;
  isAuthSwitchHidden?: boolean;
};

const generateAuthMessage = () => {
  const authMessages = {
    1: (
      <>
        <span className="orange">Happiness</span> is same price as{' '}
        <span className="yellow">red bottoms?</span>
      </>
    ),
    2: (
      <>
        Make your <span className="orange">Wishlist</span> Your giver is{' '}
        <span className="yellow">watching</span>
      </>
    ),
    3: (
      <>
        All I want for <span className="orange">Valentine</span> Is{' '}
        <span className="yellow">Deola Sagoe</span>
      </>
    ),
  };

  const randomNum = Math.floor(Math.random() * 3) + 1;
  return authMessages[randomNum];
};

const AuthWrapper: FC<AuthWrapperProps> = ({ children, loginState, isAuthSwitchHidden }) => {
  return (
    <AuthContainer>
      <AuthNav loginState={loginState} isAuthSwitchHidden={isAuthSwitchHidden} />
      <AuthLeft>
        <p>{generateAuthMessage()}</p>
      </AuthLeft>
      <AuthFormContainer>{children}</AuthFormContainer>
    </AuthContainer>
  );
};

export default AuthWrapper;
