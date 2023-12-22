import { ArrowLeft } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import './style.scss'

interface HeaderProps {
  selectedCity: string;
}

export function Header({ selectedCity }: HeaderProps) {

  
  return(
    <header className='header__container'>
      <nav>
        <NavLink to="/">
          <ArrowLeft size={32} />
          {selectedCity}
        </NavLink>
      </nav>
    </header>
    
  )
  
}