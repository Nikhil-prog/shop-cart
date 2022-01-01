import data from '../data';
import React, { useState } from 'react';
/*
import { Link } from 'react-router-dom';
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
*/

function productScreen(props) {
  /*
  const productDetails = useSelector((state) => state.productDetails);
  const { products, loading, error } = productDetails;
  const dispatch = useDispatch();
  */
  const [qty, setQty] = useState(1);
  const product = data.products.find((e) => e._id === props.match.params.id);

  const handleAddToCart = () => {
    props.history.push("/shop-cart/cart/" + props.match.params.id + "?qty=" + qty)
  }

  /*
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    }
  }, [])*/

  return (<div>
    { /*loading ? (<div>Loading...</div>) :
      error ? (<div> {error} </div>) : */(
        <div className="information">

          <div className="information-img">
            <img src={product.image} alt={product.name}></img>
          </div>

          <div className="information-detail">
            <ul>
              <li>
                <h2>{product.name}</h2>
              </li>
              <li>
                <h4>{product.brand}</h4>
              </li>
              <li>
                <h4> ₹ {product.price}</h4>
              </li>

              <li>
                Qty:    <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                  {[...Array(product.countInStock).keys()].map(x =>
                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                  )}
                </select>
              </li>
              <li>
                {product.countInStock > 0 ?
                  <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button> :
                  <div class="outOfStock-label">Out of stock</div>
                }
              </li>
            </ul>
          </div>

        </div>
      )}
  </div>
  );
}

export default productScreen;
