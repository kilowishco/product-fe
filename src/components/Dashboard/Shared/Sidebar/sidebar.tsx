import { FC } from 'react';
import Logo from '../../../Shared/Logo';
import { SidebarContainer } from './sidebar.styled';

const Sidebar: FC = ({ children }) => {
  return (
    <SidebarContainer>
      <Logo />
      {children}
    </SidebarContainer>
  );
};

export default Sidebar;
