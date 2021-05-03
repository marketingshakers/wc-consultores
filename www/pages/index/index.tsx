import Page, { PageProps } from '@/components/page'
import Hero, { HeroProps } from './hero'
import Services, { ServicesProps } from './services'
import Tools, { ToolsProps } from './tools'
import Welcome, { WelcomeProps } from './welcome'

export type IndexProps = PageProps & HeroProps & WelcomeProps & ServicesProps & ToolsProps

const Index = (data: IndexProps) => (
  <Page {...data} padded={false}>
    <Hero {...data} />
    <Welcome {...data} />
    <Services {...data} />
    <Tools {...data} />
  </Page>
)

export default Index
