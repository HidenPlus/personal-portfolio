import Link from "next/link"
import { useRouter } from "next/router"
import { NavBar as Nav, NavItem, NavList, NavLink, ResumeButton } from "./styles"

const tempItems = [
  {
    id: 1,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    title: "Home",
    url: "/",
  },
  {
    id: 5,
    title: "Login",
    url: "/auth/login",
  },
]

export default function NavBar(): JSX.Element {
  const { locale, defaultLocale } = useRouter()
  const localeLang = locale || defaultLocale
  return (
    <Nav>
      <div />
      <NavList>
        {tempItems.map((item) => (
          <NavItem key={item.id}>
            <Link href={item.url}>
              <NavLink>{item.title}</NavLink>
            </Link>
          </NavItem>
        ))}
        {localeLang === "es" ? (
          <NavItem>
            <ResumeButton href="/cv/cv_es.pdf">Curriculum</ResumeButton>
          </NavItem>
        ) : (
          <NavItem>
            <ResumeButton href="/cv/cv_en.pdf">Resume</ResumeButton>
          </NavItem>
        )}
      </NavList>
    </Nav>
  )
}
