import { ArrowLeft } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import './style.scss'

interface HeaderProps {
  cityName: string;
}

export function Header({ cityName }: HeaderProps) {

  const cityClass = cityName.toLowerCase()
  return(
    <header className='header__container'>
      <nav className={`city-${cityClass}`}>
        <NavLink to="/">
          <ArrowLeft size={32} />
        </NavLink>
      </nav>
    </header>
  )
}