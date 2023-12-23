export interface HourData {
  temp_c: number;
  time: string;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  maxtemp_c: number;
  mintemp_c: number
  wind_mph: number;
  humidity: number;
}


function formatTemperature(temperature: number | string): string  {
  return `${temperature}°C`;
}

function formatWindSpeed(windSpeed: number | undefined): string {
  return windSpeed !== undefined ? `${windSpeed} m/s` : 'N/A';
}

function formatHumidity(humidity: number | undefined): string {
  return humidity !== undefined ? `${humidity}%` : 'N/A';
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
  return {
    condition: hourData?.condition.text || 'N/A',
    temperature: formatTemperature(hourData?.temp_c || 'N/A'),
    windSpeed: formatWindSpeed(hourData?.wind_mph),
    humidity: formatHumidity(hourData?.humidity),
    period: getPeriod(hourData),
    icon: hourData?.condition.icon || 'N/A',
  };
}


