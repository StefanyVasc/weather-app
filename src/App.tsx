import './styles/global.scss'
import './styles/variables.scss'
import { BrowserRouter  } from 'react-router-dom';
import { Router } from './Router';

function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App
