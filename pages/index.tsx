import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
import { IndexProps } from '@/www/pages/index'
export { default,  } from '@/www/pages/index'
import { GetStaticPropsResult } from 'next'

const query = `
query HomeQuery {
  home {
    heroBg {
      ${responsiveImageHelper({ w: 800, q: 60 })}
    }
    welcomeTitle
    welcomeFrase
    welcomeText
    welcomeImage {
      ${responsiveImageHelper({ w: 480, h: 800, q: 60 })}
    }
    
    servicesBg {
      ${responsiveImageHelper({ w: 800, q: 60 })}
    }
    services {
      text
    }
  }
}
`

export const getStaticProps = async (): Promise<GetStaticPropsResult<IndexProps>> => {
  const { home } = await request({ query })
  return {
    props: {
      ...home
    }
  }
}
