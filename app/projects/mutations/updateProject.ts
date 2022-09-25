import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const UpdateProject = z.object({
  id: z.number(),
  title: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  description: z.string(),
  authorId: z.number(),
  url: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateProject),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const project = await db.project.update({ where: { id }, data })

    return project
  }
)
