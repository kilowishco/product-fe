import { FC } from 'react';
import Link from 'next/link';

import { AuthSwitchContainer, AuthSwitchButton } from './auth-switch.styled';

type AuthSwitchProps = {
  loginState?: boolean;
};

const AuthSwitch: FC<AuthSwitchProps> = ({ loginState }) => {
  return (
    <AuthSwitchContainer className="auth-switch">
      {loginState ? (
        <>
          {`Don't have an account? `}
          <Link href="/signup">
            <a>
              <AuthSwitchButton>SIGN UP</AuthSwitchButton>
            </a>
          </Link>
        </>
      ) : (
        <>
          {`Already have an account? `}
          <Link href="/">
            <a>
              <AuthSwitchButton>SIGN IN</AuthSwitchButton>
            </a>
          </Link>
        </>
      )}
    </AuthSwitchContainer>
  );
};

export default AuthSwitch;
