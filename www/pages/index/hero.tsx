import { IResponsiveImage } from '@/lib/models/cms'
import Link from 'next/link'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from '@/components/viewport'

export interface HeroProps {
  heroTitle?: string
  heroSubtitle?: string
  heroBg?: IResponsiveImage
}

const Hero = ({ heroBg }: HeroProps) => (
  <div className="flex min-h-screen bg-x-gray-800 w-full relative items-center">
    <div className="h-full w-full opacity-50 absolute" aria-hidden>
      <Image
        data={{...heroBg.responsiveImage}}
        className="h-full w-full"
        pictureClassName="w-full h-full object-cover select-none"
      />
    </div>
    <div className="w-full py-24 z-20">
      <Viewport className="flex-col text-gray-50 c-lg" style={{
        perspective: 1000,
        ...setAnim({ y: '1.5rem', rx: '-6deg' })
      }}>
        <h1 className="mb-4 animate text-3xl sm:text-5xl sm:w-[20ch] lg:text-6xl" style={setAnim({d: '300ms'})}>
          20 años desarrollando estrategias de inversión
        </h1>
        <p className="font-light text-xl mb-14 animate lg:text-2xl" style={setAnim({ d: '400ms' })}>
          Para centros comerciales,<br />retail y franquicias.
        </p>
        <div className="animate" style={setAnim({ d: '500ms' })}>
          <Link href="/contacto">
            <a
              className="bg-blue-500 py-4 px-6 duration-200 hover:bg-blue-400"
            >Más información</a>
          </Link>
        </div>
      </Viewport>
    </div>
  </div>
)

export default Hero
