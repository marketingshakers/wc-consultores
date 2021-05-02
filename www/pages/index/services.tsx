import Viewport, { setAnim } from '@/components/viewport'
import { ResponsiveImage } from '@/lib/models/cms'
import { useState } from 'react'
import { Image } from 'react-datocms'
import styles from './styles/services.module.css'

export interface ServicesProps {
  services?: {
    text?: string
    image?: ResponsiveImage
  }[]
}

const Services = ({ services }: ServicesProps) => {
  const [serviceIdx, setServiceIdx] = useState(0)
  return (
    <div className="w-full min-h-screen overflow-hidden relative bg-black" id="servicios">
      {services.map((i, idx) => (
        <div
          id={`${idx}`}
          className={`absolute w-full h-full transform-gpu duration-500 ${serviceIdx == idx ? 'opacity-25' : 'opacity-0 scale-105 translate-y-2'}`} aria-hidden key={idx}
        >
          <Image
            data={i.image.responsiveImage}
            className={`w-full h-full pointer-events-none`}
            pictureClassName="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>
      ))}
      <div className="py-16 z-20">
        <div className="c-lg text-gray-50">
          <Viewport oneWay style={{
            perspective: 1000,
            ...setAnim({ y: '1.5rem', rx: '-16deg' })
          }}>
            <h2 className="text-4xl sm:text-5xl mb-16 animate">Nuestros servicios</h2>
            <div className={`grid gap-12 grid-cols-1 lg:grid-flow-col lg:grid-rows-5 lg:grid-cols-2`}>
              {services.map((s, idx) => (
                <div className="animate" style={setAnim({ d: `${100 * (idx + 1) + 100}ms` })} key={idx}>
                  <div
                    className={`duration-200 flex ${styles.service} ${idx == serviceIdx && styles.current}`}
                    onMouseEnter={() => setServiceIdx(idx)}
                  >
                    <div className="mr-6 lg:pt-[0.15rem]">{String(idx + 1).padStart(2, '0')}</div>
                    <p className="lg:w-[26ch] sm:text-xl">
                      <span>{s.text}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Viewport>
        </div>
      </div>
    </div>
  )
}

export default Services
