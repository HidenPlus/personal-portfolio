import { paginate } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db, { Prisma } from "db";

interface GetMenusInput
  extends Pick<
    Prisma.MenuFindManyArgs,
    "where" | "orderBy" | "skip" | "take"
  > {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetMenusInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: menus,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.menu.count({ where }),
      query: (paginateArgs) =>
        db.menu.findMany({ ...paginateArgs, where, orderBy }),
    });

    return {
      menus,
      nextPage,
      hasMore,
      count,
    };
  }
);
