import Page, { PageProps } from '@/components/page'

const Page404 = (props: PageProps) => (
  <Page {...props} title="404: This page could not be found">
    <div className="text-center w-full py-16">
      <h1 className="font-bold mb-4 text-8xl">
        <span className="text-yellow-300">4</span>
        <span className="text-blue-300">0</span>
        <span className="text-red-300">4</span>
      </h1>
      <p>This page could not be found</p>
    </div>
  </Page>
)

export async function getStaticProps() {
  return {
    props: {
    }
  }
}

export default Page404
