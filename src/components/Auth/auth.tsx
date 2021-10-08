import { FC } from 'react';
import AuthNav from './Shared/AuthNav';
import { AuthContainer, AuthFormContainer, AuthLeft } from './auth.styled';

type AuthWrapperProps = {
  loginState?: boolean;
  isAuthSwitchHidden?: boolean;
};

const AuthWrapper: FC<AuthWrapperProps> = ({ children, loginState, isAuthSwitchHidden }) => {
  return (
    <AuthContainer>
      <AuthNav loginState={loginState} isAuthSwitchHidden={isAuthSwitchHidden} />
      <AuthLeft>
        <p>
          <span className="orange">Happiness</span> is same price as{' '}
          <span className="yellow">red bottoms ?</span>
        </p>
      </AuthLeft>
      <AuthFormContainer>{children}</AuthFormContainer>
    </AuthContainer>
  );
};

export default AuthWrapper;
