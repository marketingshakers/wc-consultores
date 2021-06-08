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
        src="/images/logo.png"
        alt="WC Consultores"
        width={490/2}
        height={213/2}
        objectFit="contain"
        layout="fixed"
      />
    </div>
  )
}

const Section = ({ childrens }: {
  childrens?: { titulo: string, href: string }[]
}) => (
  <div className={styles['el']}>
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
        <Section childrens={isolated as any[]} />
      ) : null}
    </>
  )
}

const Elements = () => (
  <div className={styles['elements']}>
    <Marketing />
    <Isolated />
    <div className={styles['el']}>
      <div className={styles['links']}>
        <Link href="/legal/cookies">
          <a>Políticas de Cookies</a>
        </Link>
      </div>
    </div>
    <MadeBy />
  </div>
)

const Footer = () => (
  <footer className="py-12 text-x-gray-500 c-lg lg:pb-12">
    <Elements />
  </footer>
)

export default Footer
