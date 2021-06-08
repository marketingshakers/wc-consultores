import Page, { PageProps } from '@/components/page'
import { StructuredText, StructuredTextGraphQlResponse } from 'react-datocms'
import Viewport, { setAnim } from '@/components/viewport'

export type CookiesProps = PageProps & {
  content?: StructuredTextGraphQlResponse
}

const Index = (data: CookiesProps) => {
  return (
    <Page {...data} title="Políticas de Cookies">
      <Viewport
        className="py-24 pb-48 c-lg lg:pb-24"
        once
        style={{
          ...setAnim({ y: '1.5rem', rx: '-6deg' })
        }}
      >
        <h1 className="mb-24 animate t-h1" style={{ perspective: 1000 }}>Políticas de Cookies</h1>
        <div
          className="font-title mx-auto w-full pb-16 animate prose"
          style={setAnim({ d: '100ms' })}
        >
          <StructuredText
            data={data.content}
          />
      </div>
      </Viewport>
    </Page>
  )
}

export default Index
