import { FC } from 'react';
import Logo from '../../../Shared/Logo';
import AuthSwitch from '../AuthSwitch';

import { AuthNavContainer } from './auth-nav.styled';

type AuthNavProps = {
  loginState?: boolean;
  isAuthSwitchHidden?: boolean;
};

const AuthNav: FC<AuthNavProps> = ({ loginState, isAuthSwitchHidden }) => {
  return (
    <AuthNavContainer>
      <Logo />
      {!isAuthSwitchHidden && <AuthSwitch loginState={loginState} />}
    </AuthNavContainer>
  );
};

export default AuthNav;
