import { loadingBar } from "app/auth/components/LoadingBar/store"
import { useAtom } from "jotai"
import { useState } from "react"
import Switch from "react-switch"

type SwitchComponentProps = {
  checked: boolean
  onChange: (checked: boolean) => Promise<void>
  size?: number
  switchEmail?: string
}

export default function SwitchComponent({
  checked,
  onChange,
  size = 1,
  switchEmail = "",
}: SwitchComponentProps): JSX.Element {
  const [, setLoadingBar] = useAtom(loadingBar)
  const [disabled, setDisabled] = useState(false)

  return (
    <Switch
      switch-email={switchEmail}
      onChange={(e) => {
        setLoadingBar(true)
        setDisabled(true)
        onChange(e)
          .then(() => {
            setLoadingBar(false)
            setDisabled(false)
          })
          .catch(() => {
            setLoadingBar(false)
            setDisabled(false)
          })
      }}
      disabled={disabled}
      size={size}
      checked={checked}
    />
  )
}
