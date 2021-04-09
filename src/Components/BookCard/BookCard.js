import React from 'react';
import './BookCard.css'
import { Link } from 'react-router-dom';

const BookCard = (props) => {
    // console.log(props.book)
    const {name, authorName, price, coverPhotoURL, _id } = props.book
    return (
        <div className="card">
            <div className="cardImage">
                <img src={coverPhotoURL}></img>
            </div>            
            <div className="cardBody">
                <h4>{name}</h4>
                <p>{authorName}</p>
            </div>
            <div className="cardFooter row">
                <div className="col-md-6">
                    <h3 style={{color:"purple"}}>${price}</h3>
                </div>
                <div className="col-md-6">
                    <button className="btn cardButton"><Link style={{color:"white"}} to={'/checkout/'+_id}>Buy Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;