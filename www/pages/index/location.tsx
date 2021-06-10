import { useGlobalDataContext } from '@/components/page'
import { UserMultiple32, LogoInstagram32, LogoTwitter32, Earth32 } from '@carbon/icons-react'

export interface LocationProps {
  location?: string
  email?: string
  instagram?: string
  twitter?: string
}

const Location = ({
  location,
  email,
  instagram,
  twitter,
}: LocationProps) => {
  const { contact } = useGlobalDataContext()
  const { phone } = contact
  return (
    <div className="border-t flex flex-wrap border-x-gray-200 text-center w-full items-stretch" id="ubicacion">
      <div className="border-b flex flex-col border-x-gray-200 w-full py-24 px-6 items-center lg:border-r lg:-mr-px lg:border-b-0 lg:px-0 lg:w-1/2">
        <div className="mb-4 text-blue-500">
          <UserMultiple32 width={96} height={96} />
        </div>
        <div className="font-bold mb-6 text-2xl">¡Contáctanos para más información!</div>
        <div className="flex mb-2 items-center">
          <LogoInstagram32 className="mr-2 text-blue-500" />
          <a href={`https://instagram.com/${instagram}`} className="hover:underline">@{instagram}</a>
        </div>
        <div className="flex items-center">
          <LogoTwitter32 className="mr-2 text-blue-500" />
          <a href={`https://twitter.com/${twitter}`} className="hover:underline">@{twitter}</a>
        </div>
      </div>
      <div className="flex flex-col w-full py-24 px-6 items-center lg:-ml-px lg:px-0 lg:w-1/2">
        <div className="mb-4 text-blue-500">
          <Earth32 width={96} height={96} />
        </div>
        <div className="font-bold mb-6 text-2xl">Medios de contacto</div>
        <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
        <a href={`mailto:${email}`} className="mb-4 hover:underline">{email}</a>
        <div dangerouslySetInnerHTML={{ __html: location }} />
      </div>
    </div>
  )
}

export default Location
