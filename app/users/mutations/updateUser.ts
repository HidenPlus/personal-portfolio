import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const UpdateUser = z.object({
  id: z.number(),
  name: z.string().optional(),
  email: z.string().optional(),
  hashedPassword: z.string().optional(),
  role: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  active: z.boolean().optional(),
})

export default resolver.pipe(
  resolver.zod(UpdateUser),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const project = await db.user.update({ where: { id }, data })

    return project
  }
)
