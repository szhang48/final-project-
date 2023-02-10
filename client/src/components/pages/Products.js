import React, {useState, useEffect} from "react";
import '../../App.css';
import Product from  "./Product";

 function Products() { 
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        console.log('getProducts');
        try {
            const res = await fetch("/sneakers");
            const data = await res.json();
            console.log("data", data);
            setProducts(data);
        } catch (err) {

        }
    }




    return (
        <>
            <h1 className="products">PRODUCTS</h1>
            <div>
                {
                    products.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </>
        );
}

export default Products; 