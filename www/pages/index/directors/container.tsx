import { IDirector } from '@/lib/models/director'
import { clamp } from '@/lib/utils'
import DirectorCard from './card'
import styles from './styles/container.module.css'
import Viewport, { setAnim } from '@/components/viewport'

export type DirectorsContainerProps = {
  directors?: IDirector[]
}

const DirectorsContainer = ({ directors }: DirectorsContainerProps) => (
  <div className="py-24 c-lg" id="directores">
    <Viewport className="w-full" oneWay style={{
      perspective: 1000,
      ...setAnim({ y: '1.5rem', rx: '-16deg' })
    }}>
      <h2 className="mb-24 animate text-3xl sm:text-center sm:text-4xl">
        Nuestros directores
      </h2>
    </Viewport>
    <div
      className={`${styles.grid}`} style={{
        ['--directors-container-length' as string]: clamp(directors.length, 2, 3)
      }}
    >
      {directors.map((d, idx) => (
        <DirectorCard {...d} key="idx" />
      ))}
    </div>
  </div>
)

export default DirectorsContainer
