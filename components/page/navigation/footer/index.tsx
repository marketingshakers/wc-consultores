import Link from 'next/link'
import navs from '@/lib/navigation'
import styles from './footer.module.css'
import { Fragment, useState } from 'react'
import { useGlobalDataContext } from '@/components/page'
import Viewport, { setAnim } from '@/components/viewport'
import Image from 'next/image'
import { LogoFacebook32 } from '@carbon/icons-react'
import { LogoInstagram32 } from '@carbon/icons-react'

const MadeBy = () => (
  <div className={styles['madeBy']}>
    <p>Desarrollado con ❤️ por <strong>Marketing Shakers</strong></p>
  </div>
)

const Marketing = () => {
  return (
    <div className={styles['el']}>
      <Image
        src="/images/logo-black.png"
        alt="Home"
        title="Home"
        width={128}
        height={128}
        layout="fixed"
      />
      <div className="mt-6">
        <div
          className={styles['paragraph']}
         />
      </div>
      <div className="flex mt-6 items-center">
        <p className={styles['title']}>Follow us</p>
        <div className="flex -mx-2 pl-4 text-x-gray-300 items-center">
          <a
            className="px-2 duration-200 hover:text-black"
          >
            <LogoFacebook32 />
          </a>
          <a
            className="px-2 duration-200 hover:text-black"
          >
            <LogoInstagram32 />
          </a>
        </div>
      </div>
    </div>
  )
}

const Section = ({ titulo, childrens }: {
  titulo: string,
  childrens?: { titulo: string, href: string }[]
}) => (
  <div className={styles['el']}>
    <p className={styles['title']}>{titulo}</p>
    <div className={styles['links']}>
      {childrens.map((n, i) => (
        <Link href={n.href} key={i}>
          <a>{n.titulo}</a>
        </Link>
      ))}
    </div>
  </div>
)

const Isolated = () => {
  const data = useGlobalDataContext()
  const isolated = navs(data).filter(e => !e.childrens)
  return (
    <>
      {isolated.length > 0 ? (
        <Section titulo="Menu" childrens={isolated as any[]} />
      ) : null}
    </>
  )
}

const Childrens = () => {
  const data = useGlobalDataContext()
  const childrens = navs(data).filter(e => e.childrens)
  return (
    <>{childrens.map((n, i) => (
      <Fragment key={i}>
        <Section {...n}/>
      </Fragment>
    ))}</>
  )
}

const Elements = () => (
  <div className={styles['elements']}>
    <Marketing/>
    <Isolated/>
    <Childrens/>
  </div>
)

const Footer = () => (
  <footer className="p py-12 text-x-gray-500 c-lg t-16 lg:pb-12">
    <Elements />
    <MadeBy />
  </footer>
)

export default Footer
