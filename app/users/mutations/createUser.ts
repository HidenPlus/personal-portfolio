import { SecurePassword } from "@blitzjs/auth"
import { resolver } from "@blitzjs/rpc"
import { Signup } from "app/auth/validations"
import db from "db"

export default resolver.pipe(resolver.zod(Signup), async ({ email, password }) => {
  const hashedPassword = await SecurePassword.hash(password.trim())
  const user = await db.user.create({
    data: { email: email.toLowerCase().trim(), hashedPassword, role: "USER", active: true },
    select: { id: true, name: true, email: true, role: true },
  })

  // await ctx.session.$create({ userId: user.id, role: user.role as Role })
  return user
})
