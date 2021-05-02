import s from './styles/dropdown.module.css'
import Link from 'next/link'
import { ChevronDown16 } from '@carbon/icons-react'

const Dropdown = ({titulo, links}: {
  titulo: string,
  links: {titulo: string, href: string}[],
}) => (
  <div className={s.dropdown}>
    <div>
      <button className={s.title}>
        <span>{titulo}</span>
        <ChevronDown16 className={`ml-3 ${s.arrow}`} />
      </button>
      <div className={s.wrapper}>
        {links.map((l, i) => (
          <Link href={l.href} key={i}>
            <a className={s.navLink}>{l.titulo}</a>
          </Link>
        ))}
      </div>
    </div>
  </div>
)

export default Dropdown
