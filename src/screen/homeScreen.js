import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
/*
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
*/

function homeScreen(props) {

  /******************************fetch data from server******************************
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    return () => {
      // 
    };
  }, [])

  ******************************Render Array of data******************************/
  /*return  loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :*/
  const products = (props.match.params.categories) ? data.products.filter(e => e.category === props.match.params.categories) : data.products.filter(e => e.category === "electronics");
  return <ul className="products">
    {
      products.map(product =>
        <ul key={product._id}>
          <li>
            <div className="product">
              <Link to={'/product/' + product._id}>
                <img className="product-image" src={product.image} alt="product" />
              </Link>
              <div className="product-name">
                <Link to={'/product/' + product._id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">₹ {product.price}</div>
            </div>
          </li>
        </ul>
      )
    }
  </ul>
}

export default homeScreen;