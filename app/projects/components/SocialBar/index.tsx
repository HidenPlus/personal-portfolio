import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"
import { SideBar, SideBarList, SideBarItem } from "./styles"

export default function SocialBar(): JSX.Element {
  const socialMedia = [
    {
      url: "https://linkedin.com/in/radevelopment",
      icon: <FaLinkedin size={24} />,
      index: 1,
    },
    {
      url: "https://twitter.com/YojhanAtuesta",
      icon: <FaTwitter size={24} />,
      index: 2,
    },
    {
      url: "https://github.com/HidenPlus",
      icon: <FaGithub size={24} />,
      index: 3,
    },
  ]
  return (
    <SideBar>
      <SideBarList>
        {socialMedia.map((item) => (
          <li key={item.index} style={{ padding: "15px" }}>
            <SideBarItem href={item.url}>{item.icon}</SideBarItem>
          </li>
        ))}
      </SideBarList>
    </SideBar>
  )
}
