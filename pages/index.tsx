import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
import { QFDirector } from '@/lib/models/director'
import { IndexProps } from '@/www/pages/index'
import { GetStaticProps } from 'next'
export { default } from '@/www/pages/index'

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

  directors: allDirectors {
    ${QFDirector}
  }

  contact {
    instagram
    email
    location
  }
}
`

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const data = await request({ query })
  const globalData = await getGlobalData()
  const { home, directors, contact } = data
  return {
    props: {
      ...home,
      ...contact,
      directors,
      globalData
    },
    revalidate: 1
  }
}
