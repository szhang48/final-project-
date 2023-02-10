import React from "react";
import './Product.css';

function Product(props) {
    const { product } = props;
    return (
        <div class="grid-container">
            <div class="grid-item">
                <div className="card">
                    <p>{product["title"]}</p>
                    <img className="product-image" src={product.img_url} />
                    <p>{product.category}</p>
                    <p>Color: {product.colorway}, Brand: {product.brand}</p>
                    <p>Price: {product.retail_price}</p>
                    <p>Resell: {product.market_value}</p>
                </div>
            </div>
        </div>
    );
}


export default Product; 