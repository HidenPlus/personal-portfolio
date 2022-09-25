/* eslint-disable consistent-return */
import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "app/core/layouts/Layout"
import createMenu from "app/menus/mutations/createMenu"
import { MenuForm, FORM_ERROR } from "app/menus/components/MenuForm"

function NewMenuPage() {
  const router = useRouter()
  const [createMenuMutation] = useMutation(createMenu)

  return (
    <Layout title="Create New Menu">
      <h1>Create New Menu</h1>

      <MenuForm
        submitText="Create Menu"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateMenu}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const menu = await createMenuMutation(values)
            router.push(Routes.ShowMenuPage({ menuId: menu.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.MenusPage()}>
          <a>Menus</a>
        </Link>
      </p>
    </Layout>
  )
}

NewMenuPage.authenticate = true

export default NewMenuPage
