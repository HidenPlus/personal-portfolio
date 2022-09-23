import { Input, LabeledTextFieldWrapper } from "./styles"

type Props = {
    label: string
    name: string
    placeholder: string
    type?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function LabeledTextField({
    label,
    name,
    placeholder,
    type = "text",
    onChange,
}: Props): JSX.Element {
  return (
    <LabeledTextFieldWrapper>
      <Input autoComplete="new-password" onChange={onChange} name={name} placeholder={placeholder} type={type} />
      <label htmlFor={name}>{label}</label>
    </LabeledTextFieldWrapper>
  )
}
