import { FC } from 'react';

import ListsGrid from './ListsGrid';
import MakeList from './MakeList';
import CreateEventForm from './CreateEventForm';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import DashboardWrapper from '../Shared/DashboardWrapper';

type ListPageProps = {
  state: 'Lists' | 'MakeList' | 'CreateList';
};

const Lists: FC<ListPageProps> = ({ state }) => {
  return (
    <ErrorBoundary link="/">
      <DashboardWrapper active="Lists">
        {state === 'Lists' && <ListsGrid />}
        {state === 'MakeList' && <MakeList />}
        {state === 'CreateList' && <CreateEventForm />}
      </DashboardWrapper>
    </ErrorBoundary>
  );
};

export default Lists;
