import Page, { PageProps } from '@/components/page'
import { getGlobalData } from '@/lib/datocms'

const Page404 = (props: PageProps) => (
  <Page {...props} title="You're offline">
    <div className="text-center w-full py-16">
      <h1 className="font-bold font-title mb-4 text-5xl">
        Sin conexión
      </h1>
      <p>Lo siento, no tienes conexión a internet :(</p>
    </div>
  </Page>
)

export const getStaticProps = async () => {
  const globalData = await getGlobalData()
  return {
    props: {
      globalData
    }
  }
}

export default Page404
