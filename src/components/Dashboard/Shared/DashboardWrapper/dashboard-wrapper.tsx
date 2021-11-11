import React, { FC } from 'react';
import { DashboardWrapperContainer, MainSection } from './dashboard-wrapper.styled';
import SidebarMenu from '../SidebarMenu';

type DashboardWrapperProps = {
  active: 'Lists' | 'Givers' | 'Donate' | 'Profile' | 'Settings' | 'Log Out';
};

const DashboardWrapper: FC<DashboardWrapperProps> = ({ active, children }) => {
  return (
    <DashboardWrapperContainer>
      <SidebarMenu active={active} />
      <MainSection>{children}</MainSection>
    </DashboardWrapperContainer>
  );
};

export default DashboardWrapper;
