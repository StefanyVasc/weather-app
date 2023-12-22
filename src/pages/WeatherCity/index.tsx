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

interface WeatherCityProps {
  cityName: string;
}

interface WeatherData {
  hour: HourData[];
  astro?: {
    sunrise: string;
    sunset: string;
  };
}

const WEATHER_API_URL = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '4f4e2ab84aa84297a37221347232112';

export function WeatherCity({ cityName }: WeatherCityProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
  const schedules = [3, 9, 15, 21];

  return (
    <div>
      <Header selectedCity={cityName} />
      <h1>{cityName}</h1>

      {loading && <p>Carregando...</p>}

      {weatherData && (
        <div>
          <p>Condição atual: {formatWeatherData(currentHourCondition).condition}</p>
          <p>Temperature Now: {formatWeatherData(currentHourCondition).temperature}</p>

          {schedules.map((hour) => {
            const hourData = getTemperatureForTime(weatherData.hour, hour);
            return (
              <p key={hour}>
                Temperature {formatWeatherData(hourData)?.temperature} {formatWeatherData(hourData)?.period}
              </p>
            );
          })}
          <p>Wind Speed: {formatWeatherData(currentHourCondition).windSpeed}</p>
          <p>Humidity: {formatWeatherData(currentHourCondition).humidity}</p>
          <p>Sunrise: {weatherData.astro?.sunrise}</p>
          <p>Sunset: {weatherData.astro?.sunset}</p>
        </div>
      )}
    </div>
  );
}
