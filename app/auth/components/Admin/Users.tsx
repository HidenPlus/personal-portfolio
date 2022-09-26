import { useSession } from "@blitzjs/auth"
import { useQuery } from "@blitzjs/rpc"
import Actions from "app/core/components/Actions"
import TableAdmin from "app/core/components/TableAdmin"
import getUsers from "app/users/queries/getUsers"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { UsersLayout } from "./styles"

export default function Users(): JSX.Element {
  const router = useRouter()
  const session = useSession()
  const [users] = useQuery(getUsers, { where: { active: true } })
  useEffect(() => {
    if (!session.userId) {
      router
        .push("/auth/login")
        .then(() => {})
        .catch(() => {})
    }
  }, [session])

  return (
    <UsersLayout>
      <TableAdmin columns={Object.keys(users[0] || {})} data={users} />
      <Actions>
        <button
          onClick={() => {
            router.push("/auth/admin/users/create")
          }}
        >
          Create
        </button>
      </Actions>
    </UsersLayout>
  )
}
