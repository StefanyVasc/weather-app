import { BrowserRouter  } from 'react-router-dom';
import { Router } from './Router';
import './styles/global.scss'
import './styles/variables.scss'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App
