import { FC, useState } from 'react';
import BareButton from '../../../Shared/Button/BareButton';
import Logo from '../../../Shared/Logo';
import { SidebarContainer, MobileSidebarControl } from './sidebar.styled';

type SidebarProps = {
  active: string;
};

const Sidebar: FC<SidebarProps> = ({ children, active }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MobileSidebarControl className="--mobile-only">
        {!open && (
          <BareButton
            className="mobile-sidebar--control"
            text={
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18 10H6"
                    stroke="#7575FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 6H3"
                    stroke="#7575FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 14H3"
                    stroke="#7575FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 18H6"
                    stroke="#7575FE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h2>{active}</h2>
              </>
            }
            onClick={() => setOpen(!open)}
          />
        )}
      </MobileSidebarControl>
      <SidebarContainer className={open ? 'open' : ''}>
        <Logo />
        {children}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
