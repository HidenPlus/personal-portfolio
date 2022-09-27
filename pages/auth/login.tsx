import { LoginForm } from "app/auth/components/LoginForm"
import { alertDialogAtom } from "app/core/AlertDialog/store"
import { Layout } from "app/projects/components/Layout"
import { FORM_ERROR } from "final-form"
import { useAtom } from "jotai"
import { useRouter } from "next/router"

function LoginPage(): JSX.Element {
  const router = useRouter()
  const [, setAlertDialog]: any = useAtom(alertDialogAtom)
  return (
    <Layout title="Admin Login Panel" description="Login Panel">
      <LoginForm
        onSuccess={() => router.replace("/auth/admin/users")}
        onError={(error) => {
          console.log(error)
          // alert(error[FORM_ERROR])
          setAlertDialog({
            visible: true,
            title: "Error",
            message: error[FORM_ERROR],
            buttons: [
              {
                text: "Ok",
                onClick: () => {
                  setAlertDialog({ visible: false })
                },
              },
            ],
            timeout: 5000,
            type: "error",
          })
        }}
      />
    </Layout>
  )
}

LoginPage.redirectAuthenticatedTo = "/auth/admin/users"

export default LoginPage
