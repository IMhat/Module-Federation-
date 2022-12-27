

import axios from "axios";

const API_SERVER = "http://localhost:3000"

export const getNewOrders = () =>{
    
    return axios.get(`${API_SERVER}/admin/get-new-orders`)

};
export const getProcessOrders = () =>{
    
    return axios.get(`${API_SERVER}/admin/get-process-orders`)

};
export const getIncomingOrders = () =>{
    
    return axios.get(`${API_SERVER}/admin/get-incoming-orders`)

};
export const getCompleteOrders = () =>{
    
    return axios.get(`${API_SERVER}/admin/get-complete-orders`)

};

