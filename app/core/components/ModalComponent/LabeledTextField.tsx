import { Input, LabeledTextFieldWrapper } from "./styles"

type Props = {
  label: string
  name: string
  placeholder: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default function LabeledTextField({
  label,
  name,
  placeholder,
  type = "text",
  onChange,
  value,
}: Props): JSX.Element {
  return (
    <LabeledTextFieldWrapper>
      <Input
        autoComplete="new-password"
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
      />
      <label htmlFor={name}>{label}</label>
    </LabeledTextFieldWrapper>
  )
}
