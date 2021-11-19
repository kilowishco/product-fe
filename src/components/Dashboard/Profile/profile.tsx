import { FC } from 'react';

import ErrorBoundary from '../../Shared/ErrorBoundary';
import DashboardWrapper from '../Shared/DashboardWrapper';
import ProfileForm from './components/ProfileForm';

const Profile: FC = () => {
  return (
    <ErrorBoundary link="/">
      <DashboardWrapper active="Profile">
        <ProfileForm />
      </DashboardWrapper>
    </ErrorBoundary>
  );
};

export default Profile;
