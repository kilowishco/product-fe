import { FC } from 'react';

import ListsGrid from './ListsGrid';
// import CreateEventForm from './CreateEventForm';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import DashboardWrapper from '../Shared/DashboardWrapper';

const Lists: FC = () => {
  return (
    <ErrorBoundary link="/">
      <DashboardWrapper active="Lists">
        <ListsGrid />
        {/* <CreateEventForm /> */}
      </DashboardWrapper>
    </ErrorBoundary>
  );
};

export default Lists;
