import { GlobeHemisphereEast } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { cities, City } from '../../utils/cities';

export function Home() {

  return (
    <div className="home__container">
      <header className='home__header'>
        <span>Weather</span>
        <p>select a city</p>
      </header>
      <main className='home__main'>
        <GlobeHemisphereEast size={140} weight='thin'/>

        <div className="cities__wrapper">
          {cities.map((item: City) => (
            <NavLink
              key={item.id}
              to={`/${item.city.toLowerCase()}`}
              className="custom-link"
            >
              {item.city}
            </NavLink>
          ))}
        </div>
      </main>
    </div>
  );
}
