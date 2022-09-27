import { useQuery } from "@blitzjs/rpc"
import Actions from "app/core/components/Actions"
import TableAdmin from "app/core/components/TableAdmin"
import getUsers from "app/users/queries/getUsers"
import { useRouter } from "next/router"
import { UsersLayout } from "./styles"

export default function Users(): JSX.Element {
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
        <button
          type="button"
          onClick={async () => {
            await router.push("/auth/admin/users/create")
          }}
        >
          Create
        </button>
      </Actions>
    </UsersLayout>
  )
}
