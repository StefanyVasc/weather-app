export interface HourData {
  temp_c: number;
  time: string;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  maxtemp_c: number;
  mintemp_c: number;
  wind_mph?: number;
  humidity?: number;
}

export interface InfosProps {
  windSpeed: string;
  sunrise?: string;
  sunset?: string;
  humidity: string;
}

export interface AstroInfo {
  sunrise: string;
  sunset: string;
}

export interface WeatherInfo {
  condition: string;
  temperature: string;
  icon: string;
  humidity: string;
  windSpeed: string;
}

export interface WeatherCityProps {
  cityName: string;
}

export interface ShiftInfo {
  temperature: number | string;
  period: string;
  icon: string;
}

export interface ShiftsProps {
  shifts: ShiftInfo[];
}

export interface TemperatureProps {
  maxTemperature: number | string;
  minTemperature: number | string;
  currentTemperature: number | string;
}

export interface CurrentProps {
  condition: string;
  cityName: string;
}

export interface CurrentIconProps {
  icon: string;
  condition: string;
}
