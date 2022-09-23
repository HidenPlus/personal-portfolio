import { useSession } from "@blitzjs/auth"
import { useMutation } from "@blitzjs/rpc"
import logout from "app/auth/mutations/logout"
import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { DashboardLayout } from "./styles"

export default function Dashboard(): JSX.Element {
  const router = useRouter()
  const session = useSession()
  const translations = {
    users: useGetTextByLng("adminUsers"),
  }
  const [logoutMutation] = useMutation(logout)

  useEffect(() => {
    if(!!!session.userId) {
      router.push("/auth/login")
    }
  }, [session]);

  return (
    <DashboardLayout>
      <h1>{translations.users}</h1>
      <button onClick={async () => {
        await logoutMutation();
        router.replace("/auth/login")
      }}>
        Logout
      </button>
    </DashboardLayout>
  )
}
