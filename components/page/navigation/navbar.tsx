import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Hamburger from './hamburguer'
import Sidebar from './sidebar'
import Dropdown from './dropdown'
import s from './styles/navbar.module.css'
import nav from '@/lib/navigation'
import { useGlobalDataContext } from '@/components/page'
import Image from 'next/image'

export interface NavbarProps {
  transparent?: boolean
}

export default function Navbar({ transparent }: NavbarProps) {
  const [sidebar, setSidebar] = useState(false)
  const [scrollY, setScrollY] = useState<number>(null)
  const toggleSidebar = () => (setSidebar(!sidebar))
  const globalData = useGlobalDataContext()

  const scrollHander = () => {
    setScrollY(window.scrollY)
    showingHandler()
  }

  const [isShowing, setShowing] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const showingHandler = () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition < 0) {
      return
    }
    // Stop executing this function if the difference between
    // current scroll position and last scroll position is less than some offset
    if (Math.abs(currentScrollPosition - lastScrollPosition) < 128) {
      return
    }
    if (currentScrollPosition > 128) {
      setShowing(currentScrollPosition < lastScrollPosition)
    } else {
      setShowing(true)
    }
    setLastScrollPosition(currentScrollPosition)
  }

  useEffect(() => {
    if (scrollY === null) {
      scrollHander()
    }
    window.addEventListener('scroll', scrollHander, { passive: true })
    return () => (window.removeEventListener('scroll', scrollHander))
  })

  return (
    <>
      <header className={`${s.header} duration-500 transform-gpu ${(scrollY == 0 && transparent) && 'transparent'} ${(!sidebar && !isShowing) && '-translate-y-full pointer-events-none'}`}>
        <Sidebar open={sidebar} toggle={toggleSidebar} />
        <div className={`${s.headerWrapper} border-b duration-200 ${scrollY == 0 && transparent ? 'border-gray-50' : 'border-x-gray-200'}`}>
          <div className="flex overflow-hidden pointer-events-auto">
            <Link href="/">
              <a title="Home" className="font-bold font-title transform text-2xl text-blue-800 duration-200 overflow-hidden hover:scale-95">
                <div className="transform duration-200 logo hover:scale-95">
                  <Image
                    src="/images/logo.png"
                    alt="Home"
                    title="Home"
                    width={490 / 4}
                    height={213 / 4}
                    quality={90}
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className={s.elements}>
            <div className="mr-2 transition-all duration-200 items-center hidden lg:flex">
              {nav(globalData).map((n, i) => n.childrens ? (
                <Fragment key={i}>
                  <Dropdown titulo={n.titulo} links={n.childrens} />
                </Fragment>
              ) : (
                <Link href={n.href || '/'} key={i}>
                  <a className="border-transparent font-bold border-b-[3px] mx-4 -mt-[3px] title hover:border-blue-500">{n.titulo}</a>
                </Link>
              ))}
            </div>
            <Link href="/menu">
              <a
                className={`bg-transparent rounded-full font-bold border-2 text-sm mb-[2px] py-2 px-4 duration-200 lg:text-base ${scrollY == 0 && transparent ? 'border-gray-50 text-gray-50 hover:bg-gray-50 hover:text-x-gray-900' : 'border-x-gray-800 text-x-gray-800 hover:bg-x-gray-800 hover:text-white'}`}
              >Contáctanos</a>
            </Link>
            <div className="ml-6 lg:hidden">
              <Hamburger open={sidebar} toggle={toggleSidebar} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
