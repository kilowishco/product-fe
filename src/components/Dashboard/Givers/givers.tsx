import { FC } from 'react';

import GiversGrid from './components/givers-grid';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import DashboardWrapper from '../Shared/DashboardWrapper';

const Login: FC = () => {
  return (
    <ErrorBoundary link="/">
      <DashboardWrapper active="Givers">
        <GiversGrid />
      </DashboardWrapper>
    </ErrorBoundary>
  );
};

export default Login;
