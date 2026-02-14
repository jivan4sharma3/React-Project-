import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, data } from 'react-router-dom';
import Context from './Contexts/Context';
import Home from './Pages/Home';

const App = () => {

  const [data, setData] = useState("data dharai xa hoii")



  return (
    <Context.Provider value={{ data }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
