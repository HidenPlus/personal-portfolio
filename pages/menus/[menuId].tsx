import { Suspense } from "react"
import { Routes, useParam } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"

import Layout from "app/core/layouts/Layout"
import getMenu from "app/menus/queries/getMenu"
import deleteMenu from "app/menus/mutations/deleteMenu"

export function Menu() {
  const router = useRouter()
  const menuId = useParam("menuId", "number")
  const [deleteMenuMutation] = useMutation(deleteMenu)
  const [menu] = useQuery(getMenu, { id: menuId })

  return (
    <>
      <Head>
        <title>Menu {menu.id}</title>
      </Head>

      <div>
        <h1>Menu {menu.id}</h1>
        <pre>{JSON.stringify(menu, null, 2)}</pre>

        <Link href={Routes.EditMenuPage({ menuId: menu.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteMenuMutation({ id: menu.id })
              router.push(Routes.MenusPage())
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

function ShowMenuPage() {
  return (
    <div>
      <p>
        <Link href={Routes.MenusPage()}>
          <a>Menus</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
      </Suspense>
    </div>
  )
}

ShowMenuPage.authenticate = true
ShowMenuPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowMenuPage
