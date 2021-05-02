import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export interface Props {
  assetPrefix?: string
  file: string
  nonce?: string
}

export const InlineStyle: React.FC<Props> = ({ assetPrefix, file, nonce }) => {
  const pathSSG = join(process.cwd(), '.next')
  const pathSSR = join(process.cwd(), '_next')
  const path = existsSync(pathSSG) ? pathSSG : pathSSR
  const cssPath = join(path, file)
  const cssSource = readFileSync(cssPath, 'utf-8')
  const html = { __html: cssSource }
  const id = `${assetPrefix}/_next/${file}`
  return <style dangerouslySetInnerHTML={html} data-href={id} nonce={nonce}/>
}
