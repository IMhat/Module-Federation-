// const API_SERVER = "http://localhost:3000";

import axios from "axios";
import {jwt, username} from "navKey/UserService";

const API_SERVER = "http://localhost:3000"

export const getProducts = () =>{
    

    return axios.get(`${API_SERVER}/admin/get-products`)


}

