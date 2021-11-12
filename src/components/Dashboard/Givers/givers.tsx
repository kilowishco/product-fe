import { FC } from 'react';

import GiversGrid from './GiversGrid';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import DashboardWrapper from '../Shared/DashboardWrapper';

const Givers: FC = () => {
  return (
    <ErrorBoundary link="/">
      <DashboardWrapper active="Givers">
        <GiversGrid />
      </DashboardWrapper>
    </ErrorBoundary>
  );
};

export default Givers;
