import { Header } from '../../components/Header';
import './style.scss'

export function NotFound() {
  return (
    <div className="notfound__container">
      <Header cityName={""}/>
      <div className="notfound__wrapper">
        <h2>404 - Not Found</h2>
        <p>Sorry, the page you are looking for might be in another city.</p>
      </div>
    </div>
  );
}


