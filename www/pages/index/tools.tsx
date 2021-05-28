import { IResponsiveImage } from '@/lib/models/cms'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from '@/components/viewport'

export interface ToolsProps {
  toolsImage?: IResponsiveImage
  toolsTitle?: string
  toolsText?: string
  toolsLogos?: IResponsiveImage[]
}

const Tools = ({
  toolsImage,
  toolsTitle,
  toolsText,
  toolsLogos,
}: ToolsProps) => (
  <div className="py-24 c-lg" id="herramientas">
    <div className="flex w-full flex-col-reverse lg:flex-row lg:items-center gap-24">
      <Viewport className="w-full lg:w-1/2 animate" oneWay style={{
        ...setAnim({ y: '-1rem' })
      }}>
        <Image
          data={{
            ...toolsImage?.responsiveImage
          }}
        />
      </Viewport>
      <Viewport className="w-full lg:w-1/2" oneWay style={{
        perspective: 1000,
        ...setAnim({ y: '1.5rem', rx: '-16deg' })
      }}>
        <h2 className="text-3xl sm:text-4xl lg:w-[21ch] mb-16 animate">{toolsTitle}</h2>
        <div
          className="font-bold text-xl sm:text-2xl mb-12 animate"
          style={setAnim({ d: '100ms' })}
          dangerouslySetInnerHTML={{ __html: toolsText }}
        />

        <p
          className="font-light text-x-gray-400 text-xl sm:text-2xl animate mb-12"
          style={setAnim({ d: '200ms' })}
        >Empresas que han confiado en nosotros</p>
        <div className="flex flex-wrap w-full gap-12">
          {toolsLogos.map((i, idx) => (
            <div
              className="animate mx-auto"
              style={setAnim({ d: `${200 + (100 * idx)}ms` })}
              key={idx}
            >
              <Image
                data={{
                  alt: '',
                  ...i.responsiveImage
                }}
                className="filter grayscale saturate-150 duration-200 hover:filter-none transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Viewport>
    </div>
  </div>
)

export default Tools
