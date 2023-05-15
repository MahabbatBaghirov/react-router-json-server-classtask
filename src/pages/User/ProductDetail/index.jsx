import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../../api/requests';

const ProductDetail = () => {

    const{id} = useParams();
    const[product,setProduct] = useState({});
    useEffect(()=>{
        getProductById(id)
        .then(data => {
            setProduct(data);
        })
    },[id])

  return (
    <>
    <div>Detail page of {product.name}</div>
    <ul>
        <li>ID: {product.id}</li>
        <li>Name: {product.name}</li>
        <li>Price: {product.price}$</li>
    </ul>
    <Link to="/products"><button>Go Back</button></Link>
    </>
  )
}

export default ProductDetail