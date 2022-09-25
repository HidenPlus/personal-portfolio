import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const CreateProject = z.object({
  title: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  description: z.string(),
  authorId: z.number(),
  url: z.string(),
})

export default resolver.pipe(resolver.zod(CreateProject), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const project = await db.project.create({ data: input })

  return project
})
