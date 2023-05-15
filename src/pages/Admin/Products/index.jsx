import React, { useEffect, useState } from 'react'
import { deleteProductById, getAllProducts } from '../../../api/requests';
import { Link } from 'react-router-dom';

const Products = () => {

  const[products,setProducts] = useState([]);
  useEffect(()=>{
    getAllProducts()
    .then(data => {
        setProducts(data);
    })
  },[])

  return (
    <>
    <div>Products</div>
    <ul>
        {
            products && products.map((product)=>{
                return <li key={product.id}>{product.name} 
                <button onClick={()=>{
                    if (window.confirm("are you sure ?")) {
                        deleteProductById(product.id);
                        let filteredProducts = products.filter((pro)=>pro.id!=product.id);
                        setProducts(filteredProducts);
                    }
                }}>delete</button> 
            <Link to={`/admin/products/edit/${product.id}`}><button>edit</button></Link>
            </li>
            })
        }
    </ul>
    </>
  )
}

export default Products