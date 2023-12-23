import { CurrentProps } from '../../@types/common'
import './style.scss'

export function Current({cityName, condition}: CurrentProps) {
  return(
    <div className='current__status'>
      <h1>{cityName}</h1>
      <span>{condition}</span>
    </div>
  )
}