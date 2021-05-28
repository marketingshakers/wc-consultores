import { IDirector } from '@/lib/models/director'
import { Image } from 'react-datocms'
import Viewport, { setAnim } from '@/components/viewport'
import ZoomImage from '@/components/zoom-image'

const DirectorCard = ({
  name,
  position,
  description,
  image,
  imageHd,
}: IDirector) => (
  <Viewport
    className="flex flex-col"
    style={{
      perspective: 1000,
      ...setAnim({ y: '1.5rem', rx: '-16deg' })
    }}
    oneWay
  >
    <ZoomImage
      data={{
        ...image.responsiveImage,
        alt: name,
        title: name,
      }}
      dataHd={{
        ...imageHd.responsiveImage,
        alt: name,
        title: name,
      }}
      className="bg-gray-200 animate"
    />
    <h2 className="mt-6 mb-2 animate t-h2" style={setAnim({ d: '100ms' })}>{name}</h2>
    <style jsx>{`
    .description :global(a) {
      text-decoration: underline;
    }
    `}</style>
    <h3 className="text-lg mb-8 animate" style={setAnim({ d: '200ms' })}>{position}</h3>
    <div className="font-light animate description" style={setAnim({ d: '300ms' })} dangerouslySetInnerHTML={{ __html: description }} />
  </Viewport>
)

export default DirectorCard
