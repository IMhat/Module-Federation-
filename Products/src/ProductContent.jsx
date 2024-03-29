

import React, { useState, useEffect, Suspense } from "react";
import { createEffect, createSignal, Show } from "solid-js";

import './styles/service2.css';
import { Link } from "react-router-dom";

// import {jwt, username} from "navKey/SideMenu";
import {jwt, username} from "navKey/UserService";
import { getProducts, currency } from "./modules/product";


export default function ProductContent(){

        // const [loggedIn, setLoggedIn] = createSignal(false);

    // createEffect(() => {
    //     return jwt.subscribe((jwt) => {
    //     setLoggedIn(!!jwt);
    //     });
    // });
    const [products, setProducts] = useState([]);
    const fetchProducts = async() =>{
        const {data} = await getProducts();
        setProducts(data);
    }

    useEffect(() => {
      try {
        fetchProducts();
      } catch (error) {
        
      }
    }, []);
    // useEffect(() => {
    //   getProducts().then(setProducts);
    // }, []);

    return(
        // <Show when={loggedIn()}>
        <div>
        <div className="title-addproducts">Add products to catalog
        </div>
        
       {/* <p>{`Username = ${username.value}`}</p>
       <p>{`Token = ${jwt.value}`}</p> */}

        {/* {JSON.stringify(products)} */}

        <div className="containerProduct">
             {products.map((product) => (
               <div className="productId" key={product.id}>
                 <Link to={`/product/${product.id}`}>
                   <img className="image" src={product.images} alt={product.name} />
                 </Link>
                 <div className="flex">
                   <div className="flex-grow font-bold">
                     <Link to={`/product/${product.id}`}>
                       <a className="nameProduct">{product.name}</a>
                       
                     </Link>
                     
                   </div>
                   
                   {/* <div className="flex-end">{product.price}</div> */}
                 </div>
                 {/* <div className="price">{currency.format(product.price)}</div> */}
                 <div className="price">{product.price} Points</div>
                 {/* <div className="description">{product.description}</div> */}
               </div>
               
               
             ))}
         </div>
       
       
        {/* <div className="home-content"> Home contentt </div> */}
    </div>
    );
}