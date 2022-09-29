import { useQuery } from "@blitzjs/rpc"
import Actions from "app/core/components/Actions"
import TableAdmin from "app/core/components/TableAdmin"
import getUsers from "app/users/queries/getUsers"
import { modalContent as modalContentAtom } from "app/core/components/ModalComponent/store"
import { useAtom } from "jotai"
import CreateUserComponent from "app/core/components/Actions/CreateUserComponent"
import { useEffect, useState } from "react"
import { ActionButton, UsersLayout } from "./styles"

export default function Users(): JSX.Element {
  const [, setModalContent] = useAtom(modalContentAtom)
  const [disabledRefetch, setDisabledRefetch] = useState(0)
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
              title: "Add User",
              children: <CreateUserComponent />,
              actions: [],
            })
          }}
        >
          Create
        </ActionButton>
        <ActionButton
          disabled={disabledRefetch >= 3}
          type="button"
          onClick={() => {
            setDisabledRefetch((prev) => prev + 1)
            refetch()
          }}
        >
          Update
        </ActionButton>
      </Actions>
    </UsersLayout>
  )
}
