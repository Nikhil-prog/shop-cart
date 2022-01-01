//import Axios from 'axios';
import data from '../data';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
}

const addToCart = (productId, qty) => async (dispatch) => {
    try {
        //const { data } = await Axios.get("/api/products/" + productId);
        const product = data.products.find((e) => e._id === productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
                countInStock: product.countInStock,
                qty
            }
        });
    }
    catch (error) {

    }
}


export { addToCart, removeFromCart }