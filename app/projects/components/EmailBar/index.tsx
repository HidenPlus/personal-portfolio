import { SideBar, StyledLink, StyledLinkWrapper } from "./styles"

export default function EmailBar(): JSX.Element {
  return (
    <SideBar>
      <StyledLinkWrapper>
        <StyledLink href="mailto:aatuesta00@hotmail.com">aatuesta00@hotmail.com</StyledLink>
      </StyledLinkWrapper>
    </SideBar>
  )
}
