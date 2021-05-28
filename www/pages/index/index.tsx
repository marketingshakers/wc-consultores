import Page, { PageProps } from '@/components/page'
import Banner from './banner'
import Hero, { HeroProps } from './hero'
import Location, { LocationProps } from './location'
import Projects, { ProjectsProps } from './projects'
import Services, { ServicesProps } from './services'
import Tools, { ToolsProps } from './tools'
import { DirectorsContainer, DirectorsContainerProps } from './directors'
import Welcome, { WelcomeProps } from './welcome'

export type IndexProps = PageProps
  & HeroProps
  & WelcomeProps
  & ServicesProps
  & ToolsProps
  & ProjectsProps
  & DirectorsContainerProps
  & LocationProps

const Index = (data: IndexProps) => (
  <Page {...data} padded={false}>
    <Hero {...data} />
    <Welcome {...data} />
    <Services {...data} />
    <Tools {...data} />
    <Projects {...data} />
    <DirectorsContainer {...data} />
    <Location {...data} />
    <Banner />
  </Page>
)

export default Index
