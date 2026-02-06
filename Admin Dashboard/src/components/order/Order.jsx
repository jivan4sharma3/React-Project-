import React, { useContext } from 'react'
import style from './Order.module.css'
import Themes from '../../context/Themes';

const Order = () => {


    const orders = [
        {
            id: "#390561",
            customer: "Michelle Black",
            avatar: "https://i.pravatar.cc/40?img=1",
            status: "Paid",
            total: "$780.00",
            date: "Jan 8",
        },
        {
            id: "#663334",
            customer: "Janice Chandler",
            avatar: "https://i.pravatar.cc/40?img=2",
            status: "Delivered",
            total: "$1,250.00",
            date: "Jan 6",
        },
        {
            id: "#418135",
            customer: "Mildred Hall",
            avatar: "https://i.pravatar.cc/40?img=3",
            status: "Paid",
            total: "$540.95",
            date: "Jan 5",
        },
         {
            id: "#663334",
            customer: "Janice Chandler",
            avatar: "https://i.pravatar.cc/40?img=2",
            status: "Delivered",
            total: "$1,250.00",
            date: "Jan 6",
        },
        {
            id: "#418135",
            customer: "Mildred Hall",
            avatar: "https://i.pravatar.cc/40?img=3",
            status: "Paid",
            total: "$540.95",
            date: "Jan 5",
        },
         {
            id: "#663334",
            customer: "Janice Chandler",
            avatar: "https://i.pravatar.cc/40?img=2",
            status: "Delivered",
            total: "$1,250.00",
            date: "Jan 6",
        },
        {
            id: "#418135",
            customer: "Mildred Hall",
            avatar: "https://i.pravatar.cc/40?img=3",
            status: "Paid",
            total: "$540.95",
            date: "Jan 5",
        },
         {
            id: "#663334",
            customer: "Janice Chandler",
            avatar: "https://i.pravatar.cc/40?img=2",
            status: "Delivered",
            total: "$1,250.00",
            date: "Jan 6",
        },
        {
            id: "#418135",
            customer: "Mildred Hall",
            avatar: "https://i.pravatar.cc/40?img=3",
            status: "Paid",
            total: "$540.95",
            date: "Jan 5",
        },
    ];

    const { themes } = useContext(Themes)


    return (
        <div className={style.whole}>

            <div className={themes?style.tablecontainerdark:style.tablecontainer}>
            <div className={themes?style.Ptopdark:style.Ptop}>
                <h2 className={style.h2}>Orders</h2>
            </div>
                <table className={style.table}>
                    <thead className={themes?style.theaddark:style.thead}>
                        <tr>
                            <th>
                                Order id
                            </th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody className={themes?style.tbodydark:style.tbody}>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>
                                    <input type="checkbox" />
                                    <span className={style.orderid}>{order.id}</span>
                                </td>

                                <td className={style.customer}>
                                    <img src={order.avatar} alt={order.customer} />
                                    <span>{order.customer}</span>
                                </td>

                                <td>
                                    <span
                                        className={`status ${order.status === "Paid" ? "paid" : "delivered"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>

                                <td className={style.total}>{order.total}</td>
                                <td className={style.date}>{order.date}</td>

                                <td className={style.menu}>⋯</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order
