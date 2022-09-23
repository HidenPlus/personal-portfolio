import { FaUser, FaBriefcase, FaWpforms } from "react-icons/fa";
import { useGetTextByLng } from "app/core/hooks/useGetTextByLng";
import { NavBarItem, NavBarText, SideNavBar, SideNavBarLogo, SideNavBarNav } from "./styles";

export default function NavBarAuth(){
  const translations = {
    panelTitle: useGetTextByLng("adminTitle"),
    users: useGetTextByLng("adminUsers"),
    portfolio: useGetTextByLng("adminPortfolio"),
    blog: useGetTextByLng("adminBlog"),
  }

  return (
    <SideNavBar>
      <SideNavBarLogo><span>{translations.panelTitle}</span></SideNavBarLogo>
      <SideNavBarNav>
        <NavBarItem>
          <FaUser />
          <NavBarText>{translations.users}</NavBarText>
        </NavBarItem>
        <NavBarItem>
          <FaBriefcase />
          <NavBarText>{translations.portfolio}</NavBarText>
        </NavBarItem>
        <NavBarItem>
          <FaWpforms />
          <NavBarText>{translations.blog}</NavBarText>
        </NavBarItem>
      </SideNavBarNav>
    </SideNavBar>
  )
}
