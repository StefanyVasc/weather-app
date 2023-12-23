import { HourData } from "../@types/types";

function formatTemperature(temperature: number | string): string {
  return `${temperature}°C`;
}

function formatWindSpeed(windSpeed: number | undefined): string {
  return windSpeed ? `${windSpeed} m/s` : 'N/A';
}

function formatHumidity(humidity: number | undefined): string {
  return humidity ? `${humidity}%` : 'N/A';
}

function getPeriod(hourData: HourData | undefined): string {
  const hourOfDay = new Date(hourData?.time || 0).getHours();

  if (hourOfDay < 6) return 'Dawn';
  if (hourOfDay < 12) return 'Morning';
  if (hourOfDay < 18) return 'Afternoon';
  
  return 'Night';
}

export function getCurrentHourCondition(hours: HourData[] | undefined) {
  const currentHour = new Date().getHours();
  return hours?.find((hour) => new Date(hour.time).getHours() === currentHour);
}

export function getTemperatureForTime(hours: HourData[], targetHour: number): HourData | undefined {
  return hours.find((hour) => new Date(hour.time).getHours() === targetHour);
}

export function formatWeatherData(hourData: HourData | undefined) {
  const { condition, temp_c, wind_mph, humidity } = hourData || {};
  
  return {
    condition: condition?.text || 'N/A',
    temperature: formatTemperature(temp_c || 'N/A'),
    windSpeed: formatWindSpeed(wind_mph),
    humidity: formatHumidity(humidity),
    period: getPeriod(hourData),
    icon: condition?.icon || 'N/A',
  };
}


