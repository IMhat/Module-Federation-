
import React, { useState, useEffect, Suspense } from "react";
// import { createEffect, createSignal, Show } from "solid-js";


import { Link } from "react-router-dom";

import { getNewOrders} from "./modules/orders";

export default function OrdersContent(){


    const [orders, setOrders] = useState([]);
    const fetchOrders = async() =>{
        const {data} = await getOrders();
        setOrders(data);
    }

    useEffect(() => {
      try {
        fetchOrders();
      } catch (error) {
        
      }
    }, []);

    return(

        <div>
        <div className="title-addproducts">Orders
        </div>
        


               
               
  
         </div>
       
       

 

    );
}