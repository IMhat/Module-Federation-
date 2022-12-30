import React, { useState, useEffect, Suspense } from "react";
// import { createEffect, createSignal, Show } from "solid-js";

import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

import { getCompleteOrders } from "./modules/orders";

export default function OrdersContent() {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const { data } = await getCompleteOrders();
    setOrders(data);
  };

  useEffect(() => {
    try {
      fetchOrders();
    } catch (error) {}
  }, []);

  const tablaCampeones = [
    { id: 1, año: "2001", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 2, año: "2002", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 3, año: "2003", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 4, año: "2004", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 5, año: "2005", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 6, año: "2006", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 7, año: "2007", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 8, año: "2008", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 9, año: "2009", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 10, año: "2010", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 11, año: "2011", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 12, año: "2012", campeon: "Real Madrid", subcampeon: "Valencia FC" },
    { id: 13, año: "2013", campeon: "Real Madrid", subcampeon: "Valencia FC" },
  ];

  const columnas = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Año",
      selector: "año",
      sortable: true,
    },
    {
      name: "Campeón",
      selector: "campeon",
      sortable: true,
    },
    {
      name: "Subcampeón",
      selector: "subcampeon",
      sortable: true,
    },
  ];
  return (
    // <div className="table-responsive">
    //   <DataTable
    //     columns={columnas}
    //     data={tablaCampeones}
    //     title="Campeones UCL"
    //     pagination
    //   />
    // </div>

    <div>
      {JSON.stringify(orders)}
      <div className="mt-96">ordenes </div>
    </div>

    // <div className="">
    //   {orders.map((o) => (
    //     <div className="">
    //       <h1 className="">{o.priority}</h1>
    //       <div className="">
    //         <h1 className="">{o.id}</h1>
    //         <h1 className="">{o.products}</h1>
    //       </div>

    //       <h3>{o.status}</h3>
    //     </div>
    //   ))}
    // </div>
  );
}
