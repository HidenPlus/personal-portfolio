import { useAtom } from "jotai"
import { loadingBar } from "./store"
import { LoadingBarInner, LoadingBarWrapper } from "./styles"

export default function LoadingBar(): JSX.Element {
  const [loading] = useAtom(loadingBar)
  return (
    <LoadingBarWrapper $active={loading}>
      <LoadingBarInner />
    </LoadingBarWrapper>
  )
}
