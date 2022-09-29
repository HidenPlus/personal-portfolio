import { useMutation } from "@blitzjs/rpc"
import logout from "app/auth/mutations/logout"
import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import { useAtom } from "jotai"
import { loadingBar } from "../LoadingBar/store"
import { NavBar as Nav, NavItem, NavList } from "./styles"

export default function NavBar(): JSX.Element {
  const [logoutMutation] = useMutation(logout)
  const [, setLoadingBar] = useAtom(loadingBar)
  const translations = {
    logout: useGetTextByLng("adminLogout"),
  }

  const handleLogout = async () => {
    setLoadingBar(true)
    await logoutMutation()
    setLoadingBar(false)
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
