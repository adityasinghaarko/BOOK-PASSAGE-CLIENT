import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import BookCard from '../BookCard/BookCard';
import './Home.css'

const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://pure-depths-95905.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setLoading(false)
            })
    }, [])

    return (
        <Container className="booksContainer">
            {loading && <Spinner animation="border" />}
            {
                books.map(book => <BookCard book={book}/>)
            }
        </Container>
    );
};

export default Home;