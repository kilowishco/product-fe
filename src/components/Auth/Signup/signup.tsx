import { FC } from 'react';

import SignupForm from '../Shared/Form/SignupForm';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import AuthWrapper from '../auth';

const Login: FC = () => {
  return (
    <ErrorBoundary link="/">
      <AuthWrapper loginState>
        <SignupForm />
      </AuthWrapper>
    </ErrorBoundary>
  );
};

export default Login;
