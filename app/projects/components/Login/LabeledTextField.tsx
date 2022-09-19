import { Input, LabeledTextFieldWrapper } from "./styles"

type Props = {
    label: string
    name: string
    placeholder: string
    type?: string
}

export default function LabeledTextField({
    label,
    name,
    placeholder,
    type = "text",
}: Props): JSX.Element {
  return (
    <LabeledTextFieldWrapper>
      <Input name={name} placeholder={placeholder} type={type} />
      <label htmlFor={name}>{label}</label>
    </LabeledTextFieldWrapper>
  )
}
