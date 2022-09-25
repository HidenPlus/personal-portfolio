import { Title, Name, Presentation, Description, CompanyUrl } from "./styles"

interface HeaderProps {
  presentation: string
  title: string
  name: string
  description: string
  companyUrl?: string
  companyName?: string
}

export default function HeaderTitle({
  presentation,
  title,
  name,
  description,
  companyUrl = "https://www.gradiweb.com/en/",
  companyName = "Gradiweb.",
}: HeaderProps) {
  return (
    <>
      <Title>{title}</Title>
      <Name>{name}</Name>
      <Presentation>{presentation}</Presentation>
      <Description>
        {description}
        <CompanyUrl href={companyUrl}>{companyName}</CompanyUrl>
      </Description>
    </>
  )
}
