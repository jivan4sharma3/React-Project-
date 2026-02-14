import React, { useContext } from 'react'
import Context from '../Contexts/Context'
import Navbar from '../Components/Navbar'
import Theme from '../Components/Theme'
import Hero from '../Components/Home/Hero'
import Brand from '../Components/Home/Brand'

const Home = () => {

  const { data, theam } = useContext(Context)

  return (
    <>
      <Navbar />
      <Theme />
      <Hero />
      <Brand />
    </>
  )
}

export default Home
