import { FC } from 'react';

import ListsGrid from './components/lists-grid';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import DashboardWrapper from '../Shared/DashboardWrapper';

const Login: FC = () => {
  return (
    <ErrorBoundary link="/">
      <DashboardWrapper active="Lists">
        <ListsGrid />
      </DashboardWrapper>
    </ErrorBoundary>
  );
};

export default Login;
