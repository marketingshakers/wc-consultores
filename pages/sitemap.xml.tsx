import { request } from '@/lib/datocms'
import { GetServerSideProps } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'

type BuildSitemap = (items: any) => Promise<any>

const pages = ['']

const buildSitemap: BuildSitemap = (items) => {
  const hostUrl = process.env.HOST_URL ? `https://${process.env.HOST_URL}` : 'http://localhost:3000'
  const sitemap = new SitemapStream({
    hostname: hostUrl,
  })

  pages.forEach((page) => {
    sitemap.write({
      url: `${hostUrl}${page}`,
      lastmodISO: new Date().toISOString(),
      priority: page === '' ? 1 : 0.7,
    })
  })

  // items.allAlbums.forEach((item: Album) => {
  //   sitemap.write({
  //     url: `${hostUrl}/galeria/${item.slug}`,
  //     lastmodISO: new Date(item.updatedAt).toISOString(),
  //     priority: 0.8,
  //   });
  // });

  sitemap.end();

  return streamToPromise(sitemap)
}

const DATA_QUERY = `
query SitemapQuery {
}
`

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context && context.res) {
    const { res } = context

    // const data = await request({ query: DATA_QUERY })

    const sitemap = await buildSitemap({})

    res.setHeader('content-type', 'text/xml')
    res.write(sitemap.toString())
    res.end()
  }

  return {
    props: {},
  }
}

const SitemapPage = () => null

export default SitemapPage
