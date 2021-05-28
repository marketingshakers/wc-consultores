import { ICMSType, IResponsiveImage } from './cms'
import { responsiveImageHelper } from '@/lib/datocms'

export const QFDirector = `
  name
  position: directorPosition
  description
  image {
    ${responsiveImageHelper({ w: 600, h: 480, fit: 'crop' })}
  }
  imageHd: image {
    ${responsiveImageHelper()}
  }
`

export interface IDirector extends ICMSType {
  name?: string
  position?: string
  description?: string
  image?: IResponsiveImage
  imageHd?: IResponsiveImage
}
