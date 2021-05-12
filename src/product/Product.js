import React, {Component} from "react";
import './Product.css';

const product = (props) => {
    let productInfo = props.product
    return (
        <div className="card">
            <img src={productInfo.image} alt="Product Image" />
            <h3>{productInfo.name}</h3>
            <p className="price">&#163; {productInfo.price}</p>
            <p>{productInfo.location}</p>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default product;
