/* eslint-disable react/no-unknown-property */
import HeaderTitle from "app/projects/components/Header"
import { useGetTextByLng } from "app/core/hooks/useGetTextByLng"
import { Layout } from "app/projects/components/Layout"

function Home() {
  const title = useGetTextByLng("headerTitle_title")
  const name = useGetTextByLng("headerTitle_name")
  const presentation = useGetTextByLng("headerTitle_presentation")
  const description = useGetTextByLng("headerTitle_description")
  return (
    <Layout title="Yojhan Atuesta Portfolio" description="Home page Yojhan Atuesta portfolio">
      <HeaderTitle
        title={title}
        name={name}
        presentation={presentation}
        description={description}
      />
    </Layout>
  )
}

export default Home
