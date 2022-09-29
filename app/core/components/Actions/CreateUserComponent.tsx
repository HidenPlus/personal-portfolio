import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import LabeledTextField from "../ModalComponent/LabeledTextField"

type CreateUserComponentProps = {
  formCreateData: any
  setFormCreateData: React.Dispatch<React.SetStateAction<any>>
}

export default function CreateUserComponent({
  setFormCreateData,
  formCreateData,
}: CreateUserComponentProps): JSX.Element {
  const translations = {
    login: useGetTextByLng("authLogin"),
    email: useGetTextByLng("authEmail"),
    name: useGetTextByLng("name"),
    role: useGetTextByLng("role"),
    password: useGetTextByLng("authPassword"),
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(formCreateData, { [event.target.name]: event.target.value })
    // TODO: fix change state form create user
    setFormCreateData({ ...formCreateData, [event.target.name]: event.target.value })
  }

  return (
    <>
      <LabeledTextField
        onChange={handleChangeInput}
        name="name"
        label={translations.name}
        placeholder={translations.name}
        value={formCreateData.name}
        type="name"
      />
      <LabeledTextField
        onChange={handleChangeInput}
        name="email"
        label={translations.email}
        placeholder={translations.email}
        value={formCreateData.email}
        type="email"
      />
      <LabeledTextField
        onChange={handleChangeInput}
        name="role"
        label={translations.role}
        placeholder={translations.role}
        value={formCreateData.role}
        type="text"
      />
      <LabeledTextField
        onChange={handleChangeInput}
        name="password"
        label={translations.password}
        placeholder={translations.password}
        value={formCreateData.password}
        type="text"
      />
    </>
  )
}
