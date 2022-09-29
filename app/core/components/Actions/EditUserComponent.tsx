import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import LabeledTextField from "../ModalComponent/LabeledTextField"

export default function EditUserComponent({
  formUpdateData,
  setFormUpdateData,
}: {
  formUpdateData: any
  setFormUpdateData: React.Dispatch<React.SetStateAction<any>>
}): JSX.Element {
  const translations = {
    login: useGetTextByLng("authLogin"),
    email: useGetTextByLng("authEmail"),
    name: useGetTextByLng("name"),
    role: useGetTextByLng("role"),
    password: useGetTextByLng("authPassword"),
    forgotPassword: useGetTextByLng("authForgotPassword"),
    signup: useGetTextByLng("authSignUp"),
    userNotExist: useGetTextByLng("errorUserDoesntExist"),
    emailInvalid: useGetTextByLng("errorInvalidEmail"),
    passwordInvalid: useGetTextByLng("errorInvalidPassword"),
    errorAuth: useGetTextByLng("errorAuth"),
    userInactive: useGetTextByLng("errorUserInactive"),
  }

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormUpdateData({ ...formUpdateData, [event.target.name]: event.target.value })
  }

  return (
    <>
      <LabeledTextField
        onChange={handleChangeInput}
        name="name"
        label={translations.name}
        placeholder={translations.name}
        value={formUpdateData.name}
        type="name"
      />
      <LabeledTextField
        onChange={handleChangeInput}
        name="email"
        label={translations.email}
        placeholder={translations.email}
        value={formUpdateData.email}
        type="email"
      />
      <LabeledTextField
        onChange={handleChangeInput}
        name="role"
        label={translations.role}
        placeholder={translations.role}
        value={formUpdateData.role}
        type="role"
      />
    </>
  )
}
