import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const DeleteMenu = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeleteMenu), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const menu = await db.menu.deleteMany({ where: { id } })

  return menu
})
