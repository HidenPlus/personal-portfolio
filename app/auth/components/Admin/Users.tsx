import { useSession } from "@blitzjs/auth"
import { useMutation } from "@blitzjs/rpc"
import logout from "app/auth/mutations/logout"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { UsersLayout } from "./styles"

export default function Users(): JSX.Element {
  const router = useRouter()
  const session = useSession()
  const [logoutMutation] = useMutation(logout)

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
      <p>{session.userId}</p>
      <h1>Dashboard</h1>
      <button
        type="button"
        onClick={async () => {
          await logoutMutation()
          await router.replace("/auth/login")
        }}
      >
        Logout
      </button>
    </UsersLayout>
  )
}
