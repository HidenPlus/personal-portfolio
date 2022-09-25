import { Layout } from "app/projects/components/Layout"
import { Suspense } from "react"
import Dashboard from "app/auth/components/Dashboard"

function AuthUsersPage() {
  return (
    <Layout title="Admin Login Panel" description="Login Panel">
      <Suspense fallback={<h1>Loading</h1>}>
        <Dashboard />
      </Suspense>
    </Layout>
  )
}

AdminPage.authenticate = { redirectTo: "/auth/login" }

export default AdminPage
