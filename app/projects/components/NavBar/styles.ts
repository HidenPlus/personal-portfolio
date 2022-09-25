import styled from "styled-components"

export const NavBar = styled.nav`
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
`

export const NavList = styled.ol`
  display: flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
`
export const NavItem = styled.li`
  margin: 0px 5px;
  position: relative;
  counter-increment: item 1;
  font-size: var(--fz-xs);
`
export const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: var(--transition);
  cursor: pointer;
  &::before {
    content: "0" counter(item) ".";
    margin-right: 5px;
    color: var(--green);
    font-size: var(--fz-xxs);
    text-align: right;
  }
  &:hover {
    color: var(--green);
  }
`
export const ResumeButton = styled.a`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  margin-left: 15px;
  font-size: var(--fz-xs);
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`
