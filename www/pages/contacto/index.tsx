import Page, { PageProps } from '@/components/page'
import { FieldTypeKey, IFormField } from '@/lib/models/form-field'
import { useState, Dispatch, SetStateAction } from 'react'

export type ContactProps = PageProps & {
  formFields?: IFormField[]
}

const slugify = (...args: (string | number)[]): string => {
  const value = args.join(' ')

  return value
      .normalize('NFD') // split an accented letter in the base letter and the acent
      .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
      .replace(/\s+/g, '-') // separator
}

const handleChange = (fields: IFormField[], idx: number, value: string, handler: any) => {
  fields[idx].value = value // Update it with the modified email.
  handler({ forms: fields })  // Update the state.
}

const renderField = (idx: number, field: IFormField, fields: IFormField[], handler: any) => ({
  'simple': (
    <input
      type="text"
      className="w-full input"
      id={slugify(field.title)}
      onChange={(e) => handleChange(fields, idx, e.target.value, handler)}
    />
  ),
  'complex': (
    <textarea
      className="input"
      id={slugify(field.title)}
      onChange={(e) => handleChange(fields, idx, e.target.value, handler)}
    >{field.value}</textarea>
  ),
}[field.fieldType.type])

const Index = (data: ContactProps) => {
  const [fields, setFieldValues] = useState({ forms: data.formFields })
  const send = () => {
    console.log(fields.forms)
  }
  return (
    <Page {...data} title="Formulario de contacto">
      <div className="py-24 pb-48 c-lg lg:pb-24">
        <h1 className="mb-24 t-h1">Formulario de contacto</h1>
        <div className="flex flex-col mx-auto space-y-12 w-full lg:w-5/10">
          {fields.forms.map((f, idx) => (
            <div key={idx} className="flex flex-col">
              <label htmlFor={slugify(f.title)} className="font-bold mb-4 input-label">{`${f.title}${f.required ? ' *' : ''}`}</label>
              {renderField(idx, f, fields.forms, setFieldValues)}
            </div>
          ))}
          <button
            className="bg-transparent font-bold ml-auto border-2 border-blue-500 text-sm mb-[2px] py-2 px-4 text-blue-500 duration-200 lg:text-base hover:text-white hover:bg-blue-500"
            onClick={send}
          >Enviar</button>
        </div>
      </div>
    </Page>
  )
}

export default Index
