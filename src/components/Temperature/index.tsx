import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import { TemperatureProps } from "../../@types/common";
import './style.scss'

export function Temperature({ 
  maxTemperature,
  minTemperature,
  currentTemperature
}: TemperatureProps) {

  return (
    <div className="temperatures">
      <span className="temperatures__current">
        { typeof currentTemperature === 'number'
           ? `${Math.round(currentTemperature)}`
           : currentTemperature.replace('°C', '')
        }
      </span>

      <div className="temperatures__wrapper">
        <span className="temperature__unity">°C</span>

        <div className="temperature__partials">
          <div className="partials__max">
            <ArrowUp size={16} weight="thin"/>
            <p>{maxTemperature}°</p>
          </div>
          
          <div className="partials__min">
            <ArrowDown size={16} weight="thin"/>
            <p>{minTemperature}°</p> 
          </div>
        </div>
      </div>
    </div>
  )
}