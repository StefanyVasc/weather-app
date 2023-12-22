import { ArrowLeft } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Header() {

  return(
    <header>
        <nav>
          <NavLink to="/">
            <ArrowLeft size={32} />
          </NavLink>
      </nav>
    </header>
    
  )
  
}