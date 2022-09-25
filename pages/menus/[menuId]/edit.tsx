/* eslint-disable consistent-return */
import { Suspense } from "react"
import { Routes, useParam } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"

import Layout from "app/core/layouts/Layout"
import getMenu from "app/menus/queries/getMenu"
import updateMenu from "app/menus/mutations/updateMenu"
import { MenuForm, FORM_ERROR } from "app/menus/components/MenuForm"

export function EditMenu() {
  const router = useRouter()
  const menuId = useParam("menuId", "number")
  const [menu, { setQueryData }] = useQuery(
    getMenu,
    { id: menuId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateMenuMutation] = useMutation(updateMenu)

  return (
    <>
      <Head>
        <title>Edit Menu {menu.id}</title>
      </Head>

      <div>
        <h1>Edit Menu {menu.id}</h1>
        <pre>{JSON.stringify(menu, null, 2)}</pre>

        <MenuForm
          submitText="Update Menu"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateMenu}
          initialValues={menu}
          onSubmit={async (values) => {
            try {
              const updated = await updateMenuMutation({
                id: menu.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowMenuPage({ menuId: updated.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

function EditMenuPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditMenu />
      </Suspense>

      <p>
        <Link href={Routes.MenusPage()}>
          <a>Menus</a>
        </Link>
      </p>
    </div>
  )
}

EditMenuPage.authenticate = true
EditMenuPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditMenuPage
