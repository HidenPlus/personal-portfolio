import { ActionsStyled, ActionsWrapper } from "./styles"

interface ActionsProps {
  children: React.ReactNode
}

export default function Actions({ children }: ActionsProps): JSX.Element {
  return (
    <ActionsWrapper>
      <ActionsStyled>{children}</ActionsStyled>
    </ActionsWrapper>
  )
}
