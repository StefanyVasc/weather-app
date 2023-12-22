import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
import { NotFound } from './pages/404';
import { WeatherCity } from './pages/WeatherCity';
import { City, cities } from './utils/cities';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />

        {cities.map((cityData: City) => (
          <Route
            key={cityData.id}
            path={`/${cityData.city.toLowerCase()}`}
            element={<WeatherCity cityName={cityData.city} location={cityData.location} />}
          />
        ))}

      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
