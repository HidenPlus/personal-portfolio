import { resolver } from "@blitzjs/rpc"
import db from "db"
import { ForgotPassword } from "../validations"

export const getUser = async (rawEmail: string) => {
  const { email } = ForgotPassword.parse({ email: rawEmail })
  const user = await db.user.findFirst({ where: { email } })
  if (!user) {
    return false
  }
  console.log(user)
  if (!user.active) {
    return false
  }
  return true
}

export default resolver.pipe(resolver.zod(ForgotPassword), async ({ email }) => {
  // This throws an error if credentials are invalid
  console.log({ email })
  const user = await getUser(email)
  return user
})
