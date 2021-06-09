import { getGlobalData, request, responsiveImageHelper } from '@/lib/datocms'
import { QFFormField } from '@/lib/models/form-field'
import { ContactProps } from '@/www/pages/contacto'
import { GetStaticProps } from 'next'
export { default } from '@/www/pages/contacto'

const query = `
query ContactQuery {
  form {
    formFields {
      ${QFFormField}
    }
  }
}
`

export const getStaticProps: GetStaticProps<ContactProps> = async () => {
  const data = await request({ query })
  const globalData = await getGlobalData()
  const { form } = data
  return {
    props: {
      ...form,
      globalData
    },
    revalidate: 1
  }
}
