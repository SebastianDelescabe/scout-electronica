import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Carrousel } from './components/Carrousel/Carrousel';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route exact path='/' element={<Carrousel />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
