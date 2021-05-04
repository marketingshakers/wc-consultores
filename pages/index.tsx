import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
import { IndexProps } from '@/www/pages/index'
export { default,  } from '@/www/pages/index'
import { GetStaticProps } from 'next'

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
      ${responsiveImageHelper({ w: 480, h: 600, q: 60, fit: 'crop' })}
    }
    
    services {
      image {
        ${responsiveImageHelper({ w: 800, q: 60 })}
      }
      text
    }

    toolsImage {
      ${responsiveImageHelper({ w: 480, h: 600, q: 60, fit: 'crop' })}
    }
    toolsTitle
    toolsText
    toolsLogos {
      ${responsiveImageHelper({ h: 48 })}
    }

    projectTitle
    projectDescription
    projectImage {
      ${responsiveImageHelper({ w: 600, q: 70 })}
    }
    projectImageHd: projectImage {
      ${responsiveImageHelper({ q: 80 })}
    }
  }
}
`

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const { home } = await request({ query })
  const globalData = await getGlobalData()
  return {
    props: {
      ...home,
      globalData
    }
  }
}
