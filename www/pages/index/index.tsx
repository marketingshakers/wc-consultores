import Page, { PageProps } from '@/components/page'
import Hero, { HeroProps } from './hero'
import Services, { ServicesProps } from './services'
import Welcome, { WelcomeProps } from './welcome'

export type IndexProps = PageProps & HeroProps & WelcomeProps & ServicesProps

const Index = (data: IndexProps) => (
  <Page {...data} padded={false}>
    <Hero {...data} />
    <Welcome {...data} />
    <Services {...data} />
  </Page>
)

export default Index
