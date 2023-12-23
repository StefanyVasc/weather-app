import { WeatherCurrentProps } from "../../@types/weather";
import { Current } from "../Current";
import { CurrentIcon } from "../CurrentIcon";
import { Infos } from "../Infos/Infos";
import { Shifts } from "../Shifts";
import { Temperature } from "../Temperature";

export function WeatherCurrent({ 
  cityName,
  currentWeather,
  minTemperature,
  maxTemperature,
  shiftsPerDay,
  astro
}: WeatherCurrentProps) {
  
  return (
    <div className='weather__current'>
      <Current cityName={cityName} condition={currentWeather.condition}/>
      <Temperature
        currentTemperature={currentWeather.temperature}
        minTemperature={minTemperature}
        maxTemperature={maxTemperature} />
      <CurrentIcon icon={currentWeather.icon} condition={currentWeather.condition}/>
      <Shifts shifts={shiftsPerDay} />
      <Infos
        humidity={currentWeather.humidity}
        sunrise={astro?.sunrise}
        sunset={astro?.sunset}
        windSpeed={currentWeather.windSpeed} />
    </div>
  );
}
