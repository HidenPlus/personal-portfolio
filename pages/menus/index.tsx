import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import Layout from "app/core/layouts/Layout"
import getMenus from "app/menus/queries/getMenus"

const ITEMS_PER_PAGE = 100

export function MenusList() {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ menus, hasMore }] = usePaginatedQuery(getMenus, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id}>
            <Link href={Routes.ShowMenuPage({ menuId: menu.id })}>
              <a>{menu.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

function MenusPage() {
  return (
    <Layout>
      <Head>
        <title>Menus</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewMenuPage()}>
            <a>Create Menu</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <MenusList />
        </Suspense>
      </div>
    </Layout>
  )
}

export default MenusPage
