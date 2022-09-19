import { BlitzPage } from "@blitzjs/next"
import { LoginForm } from "app/auth/components/LoginForm"
import { Layout } from "app/projects/components/Layout"
import { useRouter } from "next/router"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout title="Admin Login panel" description="Login Panel">
      <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
          return router.push(next)
        }}
      />
    </Layout>
  )
}

export default LoginPage
