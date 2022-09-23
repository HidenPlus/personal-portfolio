import { useMutation } from "@blitzjs/rpc"
import logout from "app/auth/mutations/logout"
import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import Link from "next/link"
import { useRouter } from "next/router"
import { NavBar as Nav, NavItem, NavList, NavLink, ResumeButton } from "./styles"

export default function NavBar(): JSX.Element {
  const [useLogout] = useMutation(logout)
  const translations = {
    logout: useGetTextByLng("adminLogout"),
  }

  const handleLogout = async () => {
    await useLogout();
  }

  return (
    <Nav>
      <div></div>
      <NavList>
        <NavItem onClick={handleLogout}>
          <h1>{translations.logout}</h1>
        </NavItem>
      </NavList>
    </Nav>
  )
}
