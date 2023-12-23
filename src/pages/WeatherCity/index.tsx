import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header';
import { format } from 'date-fns';
import {
  getTemperatureForTime,
  formatWeatherData,
  HourData,
  getCurrentHourCondition,
} from '../../utils/weatherUtils';
import { Temperature } from '../../components/Temperature';
import { Shifts } from '../../components/Shifts';
import './style.scss'

interface WeatherCityProps {
  cityName: string;
}

export interface WeatherData {
  hour: HourData[];
  astro?: {
    sunrise: string;
    sunset: string;
  };
}

const WEATHER_API_URL = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '4f4e2ab84aa84297a37221347232112';

export function WeatherCity({ cityName}: WeatherCityProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.body.classList.add(`city-${cityName.toLowerCase()}`);

    return () => {
      document.body.classList.remove(`city-${cityName.toLowerCase()}`);
    };
  }, [cityName]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);

        if (!API_KEY) throw new Error('A chave de API não está definida.');

        const today = new Date();
        const formattedDate = format(today, 'yyyy-MM-dd');
        const apiUrl = `${WEATHER_API_URL}?key=${API_KEY}&q=${cityName}&dt=${formattedDate}&hour=3,9,15,21`;

        const response = await axios.get(apiUrl);

        if (!response?.data || response?.status !== 200) {
          throw new Error('Erro ao buscar dados meteorológicos');
        }

        setWeatherData(response.data.forecast.forecastday[0]);


      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(`Erro ao buscar dados meteorológicos para ${cityName}: ${error.message}`);
      
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [cityName]);

  const currentHourCondition = getCurrentHourCondition(weatherData?.hour);
  const currentWeather = formatWeatherData(currentHourCondition);
  const minTemperature = Math.min(...weatherData?.hour.map((hour) => hour.temp_c) || []);
  const maxTemperature = Math.max(...weatherData?.hour.map((hour) => hour.temp_c) || []);
  const schedules = [3, 9, 15, 21];

  const shiftsPerDay = schedules.map((scheduledHour) => {
    const hourData = getTemperatureForTime(weatherData?.hour || [], scheduledHour);
    const formattedData = formatWeatherData(hourData);
   
  
    return {
      period: formattedData?.period || 'N/A',
      temperature: formattedData?.temperature || 'N/A',
      icon: formattedData?.icon || 'N/A',
    };
  });

  console.log(currentWeather.condition)

  return (
    <div className='weather-city__container'>
      <Header cityName={cityName}/>

      {loading && <p>Carregando...</p>}

      {weatherData && (
        <div className='weather__current'>
          <div className='current__status'>
            <h1>{cityName}</h1>
            <span>{currentWeather.condition}</span>
            <img 
              src={`https:${currentWeather.icon}`} 
              alt={`A symbol represents the weather at a temperature o ${currentWeather.condition}`}
            />
          </div>

          <Temperature 
            currentTemperature={currentWeather.temperature}  
            minTemperature={minTemperature}
            maxTemperature={maxTemperature}
          />


          <Shifts shifts={shiftsPerDay} />


          <p>Wind Speed: {currentWeather.windSpeed}</p>
          <p>Humidity: {currentWeather.humidity}</p>
          <p>Sunrise: {weatherData.astro?.sunrise}</p>
          <p>Sunset: {weatherData.astro?.sunset}</p>
        </div>
      )}
    </div>
  );
}
