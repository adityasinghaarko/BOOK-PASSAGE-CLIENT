import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddBook.css';

const AddBook = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [result, setResult] = useState('')

    const onSubmit = data => {
        const bookData = {
            name: data.bookName,
            authorName: data.authorName,
            price: data.price,
            coverPhotoURL: imageURL

        }
        console.log(bookData);
        fetch('https://pure-depths-95905.herokuapp.com/addBook', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res => {
            if(res.status === 200){
                setResult('Book added successfully')
            }
        })
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '2746975be4fd393225cfafdd4ff7c859')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <Container style={{ textAlign: "center" }}>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="bookName"><h5>Book Name :</h5></label>
                            <input {...register("bookName", { required: true })} />

                            <br />

                            <label htmlFor="authorName"><h5>Author Name :</h5></label>
                            <input {...register("authorName", { required: true })} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="price"><h5>Price :</h5></label>
                            <input type="number" placeholder="In Dollar" {...register("price", { required: true })} />

                            <br />

                            <label htmlFor="bookCoverPhoto"><h5>Upload Book Cover Photo ➔</h5></label>
                            <input type="file" onChange={handleImageUpload} />
                        </div>
                    </div>

                    {errors.bookName && <span style={{ color: "red" }}>Every fileds are required</span>}
                    {errors.authorName && <span style={{ color: "red" }}>Every fileds are required</span>}
                    {errors.price && <span style={{ color: "red" }}>Every fileds are required</span>}
                    <br />

                    <input className="button" type="submit" />
                </form>
                {result && <span style={{ color: "green" }}>{result}</span>}
            </Container>
        </div>

    );

};

export default AddBook;