import { useState } from "react"
import Switch from "react-switch"

type SwitchComponentProps = {
  checked: boolean
  onChange: (checked: boolean) => Promise<void>
  size?: number
}

export default function SwitchComponent({
  checked,
  onChange,
  size = 1,
}: SwitchComponentProps): JSX.Element {
  const [disabled, setDisabled] = useState(false)

  return (
    <Switch
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
