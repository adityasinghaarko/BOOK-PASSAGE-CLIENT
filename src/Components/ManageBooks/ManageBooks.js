import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageBooks = () => {
    const [books, setBooks] = useState([])

    const BookTableRow = (props) => {
        const book = props.book;

        const deleteBook =() => {
            fetch(`https://pure-depths-95905.herokuapp.com/deleteBook/${book._id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert('Book deleted successfully. Refresh the page to see updated book list')
                }
            })
        }

        return (
            <tr>
                <td>{book.name}</td>
                <td>{book.authorName}</td>
                <td>$ {book.price}</td>
                <td><button onClick={deleteBook}>Delete</button></td>
            </tr>

        );
    }


    useEffect(() => {
        fetch('https://pure-depths-95905.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => <BookTableRow book={book}></BookTableRow>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBooks;