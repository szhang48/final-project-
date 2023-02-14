import React, {useState, useEffect} from "react";
import '../../App.css';
import Product from  "./ProductCard";



 function Products() { 
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [mainProducts, setMainProducts] = useState([]);
    
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
            setMainProducts(data);
        } catch (err) {

        }
    }

    const filterProducts= (value)=> {
        setProducts(mainProducts);


        // products.filter(product=> product.title.toLowerCase().includes(value.toLowerCase()))
         setProducts(oldProducts=> {
             return oldProducts.filter(product=> product.title.toLowerCase().includes(value.toLowerCase()))  
         })
    }




    return (
        <>
            <h1 className="products">PRODUCTS</h1>

            <p className="search-bar"><input type="text" placeholder="search product..." value={searchValue} onChange={(e)=>{setSearchValue(e.target.value); filterProducts(e.target.value)}}/></p>
            
            <div className="products-container">
                {
                    products.map(product => 
                       
                        <Product key={product.id} product={product} />
                      
                      )
                }
            </div>
        </>
        );
}

export default Products; 