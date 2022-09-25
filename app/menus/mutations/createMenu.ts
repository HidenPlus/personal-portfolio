import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const CreateMenu = z.object({
  createdAt: z.date(),
  updatedAt: z.date(),
  title: z.string(),
  description: z.string(),
  titleEs: z.string(),
  authorId: z.number(),
  to: z.string(),
})

export default resolver.pipe(resolver.zod(CreateMenu), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const menu = await db.menu.create({ data: input })

  return menu
})
