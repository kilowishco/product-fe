import styled from 'styled-components';

export const SidebarMenuContainer = styled.div`
  margin-top: 2.75rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const SidebarMenuTitle = styled.div`
  color: var(--color-mid-grey);
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0.2rem;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  padding-left: 2.125rem;
  text-transform: uppercase;
  font-family: 'DM Mono', Inter, Helvetica, Arial, Verdana, Tahoma, sans-serif;
`;

export const SidebarMenuItem = styled.div`
  height: 2.5rem;
  padding-left: 4.5rem;
  font-size: 1rem;
  color: var(--color-light-grey);
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.625rem;

  svg {
    margin-right: 1.25rem;
    height: 1.125rem;
    position: absolute;
    left: 2.125rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &.active {
    background-color: var(--color-blue);
    color: var(--color-white);
  }
`;
