import { FC } from 'react';

import GiversGrid from './GiversGrid';
import ErrorBoundary from '../../Shared/ErrorBoundary';
import DashboardWrapper from '../Shared/DashboardWrapper';
import ListGiversDetails from './ListGiversDetails';
import { defaultLists } from '../../../constants/lists';

type GiversPageProps = {
  state: 'Givers' | 'GiversDetails';
};

const Givers: FC<GiversPageProps> = ({ state }) => {
  return (
    <ErrorBoundary link="/">
      <DashboardWrapper active="Givers">
        {state === 'Givers' && <GiversGrid />}
        {state === 'GiversDetails' && <ListGiversDetails list={defaultLists[0]} />}
      </DashboardWrapper>
    </ErrorBoundary>
  );
};

export default Givers;
