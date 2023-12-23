import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { WeatherCurrent } from '../../components/WeatherCurrent/WeatherCurrent';
import { ErrorDisplay } from '../../components/Error';
import { formatWeatherData, getCurrentHourCondition, getTemperatureForTime } from '../../utils/weatherUtils';
import { logError } from '../../utils/errorUtils';
import { buildApiUrl, fetchWeatherData } from './api';
import { WeatherCityProps } from '../../@types/common';
import { Shift, WeatherApiResponse, WeatherData } from '../../@types/weather';
import './style.scss';



export function WeatherCity({ cityName }: WeatherCityProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleApiResponse = (response: WeatherApiResponse, cityName: string) => {
    if (!response?.data || response?.status !== 200) {
      const error = new Error('Erro ao buscar dados meteorológicos');
      logError(error, `handleApiResponse for ${cityName}`);
      throw error;
    }
    setWeatherData(response.data.forecast.forecastday[0]);
  };

  useEffect(() => {
    document.body.classList.add(`city-${cityName.toLowerCase()}`);

    return () => {
      document.body.classList.remove(`city-${cityName.toLowerCase()}`);
    };
  }, [cityName]);

  useEffect(() => {
    const apiUrl = buildApiUrl(cityName);

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetchWeatherData(apiUrl, cityName);
        handleApiResponse(response, cityName);
      } finally {
        setLoading(false);
      }
    };

    
    fetchData();
  }, [cityName]);

  const currentHourCondition = getCurrentHourCondition(weatherData?.hour);
  const currentWeather = formatWeatherData(currentHourCondition);
  const { hour } = weatherData || {};
  const minTemperature = Math.min(...(hour?.map((hour) => hour.temp_c) || []));
  const maxTemperature = Math.max(...(hour?.map((hour) => hour.temp_c) || []));
  const schedules = [3, 9, 15, 21];

  const shiftsPerDay: Shift[] = schedules.map((scheduledHour) => {
    const hourData = getTemperatureForTime(hour || [], scheduledHour);
    const formattedData = formatWeatherData(hourData);

    return {
      period: formattedData?.period || 'N/A',
      temperature: formattedData?.temperature || 'N/A',
      icon: formattedData?.icon || 'N/A',
    };
  });

  return (
    <div className='weather-city__container'>
      <Header cityName={cityName} />
      {loading && <Loading />}

      {weatherData ? (
        <WeatherCurrent
          cityName={cityName}
          currentWeather={currentWeather}
          minTemperature={minTemperature}
          maxTemperature={maxTemperature}
          shiftsPerDay={shiftsPerDay}
          astro={weatherData.astro}
        />
      ) : (
        <ErrorDisplay cityName={cityName} />
      )}

    </div>
  );
}
