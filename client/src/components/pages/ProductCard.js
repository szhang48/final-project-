import React, {useEffect, useState} from "react";
import './Product.css';

//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Product(props) {
    const [user, setUser]= useState({});

    useEffect(()=> {
        let User= localStorage.getItem("User");
     
     
            User= JSON.parse(User)
            setUser(User);
    
     }, [])

     const buyProduct=(product)=> {
        console.log({...product, user_id: user.id})
           
        // fetch("/own_sneakers", {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify({...product, user_id: user.id})
        // })
        // .then(res=> {
        //     alert("Product bought successfully");
        //     props.history.push("/profile")
        // })
        // .catch(err=> {
        //     console.log(err)
        // });
    }

    const { product } = props;
    return (
        <div className="container">
            
                <div className="imgBx">
                <div className="card">    
                    <p>{product["title"]}</p>
                    <img className="product-image" src={product.img_url} />
                    <p>{product.category}</p>
                    <p>Color: {product.colorway}, Brand: {product.brand}</p>
                    <p>Price: {product.retail_price}</p>
                    <p>Resell: {product.market_value}</p>
                    
                    {(user && !props.services) && <button onClick={()=> buyProduct(product)}>Buy</button>}
                    {(user && props.services) && <button>Sell</button>}
                </div>
            </div>
        </div>
    );
}


export default Product; 