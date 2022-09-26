import Users from "app/auth/components/Admin/Users"
import { Layout } from "app/projects/components/Layout"
import { Suspense } from "react"

function AuthUsersPage() {
  return (
    <Layout title="Admin Login Panel" description="Login Panel">
      <Suspense fallback={<h1>Loading</h1>}>
        <Users />
      </Suspense>
    </Layout>
  )
}

AuthUsersPage.authenticate = { redirectTo: "/auth/login" }

export default AuthUsersPage
