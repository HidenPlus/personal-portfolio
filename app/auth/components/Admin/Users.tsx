import { useQuery } from "@blitzjs/rpc"
import Actions from "app/core/components/Actions"
import TableAdmin from "app/core/components/TableAdmin"
import getUsers from "app/users/queries/getUsers"
import { useRouter } from "next/router"
import { modalContent as modalContentAtom } from "app/core/components/ModalComponent/store"
import { useAtom } from "jotai"
import { ModalContent } from "app/core/components/ModalComponent/styles"
import CreateUserComponent from "app/core/components/Actions/CreateUserComponent"
import { ActionButton, UsersLayout } from "./styles"

export default function Users(): JSX.Element {
  const [modalContent, setModalContent] = useAtom(modalContentAtom)
  const router = useRouter()
  const [users] = useQuery(
    getUsers,
    { orderBy: { email: "asc" } },
    {
      refetchOnWindowFocus: false,
    }
  )

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
      </Actions>
    </UsersLayout>
  )
}
