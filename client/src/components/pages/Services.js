import React, {useContext, useEffect, useState} from "react";
import '../../App.css'
import { UserContext } from "../../context/UserContext";
import Product from  "./ProductCard";

export default function Services(props) { 
   // const {user}= useContext(UserContext);

useEffect(()=> {
   const user= localStorage.getItem("User");

   console.log("services", user)
    
   if(!user){
    props.history.push("/login")
   }
}, [])

    const [title, setTitle]= useState('');
    const [image, setImage] = useState('');
    const [price, setPrice]= useState('');
    const [color, setColor]= useState('');
    const [brand, setBrand]= useState('');
    const [resell,setResell]= useState('');



    const [products, setProducts]= useState([]);

    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log({title,image, brand,price, color, resell})

        const product= {title, brand, img_url: image,retail_price: price, colorway: color, market_value: resell};

        setProducts(oldProducts=> {
            return [product, ...oldProducts];
        })

        setTitle("");
        setImage("");
        setPrice("");
        setColor("");
        setBrand("");
        setResell("");
    }


    // const selectImage=()=> {
    //    document.querySelector(".file").click(); 
    //    console.log("Image",document.querySelector(".file").value)
    // } 

    const createImageUrl=(e)=> {
       // console.log(e.target.files[0])
       // const file = URL.createObjectURL(e.target.files[0])

       // console.log({file})

        setImage(e.target.value);

        // if (e.target.files.length > 0) {
        //     const file = URL.createObjectURL(e.target.files[0]);
        //     setImage(file);
        //   }
    }


    return( 
        <div>
           <h1 className="services">SERVICES</h1>

           <form className="form" onSubmit={handleSubmit}>
              <p><input type="text" placeholder="title" value={title} onChange={(e)=> setTitle(e.target.value)} required/></p>
              <p className="file-cont"><input className="file" type="file" placeholder="product image" value={image}  onChange={(e)=> createImageUrl(e)} required accept="image/*"/></p>
              {/* <p><input type="text" placeholder="product image" value={image} required onClick={selectImage}/></p> */}
              <p><input type="number" placeholder="price" value={price} onChange={(e)=> setPrice(e.target.value)} required/></p>
              <p><input type="text" placeholder="color" value={color} onChange={(e)=> setColor(e.target.value)} required/></p>
              <p><input type="text" placeholder="brand" value={brand} onChange={(e)=> setBrand(e.target.value)} required/></p>
              <p><input type="text" placeholder="resell" value={resell} onChange={(e)=> setResell(e.target.value)} required/></p>
              <p><button>Save product</button></p>
           </form>

           <div className="products-container">
           {
                    products.map(product => 
                       
                        <Product key={product.id} product={product} />
                      
                      )
                }
           </div>
        </div>
    );
}