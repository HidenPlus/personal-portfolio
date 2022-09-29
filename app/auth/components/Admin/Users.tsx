import { useMutation, useQuery } from "@blitzjs/rpc"
import Actions from "app/core/components/Actions"
import TableAdmin, { Colors } from "app/core/components/TableAdmin"
import getUsers from "app/users/queries/getUsers"
import { modalContent as modalContentAtom } from "app/core/components/ModalComponent/store"
import { useAtom } from "jotai"
import CreateUserComponent from "app/core/components/Actions/CreateUserComponent"
import { useEffect, useState } from "react"
import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import { LoginButton } from "app/projects/components/Login/styles"
import LoaderSpinnerFooter from "app/core/components/TableAdmin/LoaderSpinnerFooter"
import createUser from "app/users/mutations/createUser"
import { CancelButton } from "app/core/components/TableAdmin/styles"
import { loadingBar } from "../LoadingBar/store"
import { ActionButton, UsersLayout } from "./styles"

export default function Users(): JSX.Element {
  const translations = {
    create: useGetTextByLng("adminUsersCreate"),
    cancel: useGetTextByLng("cancel"),
  }
  const [modalContent, setModalContent] = useAtom(modalContentAtom)
  const [, setLoadingBar] = useAtom(loadingBar)
  const [disabledRefetch, setDisabledRefetch] = useState(0)
  const [createUserMutation, { isLoading }] = useMutation(createUser)
  const [formCreateData, setFormCreateData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  })

  const handleCreateUser = async (): Promise<void> => {
    setLoadingBar(true)
    await createUserMutation(formCreateData)
    setLoadingBar(false)
  }

  const UpdateButtonElement = !isLoading ? (
    <LoginButton
      key={translations.create}
      style={{ minWidth: "70px", maxWidth: "70px" }}
      id="create-form-button"
      role="button"
      onClick={handleCreateUser}
    >
      {translations.create}
    </LoginButton>
  ) : (
    <LoaderSpinnerFooter color={Colors.secondary} />
  )

  const CancelButtonElement = (
    <CancelButton
      key={translations.cancel}
      style={{ minWidth: "70px", maxWidth: "70px" }}
      id="cancel-form-button"
      role="button"
      onClick={(): void => setModalContent({ ...modalContent, visible: false })}
    >
      {translations.cancel}
    </CancelButton>
  )

  const [users, { refetch }] = useQuery(
    getUsers,
    { orderBy: { email: "asc" } },
    {
      refetchOnWindowFocus: false,
    }
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisabledRefetch(0)
    }, 6000)
    return () => clearTimeout(timeout)
  }, [disabledRefetch])

  return (
    <UsersLayout>
      <TableAdmin columns={Object.keys(users[0] || {})} data={users} />
      <Actions>
        <ActionButton
          type="button"
          onClick={() => {
            setModalContent({
              visible: true,
              title: translations.create,
              children: (
                <CreateUserComponent
                  setFormCreateData={setFormCreateData}
                  formCreateData={formCreateData}
                />
              ),
              actions: [
                {
                  text: translations.cancel,
                  onClick: () => setModalContent({ ...modalContent, visible: false }),
                  element: CancelButtonElement,
                },
                {
                  text: translations.create,
                  onClick: () => {},
                  element: UpdateButtonElement,
                },
              ],
            })
          }}
        >
          Create
        </ActionButton>
        <ActionButton
          disabled={disabledRefetch >= 3}
          type="button"
          onClick={async () => {
            setLoadingBar(true)
            setDisabledRefetch((prev) => prev + 1)
            await refetch()
            setLoadingBar(false)
          }}
        >
          Update
        </ActionButton>
      </Actions>
    </UsersLayout>
  )
}
