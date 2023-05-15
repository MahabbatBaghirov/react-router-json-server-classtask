import { BASE_URL } from "./base_url";
import axios from "axios";


export const getAllProducts = async()=> {
    let globalData;
    await axios.get(`${BASE_URL}/products`)
    .then(res => {
        globalData = res.data;
    })
    return globalData;
}

export const getProductById = async(id)=> {
    let globalData;
    await axios.get(`${BASE_URL}/products/${id}`)
    .then(res => {
        globalData = res.data;
    })
    return globalData;
}

export const postProduct =(payload)=> {
    axios.post(`${BASE_URL}/products/`,payload);
}


export const putProduct =(id,payload)=> {
    axios.put(`${BASE_URL}/products/${id}`,payload);
}

export const deleteProductById =(id)=> {
    axios.delete(`${BASE_URL}/products/${id}`);
}