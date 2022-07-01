import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import server from './components/ServerURL';
import './Orders.css';

export default function Orders() {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        const link = server + 'orders';
        const res = await fetch(link, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem("access_token"),
            }
        })
        const data = await res.json();
        setOrders(data.orders);
        console.log(data);
    };

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <div>
            <Header />
            <div className='orders'>
                <h1>orders</h1>
                <div className="order-list">
                    {
                        orders.map((order) =>
                            <div className='order'>
                                <p>order id: {order.id}</p>
                                <p>address id: {order.address_fk}</p>
                                <p>date: {order.date}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
