import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { ProductsDetail } from './components/ProductsDetail/ProductsDetail';
import { Service } from './components/Service/Service'
import { Footer } from './components/Footer/Footer';
import { Error404 } from './components/Error404/Error404';
import { WhatsappIcon } from './components/Footer/WhatsappIcon';
import { AboutUs } from './components/AboutUs/AboutUs';
import { ProductSelectedContext } from './context/ProductSelectedContext';


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

  const [productSelected, setproductSelected] = useState(false)


  return (
    <ProductSelectedContext.Provider value={{
      productSelected,
      setproductSelected
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
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/:id' element={<ProductsDetail />} />
            <Route path='/conocenos' element={<AboutUs />} />
            <Route  element={<Error404 />} />
{/*             <Route path='*' exact={true} element={<Error404 />} /> */}
          </Routes>
          <WhatsappIcon />
          <Footer />
        </motion.div>
      </AnimatePresence>
      </ProductSelectedContext.Provider>
  );
}

export default App;