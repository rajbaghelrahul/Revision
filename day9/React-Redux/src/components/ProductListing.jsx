import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productAction';
import ProductComponent from './ProductComponent';
import axios from 'axios';


const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log("Err", err);
    });
    dispatch(setProducts(response.data));
    console.log("listing",response.data);
  };

  useEffect(() => {
    fetchProducts();
  },[]);
  console.log("Products", products);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

