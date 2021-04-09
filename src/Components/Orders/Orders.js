import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Orders = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://pure-depths-95905.herokuapp.com/orders?email=${signedInUser.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    })

    const OrderTableRow = (props) => {
        const order = props.order;

        return (
            <tr>
                <td>{order.name} by ${order.authorName}</td>
                <td> 1</td>
                <td>$ {order.price}</td>
                <td>{order.date}</td>
            </tr>

        );
    }
    return (
        <div>
            <h3>Your orders</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Order Placed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderTableRow order={order}></OrderTableRow>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default Orders;