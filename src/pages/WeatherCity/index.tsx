import { Header } from "../../components/Header";

interface WeatherCityProps {
  cityName: string;
  temperature?: string;
  description?: string;
  location: string;
}

export function WeatherCity({ cityName, temperature, description, location }: WeatherCityProps) {
  return (
    <div>
      <Header />
      <h1>{cityName}</h1>
      <p>Temperature: {temperature}</p>
      <p>Description: {description}</p>
      <p>Location: {location}</p>
    </div>
  );
}
