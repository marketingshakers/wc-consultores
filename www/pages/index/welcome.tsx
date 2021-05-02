import { ResponsiveImage } from '@/lib/models/cms'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from '@/components/viewport'

export interface WelcomeProps {
  welcomeTitle?: string
  welcomeFrase?: string
  welcomeText?: string
  welcomeImage?: ResponsiveImage
}

const Welcome = ({
  welcomeTitle,
  welcomeFrase,
  welcomeText,
  welcomeImage,
}: WelcomeProps) => (
  <div className="py-24 c-lg" id="quienes-somos">
    <div className="flex w-full flex-col-reverse lg:flex-row lg:items-center gap-24">
      <Viewport className="w-full lg:w-1/2 animate" oneWay style={{
        ...setAnim({ y: '-1rem' })
      }}>
        <Image
          data={{
            ...welcomeImage?.responsiveImage
          }}
        />
      </Viewport>
      <Viewport className="w-full lg:w-1/2" oneWay style={{
        perspective: 1000,
        ...setAnim({ y: '1.5rem', rx: '-16deg' })
      }}>
        <h2 className="text-4xl sm:text-5xl lg:w-[13ch] mb-12 animate">{welcomeTitle}</h2>
        <p className="font-bold text-xl mb-12 animate" style={setAnim({ d: '100ms' })}>
          {welcomeFrase}
        </p>
        <div
          className="space-y-4 sm:text-xl animate"
          style={setAnim({ d: '200ms' })}
          dangerouslySetInnerHTML={{ __html: welcomeText }}
        />
      </Viewport>
    </div>
  </div>
)

export default Welcome
