import { FC, useState, useEffect, useRef } from 'react';
import BareButton from '../../../Shared/Button/BareButton';
import Logo from '../../../Shared/Logo';
import { SidebarContainer, MobileSidebarControl, SidebarOverlay } from './sidebar.styled';

type SidebarProps = {
  active: string;
};

const Sidebar: FC<SidebarProps> = ({ children, active }) => {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);

  const closeKeyboard = useRef((e: KeyboardEvent) => {
    // Escape button closes the tooltip
    if (e.keyCode === 27) {
      setOpen(false);
      return;
    }
  });

  const closeMouse = useRef(() => {
    setOpen(false);
  });

  useEffect(() => {
    const closeKeyboardFunc = closeKeyboard.current;
    const closeMouseFunc = closeMouse.current;
    const overlay = overlayRef.current;

    if (open && overlay) {
      window.addEventListener('keydown', closeKeyboardFunc);
      overlay?.addEventListener('click', closeMouseFunc);
    }

    if (!open) {
      window.removeEventListener('keydown', closeKeyboardFunc);
    }

    return () => {
      overlay?.removeEventListener('click', closeMouseFunc);
      window.removeEventListener('keydown', closeKeyboardFunc);
    };
  }, [open]);

  return (
    <>
      <MobileSidebarControl className="--mobile-only">
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
      </MobileSidebarControl>
      {open && <SidebarOverlay ref={overlayRef} />}
      <SidebarContainer className={open ? 'open' : ''}>
        <Logo />
        {children}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
