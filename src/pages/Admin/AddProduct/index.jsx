import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { postProduct } from '../../../api/requests';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const[newProduct,setNewProduct] = useState({name:"",price:""});
    const navigate = useNavigate();
    function handleChange(e){
        setNewProduct({...newProduct,[e.target.name]:e.target.value})
    }
    async function handleSubmit(e){
        e.preventDefault();
        newProduct.id = nanoid();
        await postProduct(newProduct);
        setNewProduct({name:"",price:""});
        navigate("/admin/products");
    }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input value={newProduct.name} onChange={(e)=>handleChange(e)} placeholder='product name' name='name' type="text" />
        <input value={newProduct.price} onChange={(e)=>handleChange(e)} placeholder='product price' name='price' type="number" step="any" />
        <button type='submit'>Add Product</button>
    </form>
  )
}

export default AddProduct