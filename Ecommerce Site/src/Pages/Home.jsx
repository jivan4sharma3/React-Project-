import React, { useContext, useState } from 'react'
import Context from '../Contexts/Context'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Home/Hero'
import Brand from '../Components/Home/Brand'
import Cards from '../Components/Cards'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'

const Home = (props) => {

  const { data } = useContext(Context)

  const [cardsDlts, setCardsDlts] = useState([
    {
      img: p1,
      name: "jivna",
      star: "⭐⭐⭐",
      rate: "3/5",
      disPrice: 200,
      ActPrice: 500
    },
    {
      img: p2,
      name: "jivna1",
      star: "⭐⭐⭐⭐",
      rate: "4/5",
      disPrice: 200,
      ActPrice: 500
    },
    {
      img: p3,
      name: "jivna2",
      star: "⭐⭐⭐",
      rate: "3/5",
      disPrice: 200,
      ActPrice: 500
    },
    {
      img: p4,
      name: "jivna3",
      star: "⭐⭐⭐⭐⭐",
      rate: "5/5",
      disPrice: 200,
      ActPrice: 500
    }
  ])

  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <Cards detailsCard={cardsDlts} head="NEW ARRIVALS" />
      <hr style={{width:"90%",margin:"auto",marginTop:"10px",color:"gray"}} />
      <Cards detailsCard={cardsDlts} head="TOP SELLING" />
    </>
  )
}

export default Home
