import React, { useContext } from 'react'
import Themes from '../../context/Themes';
import style from './Customers.module.css'

const Customers = () => {

  const customer =
    [
      {
        "customerId": "CUST-1021",
        "name": "Ram Sharma",
        "avatar": "https://i.pravatar.cc/150?img=12",
        "phone": "9841234567",
        "email": "ram.sharma@gmail.com",
        "joinedDate": "2024-11-15",
        "status": "Active"
      },
      {
        "customerId": "CUST-1022",
        "name": "Sita Rai",
        "avatar": "https://i.pravatar.cc/150?img=32",
        "phone": "9807654321",
        "email": "sita.rai@gmail.com",
        "joinedDate": "2024-12-03",
        "status": "Blocked"
      },
      {
        "customerId": "CUST-1023",
        "name": "Amit Thapa",
        "avatar": "https://i.pravatar.cc/150?img=45",
        "phone": "9812345678",
        "email": "amit.thapa@gmail.com",
        "joinedDate": "2025-01-08",
        "status": "Active"
      },
      {
        "customerId": "CUST-1024",
        "name": "Nisha Karki",
        "avatar": "https://i.pravatar.cc/150?img=47",
        "phone": "9865432198",
        "email": "nisha.karki@gmail.com",
        "joinedDate": "2025-01-20",
        "status": "Active"
      },
      {
        "customerId": "CUST-1025",
        "name": "Bikash Adhikari",
        "avatar": "https://i.pravatar.cc/150?img=59",
        "phone": "9856784321",
        "email": "bikash.adhikari@gmail.com",
        "joinedDate": "2025-02-01",
        "status": "Blocked"
      },
      {
        "customerId": "CUST-1026",
        "name": "Prakash Shrestha",
        "avatar": "https://i.pravatar.cc/150?img=61",
        "phone": "9845678912",
        "email": "prakash.shrestha@gmail.com",
        "joinedDate": "2025-02-02",
        "status": "Active"
      },
      {
        "customerId": "CUST-1027",
        "name": "Maya Gurung",
        "avatar": "https://i.pravatar.cc/150?img=65",
        "phone": "9801234567",
        "email": "maya.gurung@gmail.com",
        "joinedDate": "2025-02-03",
        "status": "Active"
      },
      {
        "customerId": "CUST-1028",
        "name": "Sanjay Khatri",
        "avatar": "https://i.pravatar.cc/150?img=70",
        "phone": "9812349876",
        "email": "sanjay.khatri@gmail.com",
        "joinedDate": "2025-02-04",
        "status": "Blocked"
      },
      {
        "customerId": "CUST-1029",
        "name": "Anita Thapa",
        "avatar": "https://i.pravatar.cc/150?img=72",
        "phone": "9867891234",
        "email": "anita.thapa@gmail.com",
        "joinedDate": "2025-02-05",
        "status": "Active"
      }
    ]


  const { themes } = useContext(Themes)

  return (
    <div className={style.whole}>

      <div className={themes ? style.tablecontainerdark : style.tablecontainer}>
        <div className={themes ? style.Ptopdark : style.Ptop}>
          <h2 className={style.h2}>Customers</h2>
        </div>
        <table className={style.table}>
          <thead className={themes ? style.theaddark : style.thead}>
            <tr>
              <th>
                Customers id
              </th>
              <th>Customer</th>
              <th>Phone</th>
              <th>E-mail</th>
              <th>Join Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className={themes ? style.tbodydark : style.tbody}>
            {customer.map((customer, index) => (
              <tr key={index}>
                <td>
                  <span className={style.orderid}>{customer.customerId}</span>
                </td>

                <td className={style.customer}>
                  <img src={customer.avatar} alt={customer.avatar} />
                  <span>{customer.name}</span>
                </td>

                <td>
                  <span className={style.status} >
                    {customer.phone}
                  </span>
                </td>

                <td className={style.total}>{customer.email}</td>
                <td className={style.date}>{customer.joinedDate}</td>

                <td className={style.menu}>{customer.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers
