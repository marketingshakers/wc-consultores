import Viewport, { setAnim } from "@/components/viewport"
import { ResponsiveImage } from "@/lib/models/cms"
import { Image } from 'react-datocms'

export interface ServicesProps {
  servicesBg?: ResponsiveImage
  services?: {
    text?: string
  }[]
}

const Services = ({ servicesBg, services }: ServicesProps) => (
  <div className="w-full min-h-screen relative" id="servicios">
    <div className="absolute w-full h-full -z-10 bg-black" aria-hidden>
      <Image
        data={{...servicesBg?.responsiveImage}}
        className="w-full h-full opacity-25"
        pictureClassName="w-full h-full object-cover select-none pointer-events-none"
      />
    </div>
    <div className="py-16 z-20">
      <div className="c-lg text-gray-50">
        <Viewport oneWay style={{
          perspective: 1000,
          ...setAnim({ y: '1.5rem', rx: '-16deg' })
        }}>
          <h2 className="text-4xl sm:text-5xl mb-16 animate">Nuestros servicios</h2>
          <div className={`grid gap-12 grid-cols-1 lg:grid-flow-col lg:grid-rows-5 lg:grid-cols-2`}>
            {services.map((s, idx) => (
              <div className="animate-xl flex animate" style={setAnim({ d: `${100 * (idx + 1) + 100}ms` })} key={idx}>
                <div className="mr-6 pt-1">{String(idx + 1).padStart(2, '0')}</div>
                <div className="lg:w-[26ch] sm:text-xl">
                  {s.text}
                </div>
              </div>
            ))}
          </div>
        </Viewport>
      </div>
    </div>
  </div>
)

export default Services
