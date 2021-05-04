import Viewport, { setAnim } from '@/components/viewport'

const Banner = () => (
  <div className="bg-blue-500 w-full py-16">
    <Viewport className="flex flex-wrap text-2xl c-lg sm:text-3xl lg:justify-between" oneWay>
      <h2 className="animate text-gray-50 lg:w-[42ch]" style={setAnim({x: '-0.5rem'})}>
        En escenarios inciertos, necesitas instrumentos para lograr los mejores resultados
      </h2>
      <div className="mt-12 animate sm:mt-0" style={setAnim({ time: '400ms' })}>
        <a
          className="bg-gray-50 py-4 px-14 text-x-gray-900 duration-200 inline-flex items-center justify-between hover:bg-gray-100"
          href="#"
        >
          Contáctanos
        </a>
      </div>
    </Viewport>
  </div>
)

export default Banner
