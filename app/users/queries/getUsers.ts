// create query to get all users blitz
import { resolver } from "@blitzjs/rpc"
import { NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetUsers = z.object({
  where: z.object({
    active: z.boolean(),
  }),
})

export default resolver.pipe(resolver.zod(GetUsers), async ({ where }) => {
  const user = await db.user.findMany({ where })

  if (!user) {
    throw new NotFoundError()
  }

  return user
})
