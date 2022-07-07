import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
