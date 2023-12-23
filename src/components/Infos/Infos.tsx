import { InfosProps } from '../../@types/common'
import './style.scss'

export function Infos({windSpeed, sunrise, sunset, humidity}: InfosProps){
  return (
    <div className="infos__container">
      <div className="info__wrapper">
        <div className='item'>
          <span>wind speed</span>
          <span>{windSpeed}</span>
        </div>
        <span className='separator'/>
      </div>
      <div className="info__wrapper">
        <div className='item'>
          <span>sunrise</span>
          <span>{sunrise}</span>
        </div>
        <span className='separator'/>
      </div>
      <div className="info__wrapper">
        <div className='item'>
          <span>sunset</span>
          <span>{sunset}</span>
        </div>
        <span className='separator'/>

      </div>
      <div className="info__wrapper">
        <div className='item'>
          <span>humidity</span>
          <span>{humidity}</span>
        </div>
        <span className='separator'/>
      </div>

    </div>
  )
}