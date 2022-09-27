// create query to get all users blitz
import { resolver } from "@blitzjs/rpc"
import { NotFoundError } from "blitz"
import db from "db"

export default resolver.pipe(resolver.authorize(), async ({ orderBy }) => {
  const user = await db.user.findMany({ orderBy })

  if (!user) {
    throw new NotFoundError()
  }

  return user
})
