import { getGlobalData, request } from '@/lib/datocms'
import { CookiesProps } from '@/www/pages/legal/cookies'
import { GetStaticProps } from 'next'
export { default } from '@/www/pages/legal/cookies'

const query = `
query CookiesQuery {
  cookiesPolicy {
    content {
      value
      blocks {
        __typename
      }
    }
  }
}
`

export const getStaticProps: GetStaticProps<CookiesProps> = async () => {
  const data = await request({ query })
  const globalData = await getGlobalData()
  const { cookiesPolicy } = data
  return {
    props: {
      ...cookiesPolicy,
      globalData
    },
    revalidate: 1
  }
}
