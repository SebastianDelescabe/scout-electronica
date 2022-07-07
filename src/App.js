import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Carrousel } from './components/Carrousel/Carrousel';
import { Navbar } from './components/Navbar/Navbar';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
