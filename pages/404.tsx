import Page, { PageProps } from '@/components/page'
import { getGlobalData } from '@/lib/datocms'

const Page404 = (props: PageProps) => (
  <Page {...props} title="404: This page could not be found">
    <div className="text-center w-full py-16">
      <h1 className="mb-4 text-8xl">
        404
      </h1>
      <p>Esta página no puede ser encontrada</p>
    </div>
  </Page>
)

export const getStaticProps = async () => {
  const globalData = await getGlobalData()
  return {
    props: {
      globalData
    },
  }
}

export default Page404
