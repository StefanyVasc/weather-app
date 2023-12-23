import { CurrentIconProps } from '../../@types/common'
import './style.scss'

export function CurrentIcon({icon, condition}: CurrentIconProps){
  return(
    <div className='current__icon'>
      <img
        className='icon'
        src={`https:${icon}`}
        alt={`A symbol represents the weather at a temperature o ${condition}`} />
    </div>
  )
}