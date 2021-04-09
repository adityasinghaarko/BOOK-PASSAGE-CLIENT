import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../App';

const BookCheckOut = () => {
    const  [signedInUser, setSignedInUser] = useContext(UserContext)
    const { bookId } = useParams();
    const [book, setBook] = useState({})
    const [result, setResult] = useState('')
    const {name, price, authorName} = book;
    useEffect(() => {
        fetch(`https://pure-depths-95905.herokuapp.com/book/${bookId}`)
            .then(res => res.json())
            .then(data => setBook(data[0]))
    }, [])

    const handleCheckout = () => {
        const order = {...signedInUser, name: name,price:price,authorName:authorName, date: new Date()}
        fetch('https://pure-depths-95905.herokuapp.com/addOrder', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedCount > 0){
                setResult("Order Placed")
                alert("Order placed successfully!")
            }
        })
    }
    return (
        <div>
            <h1>Checkout</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name} (Author: {authorName})</td>
                        <td>1</td>
                        <td>$ {price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><button onClick={handleCheckout} className="btn btn-primary">Checkout</button></td>
                    </tr>
                </tbody>
            </Table>
            {
                result && <h5 style={{color:"green"}}>{result}</h5>
            }
        </div>
    );
};

export default BookCheckOut;