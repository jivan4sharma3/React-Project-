import React, { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Themes from './context/Themes'

const App = () => {


  // Create a state which change the themes of site
  const [themes, setThemes] = useState(true)

  return (
    <>
      <Themes.Provider value={{ themes, setThemes }}>
        <Dashboard />
      </Themes.Provider>
    </>
  )
}

export default App
