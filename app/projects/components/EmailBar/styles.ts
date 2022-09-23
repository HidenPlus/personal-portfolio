import styled from "styled-components";

export const SideBar = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  right: 40px;
  left: auto;
  z-index: 10;
  color: var(--light-slate);
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -moz-box-align: center;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }
`;

export const StyledLink = styled.a`
  margin: 20px auto;
  padding: 10px;
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: var(--fz-lg);
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  text-decoration: none;
`;
