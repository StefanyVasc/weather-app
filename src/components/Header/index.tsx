import { ArrowLeft } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'


export function Header() {

  return(
    <nav>
        <NavLink to="/">
          <ArrowLeft size={32} />


        </NavLink>

      </nav>
  )
  
}