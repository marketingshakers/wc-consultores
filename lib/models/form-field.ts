import { ICMSType } from './cms'

export const QFFormField = `
  title
  required
  note
  fieldType {
    title
    type: fieldType
  }
`

export type FieldTypeKey = 'simple' | 'complex'

export interface IFieldType extends ICMSType {
  title?: string
  type?: FieldTypeKey
}

export interface IFormField extends ICMSType {
  title?: string
  required?: boolean
  note?: string
  fieldType?: IFieldType
  value?: string
}
