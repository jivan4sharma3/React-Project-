import React, { useContext } from 'react'
import styles from './Home.module.css'
import HomeTop from './HomeTop'
import Themes from '../../context/Themes'
import ProductCards from './ProductCards'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const Home = () => {

  const { themes } = useContext(Themes)

  // Monthly Sales Data (Bar Chart)
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: [1200, 1900, 3000, 2500, 2200, 3200],
        backgroundColor: "rgba(35, 12, 182, 0.99)",
      },
      {
        label: "Monthly Orders ",
        data: [420, 490, 700, 650, 620, 720],
        backgroundColor: "rgba(93, 75, 192, 0.9)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <div className={styles.whole}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Dashboard</h1>
          <div className={themes ? styles.topdark : styles.top}>
            <HomeTop />
          </div>
          <div className={themes ? styles.bottomdark : styles.bottom}>
            <div className={themes ? styles.chardark : styles.chart}>
              <h2>Total Analysis</h2>
              <Bar className={styles.bar} data={salesData} options={chartOptions} />
            </div>


          </div>
        </div>
        <div className={styles.right}>
          <div className={themes ? styles.homeproductdark : styles.homeproduct}>
            <h2 className={styles.h2}>Popular Products</h2>
            <div className={themes ? styles.pdivdark : styles.pdiv}>
              <p>Product</p>
              <p>Earnings</p>
            </div>
            <div className={styles.products}>
              <ProductCards img={product1} />
              <ProductCards img={product2} />
              <ProductCards img={product3} />
              <ProductCards img={product4} />
            </div>
            <div className={styles.btn}>
              All Product
            </div>
          </div>
          <div className={themes ? styles.commentdark : styles.comment}>
            <h2 className={styles.h2}>Comments</h2>
            <div className={styles.ctext}>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque assumenda eligendi rerum earum deserunt.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
