import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';

import { AnimatePresence, motion } from 'framer-motion';

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0
  }
}

function App() {
  return (
    <AnimatePresence>
      <Navbar />
      <motion.div
        className='page'
        initial='out'
        animate='in'
        exit='out'
        transition={{ delay: 0.5 }}
        variants={pageTransition}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
