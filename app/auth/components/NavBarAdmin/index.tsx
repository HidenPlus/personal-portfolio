import { useMutation } from "@blitzjs/rpc"
import logout from "app/auth/mutations/logout"
import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import { NavBar as Nav, NavItem, NavList } from "./styles"

export default function NavBar(): JSX.Element {
  const [logoutMutation] = useMutation(logout)
  const translations = {
    logout: useGetTextByLng("adminLogout"),
  }

  const handleLogout = async () => {
    await logoutMutation()
  }

  return (
    <Nav>
      <div />
      <NavList>
        <NavItem onClick={handleLogout}>
          <h1>{translations.logout}</h1>
        </NavItem>
      </NavList>
    </Nav>
  )
}
