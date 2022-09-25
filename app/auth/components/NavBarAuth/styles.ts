import styled from "styled-components"

export const SideNavBar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  min-width: 300px;
  background-color: var(--color-primary);
  margin-right: 40px;
`

export const SideNavBarLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100px;
  color: var(--white);
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 600;
`

export const SideNavBarNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
  gap: 20px;
`

export const NavBarItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: var(--white);
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: var(--color-secondary);
  }
`

export const NavBarText = styled.span`
  margin-left: 40px;
  min-width: 100px;
`
