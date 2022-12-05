import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { Productos } from './components/Productos/Productos';
import { Service } from './components/Service/Service'
import { Footer } from './components/Footer/Footer';
import { Error404 } from './components/Error404/Error404';
import { WhatsappIcon } from './components/Footer/WhatsappIcon';
import { ProductContext } from './helper/ProductContext';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';


const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0
  }
}

function App() {
  const [productTitle, setProductTitle] = useState(null)

  useEffect(() => {
    if (window.location.pathname !== 'contact') {
      setProductTitle(null)
    }
  }, [productTitle])

  return (
    <ProductContext.Provider value={{
      productTitle,
      setProductTitle,
    }}>
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
            <Route path='/contact' element={<Contact data={productTitle} />} />
            <Route path='/service' element={<Service />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='*' exact={true} element={<Error404 />} />
          </Routes>
          <WhatsappIcon />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </ProductContext.Provider>
  );
}

export default App;
