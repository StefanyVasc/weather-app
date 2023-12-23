import axios from 'axios';
import { format } from 'date-fns';
import { logError } from '../../utils/errorUtils';

export const buildApiUrl = (cityName: string): string => {
  const today = new Date();
  const formattedDate = format(today, 'yyyy-MM-dd');
  return `${import.meta.env.VITE_BASE_URL}?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${cityName}&dt=${formattedDate}&hour=3,9,15,21`;
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchWeatherData = async (url: string, cityName: string): Promise<any> => {
  try {
    if (!import.meta.env.VITE_WEATHER_API_KEY) throw new Error('A chave de API não está definida.');

    const response = await axios.get(url);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      logError(error, `fetchWeatherData for ${cityName}`);
    } else {
      console.error(`Unexpected error type: ${error}`);
    }
    throw error;
  }
};