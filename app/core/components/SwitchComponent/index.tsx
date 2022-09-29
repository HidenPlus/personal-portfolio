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
  const [disabled, setDisabled] = useState(false)

  return (
    <Switch
      switch-email={switchEmail}
      onChange={(e) => {
        setDisabled(true)
        onChange(e)
          .then(() => {
            setDisabled(false)
          })
          .catch(() => {
            setDisabled(false)
          })
      }}
      disabled={disabled}
      size={size}
      checked={checked}
    />
  )
}
