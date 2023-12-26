import { HourData } from "../@types/common";

function formatValue(value: number | string | undefined, suffix: string): string {
  return value != null ? `${value}${suffix}` : 'N/A';
}

function getPeriod(hourData: HourData | undefined): string {
  const hourOfDay = new Date(hourData?.time || 0).getHours();

  if (hourOfDay >= 21 || hourOfDay < 3) return 'Night';
  if (hourOfDay >= 15) return 'Afternoon';
  if (hourOfDay >= 9) return 'Morning';

  return 'Dawn';
}

export function getCurrentHourCondition(hours: HourData[] | undefined) {
  const currentHour = new Date().getHours();
  const getHourFromTime = ({ time }: HourData) => new Date(time).getHours();

  return hours?.find((hour) => getHourFromTime(hour) === currentHour);
}

export function getTemperatureForTime(hours: HourData[], targetHour: number): HourData | undefined {
  const getHourFromHourData = ({ time }: HourData) => new Date(time).getHours();
  
  return hours.find((hour) => getHourFromHourData(hour) === targetHour);
}

export function formatWeatherData(hourData: HourData | undefined) {
  const { condition, temp_c, wind_mph, humidity } = hourData || {};
  
  return {
    condition: condition?.text || 'N/A',
    temperature: formatValue(temp_c, '°C'),
    windSpeed: formatValue(wind_mph, ' m/s'),
    humidity: formatValue(humidity, '%'),
    period: getPeriod(hourData),
    icon: condition?.icon || 'N/A',
  };
}


