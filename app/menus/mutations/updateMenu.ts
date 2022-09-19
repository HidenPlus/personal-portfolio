import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const UpdateMenu = z.object({
  id: z.number(),
  name: z.string(),
});

export default resolver.pipe(
  resolver.zod(UpdateMenu),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const menu = await db.menu.update({ where: { id }, data });

    return menu;
  }
);
