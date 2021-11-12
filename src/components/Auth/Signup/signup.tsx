import { FC } from 'react';

import SignupForm from '../Shared/SignupForm';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import AuthWrapper from '../auth';

const Signup: FC = () => {
  return (
    <ErrorBoundary link="/">
      <AuthWrapper loginState>
        <SignupForm />
      </AuthWrapper>
    </ErrorBoundary>
  );
};

export default Signup;
