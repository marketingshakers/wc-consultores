import Viewport, { setAnim } from '@/components/viewport'
import { ResponsiveImage } from '@/lib/models/cms'
import ZoomImage from '@/components/zoom-image'

export interface ProjectsProps {
  projectTitle?: string
  projectDescription?: string
  projectImage?: ResponsiveImage
  projectImageHd?: ResponsiveImage
}

const Projects = ({
  projectTitle,
  projectDescription,
  projectImage,
  projectImageHd,
}: ProjectsProps) => (
  <div className="py-24 c-lg" id="proyectos">
    <Viewport className="w-full" oneWay style={{
      perspective: 1000,
      ...setAnim({ y: '1.5rem', rx: '-16deg' })
    }}>
      <h2 className="mb-24 animate text-3xl sm:text-center sm:text-4xl">
        Proyecto más reciente
      </h2>
      <div className="mx-auto mb-24 w-full lg:w-7/10">
        <h3
          className="font-bold mb-16 animate text-3xl sm:text-4xl"
          style={setAnim({ d: '100ms' })}
        >
          {projectTitle}
        </h3>
        <div
          className="font-light space-y-4 text-lg animate"
          style={setAnim({ d: '200ms' })}
          dangerouslySetInnerHTML={{ __html: projectDescription }}
        />
      </div>
    </Viewport>
    <Viewport className="w-full" oneWay style={{
      perspective: 1000,
      ...setAnim({ y: '1.5rem', rx: '-3deg' })
    }}>
      <ZoomImage
        className="animate"
        data={{
          ...projectImage.responsiveImage,
          alt: projectTitle,
          title: projectTitle,
        }}
        dataHd={{
          ...projectImageHd.responsiveImage,
          alt: projectTitle,
          title: projectTitle,
        }}
      />
    </Viewport>
  </div>
    )

    export default Projects
