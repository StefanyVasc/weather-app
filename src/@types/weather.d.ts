// weather-types.ts

import { HourData, AstroInfo, WeatherInfo, WeatherCityProps, ShiftsProps } from './common';

export interface WeatherData {
  hour: HourData[];
  astro?: AstroInfo;
}

export interface WeatherCurrentProps extends WeatherCityProps {
  currentWeather: WeatherInfo;
  minTemperature: number;
  maxTemperature: number;
  shiftsPerDay: ShiftsProps['shifts'];
  astro?: AstroInfo;
}

export interface Shift {
  period: string;
  temperature: string;
  icon: string;
}

export interface WeatherApiResponse {
  data: {
    forecast: {
      forecastday: WeatherData[];
    };
  };
  status: number;
}
