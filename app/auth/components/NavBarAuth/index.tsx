import { FaUser, FaBriefcase, FaWpforms } from "react-icons/fa"
import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import { useRouter } from "next/router"
import { NavBarItem, NavBarText, SideNavBar, SideNavBarLogo, SideNavBarNav } from "./styles"

export default function NavBarAuth() {
  const router = useRouter()
  const translations = {
    panelTitle: useGetTextByLng("adminTitle"),
    users: useGetTextByLng("adminUsers"),
    portfolio: useGetTextByLng("adminPortfolio"),
    blog: useGetTextByLng("adminBlog"),
  }

  const activeTab = (tab: string) => router.pathname.includes(tab)

  return (
    <SideNavBar>
      <SideNavBarLogo>
        <span>{translations.panelTitle}</span>
      </SideNavBarLogo>
      <SideNavBarNav>
        <NavBarItem active={activeTab("users")}>
          <FaUser />
          <NavBarText>{translations.users}</NavBarText>
        </NavBarItem>
        <NavBarItem active={activeTab("portfolio")}>
          <FaBriefcase />
          <NavBarText>{translations.portfolio}</NavBarText>
        </NavBarItem>
        <NavBarItem active={activeTab("blog")}>
          <FaWpforms />
          <NavBarText>{translations.blog}</NavBarText>
        </NavBarItem>
      </SideNavBarNav>
    </SideNavBar>
  )
}
