import styled from "styled-components"

export const SideBar = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: var(--light-slate);
`

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
  -moz-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }
`

export const SideBarItem = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: var(--transition);
  &:hover {
    color: var(--green);
    transform: translateY(-3px);
  }
`
