import { Layout } from "app/projects/components/Layout"
import { Suspense } from "react"

function AdminPage() {
  return (
    <Layout title="Admin Login Panel" description="Login Panel">
      <Suspense fallback={<h1>Loading</h1>}>
        <h1>Loading...</h1>
      </Suspense>
    </Layout>
  )
}

AdminPage.authenticate = { redirectTo: "/auth/login" }

export default AdminPage
