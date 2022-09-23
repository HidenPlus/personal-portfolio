import { useSession } from "@blitzjs/auth"
import { BlitzPage, Ctx } from "@blitzjs/next"
import { LoginForm } from "app/auth/components/LoginForm"
import { Layout } from "app/projects/components/Layout"
import { FORM_ERROR } from "final-form"
import { useRouter } from "next/router"
import { useEffect } from "react"

const LoginPage: BlitzPage = (ctx: Ctx) => {
  const router = useRouter()
  const session = useSession()
  //This it´s not necessary but... i´ll use it for now
  useEffect(() => {
    if(!!session.userId) {
      router.push("/auth")
    }
  }, [session])
  return (
    <Layout title="Admin Login Panel" description="Login Panel">
      <LoginForm
        onSuccess={(_user) => {
          return router.replace("/auth")
        }}
        onError={(error) => {
          console.log(error);
          alert(error[FORM_ERROR])
        }}
      />
    </Layout>
  )
}

LoginPage.redirectAuthenticatedTo = "/auth"

export default LoginPage
