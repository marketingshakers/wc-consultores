import { ResponsiveImage } from '@/lib/models/cms'
import Link from 'next/link'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from '@/components/viewport'

export interface HeroProps {
  heroTitle?: string
  heroSubtitle?: string
  heroBg?: ResponsiveImage
}

const Hero = ({ heroBg }: HeroProps) => (
  <div className="w-full min-h-screen bg-x-gray-800 relative flex items-center">
    <div className="absolute w-full h-full opacity-50" aria-hidden>
      <Image
        data={{...heroBg.responsiveImage}}
        className="w-full h-full"
        pictureClassName="w-full h-full object-cover select-none"
      />
    </div>
    <div className="py-24 w-full z-20">
      <Viewport className="flex-col c-lg text-gray-50" style={{
        perspective: 1000,
        ...setAnim({ y: '1.5rem', rx: '-6deg' })
      }}>
        <h1 className="text-3xl sm:text-5xl sm:w-[20ch] mb-4 animate lg:text-6xl" style={setAnim({d: '300ms'})}>
          20 años desarrollando estrategias de inversión
        </h1>
        <p className="text-xl mb-14 animate lg:text-2xl font-light" style={setAnim({ d: '400ms' })}>
          Para centros comerciales,<br />retail y franquicias.
        </p>
        <div className="animate" style={setAnim({ d: '500ms' })}>
          <Link href="#">
            <a
              className="bg-blue-500 px-6 py-4 hover:bg-blue-400 duration-200"
            >Más información</a>
          </Link>
        </div>
      </Viewport>
    </div>
  </div>
)

export default Hero
