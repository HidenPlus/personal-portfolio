import { BlitzPage, Ctx } from "@blitzjs/next"
import { Layout } from "app/projects/components/Layout"
import { Suspense } from "react"
import Dashboard from "app/auth/components/Dashboard"

const AdminPage: BlitzPage = (ctx: Ctx) => {
  return (
    <Layout title="Admin Login Panel" description="Login Panel">
      <Suspense
        fallback={<h1>Loading</h1>}
      >
      <Dashboard></Dashboard>
      </Suspense>
    </Layout>
  )
}

AdminPage.authenticate = {redirectTo: "/auth/login"}

export default AdminPage
