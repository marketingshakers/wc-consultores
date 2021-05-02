import Page, { PageProps } from '@/components/page'

const Page404 = (props: PageProps) => (
  <Page {...props} title="You're offline">
    <div className="text-center w-full py-16">
      <h1 className="font-bold font-title mb-4 text-5xl">
        Sin conexi
      </h1>
      <p>Lo siento, no tienes conexión a internet :(</p>
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
