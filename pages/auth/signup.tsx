import { useRouter } from "next/router"
import { RegisterForm } from "app/auth/components/RegisterForm"
import { BlitzPage, Routes } from "@blitzjs/next"
import { Layout } from "app/projects/components/Layout"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout side="left" title="Sign Up" description="Sign Up Page">
      <RegisterForm onError={(err) => console.log(err)} onSuccess={() => router.push(Routes.Home())} />
    </Layout>
  )
}

export default SignupPage
